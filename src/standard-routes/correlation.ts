import express from 'express';
import { AsyncLocalStorage } from 'async_hooks';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const HEADER_NAME = 'x-correlation-id';

const asyncLocalStorage = new AsyncLocalStorage();

router.use((req, res, next) => {
  const correlationId =  req.header(HEADER_NAME) || uuidv4();

  req.correlationId = correlationId;

  res.setHeader('x-correlation-id', correlationId);

  asyncLocalStorage.run(correlationId, next)
})

export default router;

export const getCorrelationId = () => {
  return asyncLocalStorage.getStore();
}