import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { sendSuccessResponse } from './utils/ResponseUtils';
import UserRoute from './routes/UserRoute';

dotenv.config();

export class App {
    public app: Application;
    private port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        //this.app.use(LoggerMiddleware.log);
    }

    private initializeRoutes(): void {
        this.app.get('/', (request: Request, response: Response) => {
            return sendSuccessResponse(response, { message: 'Welcome to API' });
        })
        const userRoute = new UserRoute();
        this.app.use('/api/users', userRoute.router);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}
