import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserValidator from '../validators/UserValidator';

class UserRoute {
  public router: Router;
  private userController: UserController;
  private userValidator: UserValidator;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.userValidator = new UserValidator();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getAllUsers.bind(this.userController));
    this.router.get('/:id', this.userValidator.validateUserId, this.userController.getUserById.bind(this.userController));
    this.router.post('/', this.userValidator.validateCreateUser, this.userController.createUser.bind(this.userController));
  }
}

export default UserRoute;
