import { Router } from 'express';
import { checkToken } from '../authorization/authorize.js';
import { UsersController } from '../controllers/users_controller.js';
export const usersRouter = Router();
const usersController = new UsersController();
usersRouter.post('/login', usersController.loginUser);
usersRouter.post('/register', usersController.registerUser);
//usersRouter.get('/:id', usersController.getUser);
usersRouter.put('/putuser', checkToken, usersController.putUser);
usersRouter.delete('/deleteuser/:id', checkToken, usersController.deleteUser);
//# sourceMappingURL=users_router.js.map