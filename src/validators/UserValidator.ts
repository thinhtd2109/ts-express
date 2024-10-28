import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public validateUserId(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ success: false, message: 'User ID is required' });
    } else {
      next();
    }
  }

  public validateCreateUser(req: Request, res: Response, next: NextFunction): void {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ success: false, message: 'User name is required' });
    } else {
      next();
    }
  }
}

export default UserValidator;