import express from 'express';
import request from 'supertest';
import notFound from './not-found';

const app = express();

app.use(notFound);

test('should show not found when entering random route', (done) => {
  request(app)
    .get('/not-found')
    .expect('Content-Type', /json/)
    .expect(404, { message: 'Not Found' }, done);
})
