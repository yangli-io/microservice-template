import express from 'express';
import request from 'supertest';
import hello from './hello';

const app = express();

app.use(hello);

describe('/hello', () => {
  test('should return hello and name', (done) => {
    request(app)
      .get('/hello/jack')
      .expect('Content-Type', /json/)
      .expect(200, { body: 'hello jack' }, done);
  })
})
