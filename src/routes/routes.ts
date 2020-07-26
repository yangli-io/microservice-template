import express from 'express';
import helloRoute from './hello';
import addItems from './add-items';

const router = express.Router();

router.use(addItems);

router.use(helloRoute);

export default router;
