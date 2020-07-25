import express from 'express';

const router = express.Router();

router.get('/hello/:name', (req, res) => {
  const name = req.params.name;

  res.json({
    body: `hello ${name}`
  })
})

export default router;
