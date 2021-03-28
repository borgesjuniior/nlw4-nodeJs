import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conected to the database.'));
