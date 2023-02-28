import express from 'express';

const controlsAddress = 'http://192.168.2.64';

const controlsRouter = express.Router();

controlsRouter.get('/status', async (req, res) => {
  const response = await fetch(`${controlsAddress}/status`);
  return res.json(await response.json());
});

controlsRouter.post('/state', async (req, res) => {
  const params = new URLSearchParams({ turn: req.body?.isOn ? 'on' : 'off' });
  await fetch(`${controlsAddress}/relay/0?${params}`);
  return res.json({});
});

export default controlsRouter;
