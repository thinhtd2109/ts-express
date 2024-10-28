import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { sendSuccessResponse, sendErrorResponse } from '../utils/ResponseUtils';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      sendSuccessResponse(res, users);
    } catch (error) {
      sendErrorResponse(res, 'Failed to fetch users');
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id);
      const user = await this.userService.getUserById(userId);
      if (user) {
        sendSuccessResponse(res, user);
      } else {
        sendErrorResponse(res, 'User not found', 404);
      }
    } catch (error) {
      sendErrorResponse(res, 'Failed to fetch user');
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await this.userService.createUser(req.body);
      sendSuccessResponse(res, newUser, 201);
    } catch (error) {
      sendErrorResponse(res, 'Failed to create user');
    }
  }
}

export default UserController;
