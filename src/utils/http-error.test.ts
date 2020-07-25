import { expect } from 'chai';
import HTTPError from './http-error';

describe('http-error', () => {
  const error = new HTTPError({ errorCode: 'ABC', message: 'hello', status: 500, body: { name: 'variable' } });

  it('should throw with message, statusCode and body', () => {
    let result;

    try {
      throw error;
    } catch (e) {
      result = e;
    } finally {
      expect(result.message).to.equal('hello');
      expect(result.status).to.equal(500);
      expect(result.body).to.deep.equal({ name: 'variable' } );
    }
  })
})
