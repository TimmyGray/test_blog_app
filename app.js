import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import * as mongodb from 'mongodb';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { articlesRouter } from './routers/articles_router.js';
import { usersRouter } from './routers/users_router.js';
import { checkToken } from './authorization/authorize.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const { CONNECTION_STRINGS } = process.env;
const { CLIENT_URL } = process.env;
const { PORT } = process.env;
const { SECRET_TOKEN } = process.env;
const { isCloudary } = process.env;
const { CLOUDINARY_URL } = process.env;
const connectionstring = process.env.CONNECTION_STRINGS || CONNECTION_STRINGS || "mongodb://127.0.0.1:12908";
const port = process.env.PORT || PORT || 3200;
const clienturl = process.env.CLIENT_URL || CLIENT_URL || "http://localhost:3200";
export const secrettoken = process.env.SECRET_TOKEN || SECRET_TOKEN || 'themostsecrettokenintheworld';
export const iscloudary = process.env.isCloudary || isCloudary || 0;
export const cloudaryurl = process.env.CLOUDARY_URL || CLOUDINARY_URL;
const mongoclient = new mongodb.MongoClient(connectionstring);
export const app = Express();
app.use(Express.json());
app.use(Cors());
await mongoclient.connect()
    .then((client) => {
    console.info('Connection established');
    app.locals.userscollection = client.db('blogsdb').collection('users');
    app.locals.articlescollection = client.db('blogsdb').collection('articles');
    app.locals.mediastorage = new mongodb.GridFSBucket(client.db('blogsdb'), { bucketName: 'mediastorage', chunkSizeBytes: 16 * 1024 });
})
    .catch((e) => {
    console.error('Error connect to db');
    console.error(e);
});
app.use(Express.static('public'));
app.use(Express.urlencoded({ extended: true }));
app.use('/users', usersRouter);
app.use('/articles', checkToken, articlesRouter);
app.get("/", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});
app.listen(port, () => {
    console.info(`server listen on port ${port}`);
});
//# sourceMappingURL=app.js.map