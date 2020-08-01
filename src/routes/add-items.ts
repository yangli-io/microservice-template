import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json());

router.post('/add-items', (req: any, res) => {
  const arr = req.body;

  if (Array.isArray(arr)) {
    const sum = arr.reduce((total, each) => {
      return total + each;
    }, 0)

    res.json({
      body: {
        sum,
      },
    })
  } else {
    res.status(400).json({
      message: 'request body should be array'
    })
  }
})

export default router;
