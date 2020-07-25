import express from 'express';
import request from 'supertest';
import addItems from './add-items';

const app = express();

app.use(addItems);

describe('/add-items', () => {
  test('should return the sum of the items', (done) => {
    request(app)
      .post('/add-items')
      .send([1, 2, 3])
      .expect('Content-Type', /json/)
      .expect(200, { body: { sum: 6 } }, done);
  })

  test('should return bad request if body is not an array', (done) => {
    request(app)
      .post('/add-items')
      .send({ data: [1, 2, 3] })
      .expect('Content-Type', /json/)
      .expect(400, { message: 'request body should be array' }, done);
  })
})
