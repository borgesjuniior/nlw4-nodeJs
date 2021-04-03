import 'reflect-metadata';
import createConnection from './database';
import express from 'express';
import routes from './routes/routes';

//Runs database
createConnection();

const app = express();
app.use(express.json());
app.use(routes);

export default app;
