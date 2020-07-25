interface ErrorInitializer {
  message: string;
  status: number;
  body?: object;
  errorCode: string;
}

export default class HTTPError extends Error {
  status: number;
  body: object;
  errorCode: string;

  constructor({ message, status = 500, body, errorCode }: ErrorInitializer) {
    super(message);
    this.status = status;
    this.body = body;
    this.errorCode = errorCode;
  }
}
