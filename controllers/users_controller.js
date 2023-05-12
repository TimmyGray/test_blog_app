import { ObjectId } from 'mongodb';
import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwbt from 'jsonwebtoken';
import { secrettoken } from '../app.js';
export class UsersController {
    async registerUser(req, res) {
        console.info('registration');
        if (!req.body) {
            console.error('Bad request');
            return res.status(400).send('Empty body');
        }
        if (req.body.login == '' || req.body.password == '') {
            console.error('Empty fields');
            return res.status(400).send('Some fields are empty');
        }
        const newUser = new User(req.body.login, req.body.password, '');
        const collection = req.app.locals.userscollection;
        const existingUser = await collection.findOne({ login: newUser.login });
        if (existingUser) {
            console.error('This user already exist');
            return res.status(400).send('This user already exist');
        }
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(newUser.password, salt);
        newUser.password = encryptedPassword;
        await collection.insertOne(newUser)
            .then((data) => {
            const token = jwbt.sign({ id: data.insertedId }, secrettoken);
            console.log(token);
            return res.send({ 'token': token });
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when register');
        });
    }
    async loginUser(req, res) {
        console.info('login');
        if (!req.body) {
            console.error('Bad request');
            return res.status(400).send('Empty body');
        }
        if (req.body.login == '' || req.body.password == '') {
            console.error('Empty fields');
            return res.status(400).send('Some fields are empty');
        }
        const logUser = new User(req.body.login, req.body.password, '');
        const collection = req.app.locals.userscollection;
        const existUser = await collection.findOne({ login: logUser.login });
        if (!existUser) {
            console.error('This user does not exist');
            return res.status(400).send('This user does not exist');
        }
        const samepass = await bcrypt.compare(logUser.password, existUser.password);
        if (!samepass) {
            console.error('Invalid password');
            return res.status(400).send('Invalid password');
        }
        const token = jwbt.sign({ id: existUser._id }, secrettoken);
        console.log(token);
        return res.send({ 'token': token });
    }
    async putUser(req, res) {
        if (!req.body) {
            console.error('Empty body');
            return res.status(400).send('Empty body');
        }
        if (req.body.login == '' || req.body.password == '' || req.body.newpassword == '') {
            console.log('Empty fields');
            return res.status(400).send('Some fields are empty');
        }
        const editUser = new User(req.body.login, req.body.password, req.body.token);
        const collection = req.app.locals.userscollection;
        const existUser = await collection.findOne({ login: editUser.login });
        if (!existUser) {
            console.error('This user does not exist');
            return res.status(400).send('This user does not exist');
        }
        const samepass = await bcrypt.compare(editUser.password, existUser.password);
        if (!samepass) {
            console.error('Incorrect password');
            return res.status(400).send('Incorrect password');
        }
        const id = new ObjectId(req.body._id);
        collection.findOneAndUpdate({ _id: id }, { $set: { password: req.body.newpassword } }, { returnDocument: 'after' })
            .then((data) => {
            console.log(`Update password :${data.value._id}`);
            return res.send(editUser.token);
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when updating');
        });
    }
    async deleteUser(req, res) {
        if (!req.body) {
            console.error('Bad request');
            return res.status(400).send('Empty body');
        }
        if (req.body.login == '' || req.body.password == '') {
            console.error('Empty fields');
            return res.status(400).send('Some fields are empty');
        }
        const deleteUser = new User(req.body.login, req.body.password, req.body.token);
        const collection = req.app.locals.userscollection;
        const existUser = await collection.findOne({ login: deleteUser.login });
        if (!existUser) {
            console.error('This user does not exist');
            return res.status(400).send('This user does not exist');
        }
        const samepass = await bcrypt.compare(existUser.password, deleteUser.password);
        if (!samepass) {
            console.error('Invalid password');
            return res.status(400).send('Invalid password');
        }
        const id = new ObjectId(req.params._id);
        collection.findOneAndDelete({ _id: id })
            .then((data) => {
            console.log(`Delete user : ${data.value._id}`);
            return res.send('');
        })
            .catch((e) => {
            console.error(e);
            return res.status(500).send('Error when delete');
        });
    }
}
//# sourceMappingURL=users_controller.js.map