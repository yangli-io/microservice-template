import express from 'express';

const router = express.Router();

router.get('/hello/:name', (req, res) => {
  const name = req.params.name;

  if (name) {
    res.json({
      body: `hello ${name}`
    })
  } else {
    res.status(400).json({
      message: 'missing name parameter'
    })
  }
})

export default router;
