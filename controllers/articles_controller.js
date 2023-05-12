import { ObjectId } from 'mongodb';
import { Readable } from 'stream';
import { Article } from '../models/article.js';
import { iscloudary } from '../app.js';
export class ArticlesController {
    async getArticles(req, res) {
        console.info('Get Articles');
        const collection = req.app.locals.articlescollection;
        const page = parseInt(req.params.page);
        const countonpage = 20;
        let countdocuments = 0;
        await collection.countDocuments({})
            .then(data => {
            if (data % countonpage == 0) {
                countdocuments = data / countonpage;
            }
            else {
                let rounddata = Math.round(data / countonpage);
                if (rounddata > data / countonpage) {
                    countdocuments = rounddata;
                }
                else {
                    countdocuments = rounddata + 1;
                }
            }
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when count articles');
        });
        collection.find({}).skip((page - 1) * countonpage).limit(countonpage).toArray()
            .then((data) => {
            console.log(data);
            return res.send({
                articles: data,
                counts: countdocuments
            });
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send(`Error when get`);
        });
    }
    async getMedia(req, res) {
        console.info('Get Medias');
        if (!req.params) {
            console.error('Empty body');
            return res.status(400).send('Empty body');
        }
        const id = new ObjectId(req.params._id);
        console.info(id);
        const collection = req.app.locals.mediastorage;
        res.setHeader('accept-range', 'bytes');
        collection.openDownloadStream(id).on('data', (chank) => {
            res.write(chank);
        }).on('error', (e) => {
            console.log(e);
            res.status(404);
        }).on('end', () => {
            res.end();
        });
    }
    async postArticle(req, res) {
        console.info('Add Article');
        if (!req.body) {
            console.error('Empty body');
            return res.status(400);
        }
        let article = new Article(new Date(), JSON.parse(req.body.message), req.body.username);
        const collection = req.app.locals.articlescollection;
        if (req.file) {
            console.info('Upload file');
            let media = req.file;
            let type = media.mimetype.split('/');
            let name = media.originalname.split('.');
            let filename = '';
            for (let i = 0; i < name.length - 1; i++) {
                filename = filename + name[i];
            }
            const bucket = req.app.locals.mediastorage;
            const read = new Readable();
            read.push(media.buffer);
            read.push(null);
            const id = read.pipe(bucket.openUploadStream(media.originalname, { contentType: media.mimetype })).id;
            article.message = { _id: id, msgvalue: media.originalname, type: type[0] };
            console.log(id);
        }
        else {
            if (iscloudary == '0') {
                console.info('No file in request');
                article.message = { _id: '', msgvalue: article.message.msgvalue, type: article.message.type };
            }
        }
        let _id;
        await collection.insertOne(article)
            .then((data) => {
            console.log(data.insertedId);
            _id = data.insertedId;
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when insert');
        });
        const countonpage = 20;
        let countdocuments = 0;
        await collection.countDocuments({})
            .then(data => {
            if (data % countonpage == 0) {
                countdocuments = data / countonpage;
            }
            else {
                let rounddata = Math.round(data / countonpage);
                if (rounddata > data / countonpage) {
                    countdocuments = rounddata;
                }
                else {
                    countdocuments = rounddata + 1;
                }
            }
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when count articles');
        });
        return res.send({
            _id: _id,
            date: article.date,
            message: article.message,
            username: article.username,
            counts: countdocuments
        });
    }
    putArticle(req, res) {
        if (!req.body) {
            console.error('Empty body');
            res.status(400).send('Empty body');
        }
        let article = new Article(new Date, JSON.parse(req.body.message), req.body.username);
        const id = new ObjectId(req.body._id);
        const collection = req.app.locals.articlescollection;
        const bucket = req.app.locals.mediastorage;
        if (req.file) {
            let media = req.file;
            let type = media.mimetype.split('/');
            let name = media.originalname.split('.');
            let filename = '';
            for (let i = 0; i < name.length - 1; i++) {
                filename = filename + name[i];
            }
            let read = new Readable();
            read.push(media.buffer);
            read.push(null);
            bucket.delete(article.message._id);
            const id = read.pipe(bucket.openUploadStream(filename, { contentType: media.mimetype })).id;
            article.message = { _id: id, msgvalue: media.originalname, type: type[0] };
            console.log(id);
        }
        else {
            if (iscloudary == '0') {
                console.info('No file in request');
                article.message = { _id: '', msgvalue: article.message.msgvalue, type: article.message.type };
            }
        }
        collection.findOneAndReplace({ _id: id }, article, { returnDocument: 'after' })
            .then(data => {
            console.log(data.value);
            return res.send(data.value);
        })
            .catch(e => {
            console.log(e);
            return res.status(500).send("Error when update");
        });
    }
    async deleteArticle(req, res) {
        console.info('Delete Article');
        if (!req.body) {
            console.error('Empty body');
            return res.status(400).send('Empty body');
        }
        const collection = req.app.locals.articlescollection;
        const bucket = req.app.locals.mediastorage;
        const id = new ObjectId(req.params._id);
        const ismedia = false;
        let article;
        collection.findOne({ _id: id })
            .then(value => {
            return article = value;
        })
            .then(value => collection.findOneAndDelete({ _id: value._id }))
            .then(value => bucket.delete(article.message._id))
            .then(() => {
            res.send('Successful delete');
        })
            .catch(e => {
            console.error(e);
            res.status(500).send('Error when delete');
        });
    }
}
//# sourceMappingURL=articles_controller.js.map