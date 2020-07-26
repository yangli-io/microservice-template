import express from 'express';
import swagger from './standard-routes/swagger';
import meta from './standard-routes/meta';
import errorHandler from './standard-routes/error-handler';
import notFound from './standard-routes/not-found';
import loggerRoute from './standard-routes/logger-route';
import logger from './utils/logger';
import routes from './routes/routes';
import env from 'dotenv';

env.config();

const app = express();

app.use('/meta', meta);

app.use('/swagger', swagger);

app.use(loggerRoute);

app.use(routes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 8888;

async function startServer() {
  app.listen(port, () => {
    logger.info(`server started at port:${port}`);
  })
}

startServer();
