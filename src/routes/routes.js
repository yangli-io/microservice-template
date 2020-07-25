import express from 'express';
import helloWorldRoute from './hello-world';

const router = express.Router();

router.use(helloWorldRoute);

export default router;
