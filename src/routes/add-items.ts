import express from 'express';

const router = express.Router();

router.post('/add-items', (req, res) => {
  const arr = req.body;

  if (Array.isArray(arr)) {
    res.json({
      body: `hello ${name}`
    })
  } else {
    res.status(400).json({
      message: 'value should be array'
    })
  }
})

export default router;
