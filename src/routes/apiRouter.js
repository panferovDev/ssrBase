import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.sendStatus(200);
});

export default apiRouter;
