import express from 'express';
import ClasseController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const classController = new ClasseController();
const connectionController = new ConnectionController();

interface ScreduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;