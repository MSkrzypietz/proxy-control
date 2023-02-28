import express from 'express';
import config from '../config';

const controlsRouter = express.Router();

controlsRouter.get('/status', async (req, res) => {
  const response = await fetch(`${config.controlsAddress}/status`);
  return res.json(await response.json());
});

controlsRouter.post('/state', async (req, res) => {
  const params = new URLSearchParams({ turn: req.body?.isOn ? 'on' : 'off' });
  await fetch(`${config.controlsAddress}/relay/0?${params}`);
  return res.json({});
});

export default controlsRouter;
