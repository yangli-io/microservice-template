import express from 'express';
import request from 'supertest';
import metaRoute from './meta';

const app = express();

app.use(metaRoute);

describe('meta route', () => {
  it('should get health route', (done) => {
    request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200, { status: 'ok' }, done);
  })
})
