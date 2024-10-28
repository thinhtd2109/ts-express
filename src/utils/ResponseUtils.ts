import { Response } from 'express';

export const sendSuccessResponse = (res: Response, data: any, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};

export const sendErrorResponse = (res: Response, message: string, statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};
