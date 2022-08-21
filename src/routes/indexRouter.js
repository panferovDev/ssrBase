import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { ololo: 'trololo' };
  // res.write('<!DOCTYPE html>');
  res.render('Layout', initState);
});

export default router;
