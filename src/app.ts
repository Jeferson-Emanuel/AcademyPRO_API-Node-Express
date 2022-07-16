import {errors} from 'celebrate';
import express, {NextFunction, Request, Response} from 'express';
import "express-async-errors";
import bodyParser from 'body-parser';

import routes from './api/routes/index';
import AppError from './shared/utils/AppError';
import { initdb } from './database/initdb';

const app = express();
const port = 4444;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send(`Academy PRO - Node/Express CRUD Classwork`);
});

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    try {
        res.status(err.getHttpCode()).send(err.getError());
    } catch (error) {
        const appError = new AppError('InternalServerError', 'Erro interno do servidor.', 500);
        res.status(500).send(appError.getError())
    };
});

app.listen(port, () => {
    console.log(`Server listening to ${port} port.`);    
});

initdb();