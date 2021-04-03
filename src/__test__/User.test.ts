import request from 'supertest';
import app from '../app';
import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    // eslint-disable-next-line no-unused-expressions
    connection.runMigrations; //
  });

  it('Should be able to create a user', async () => {
    const response = await request(app).post('/users').send({
      email: 'example@gmail.com',
      name: 'example',
    });

    expect(response.status).toBe(201);
  });
});
