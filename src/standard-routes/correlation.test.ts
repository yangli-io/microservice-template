import request from 'supertest';
import express from 'express';
import correlation, { getCorrelationId } from './correlation';

const app = express();

app.use(correlation);

app.get('/correlation-id', (req: any, res) => {
  res.send(getCorrelationId() === req.correlationId);
})

app.get('/existing-correlation-id', (req: any, res) => {
  res.send(getCorrelationId());
})

describe('correlation', () => {
  it('should return the same correlation id as the one in the req object', (done) => {
    request(app)
      .get('/correlation-id')
      .expect(200, 'true', done)
  })

  it('should return the existing correlation id', (done) => {
    request(app)
      .get('/existing-correlation-id')
      .set('x-correlation-id', 'abc')
      .expect('x-correlation-id', 'abc')
      .expect(200, 'abc', done)
  })
})