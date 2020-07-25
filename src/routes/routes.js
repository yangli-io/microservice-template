import express from 'express';
import helloWorldRoute from './hello-world';
import addItems from './add-items';

const router = express.Router();

router.use(addItems);

router.use(helloWorldRoute);

export default router;
