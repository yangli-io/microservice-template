import HTTPError from './http-error';

describe('http-error', () => {
  test('should throw with message, statusCode and body', () => {
    const error = new HTTPError({ message: 'hello', errorCode: 'ABC', status: 500, body: { name: 'variable' } });

    let result;

    try {
      throw error;
    } catch (e) {
      result = e;
    } finally {
      expect(result.message).toBe('hello');
      expect(result.status).toBe(500);
      expect(result.body).toMatchObject({ name: 'variable' } );
    }
  })
})
