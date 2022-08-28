import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout', { user: { name: 'Anton' } });
});

export default router;
