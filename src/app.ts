import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import apiRouter from './api';
import bodyParser from 'body-parser';
import config from './config';

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/controls', express.static('public'));
app.use(
  '/',
  createProxyMiddleware({
    target: config.targetAddress,
    changeOrigin: true
  })
);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
