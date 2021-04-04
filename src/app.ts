import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import routes from './routes/routes';

// Runs database
createConnection();

const app = express();
app.use(express.json());
app.use(routes);

export default app;
