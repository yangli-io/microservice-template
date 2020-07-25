import express from 'express';
import request from 'supertest';
import errorHandler from './error-handler';

const app = express();

app.get('/generate-error', () => {
  throw new Error('Ooooops!');
});

app.use(errorHandler);

describe('error handler route', () => {
  it('should handle error when random error happens', (done) => {
    request(app)
      .get('/generate-error')
      .expect(500, { message: 'Ooooops!' }, done);
  })
})
