import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import apiRouter from "./api";
import bodyParser from "body-parser";

const argv = yargs(hideBin(process.argv))
  .option('target', {
    alias: 't',
    type: 'string',
    description: 'Proxy target, e.g. {protocol}://{ip}:{port}',
    demandOption: true
  })
  .parseSync();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use('/api', apiRouter);
app.use('/controls', express.static('public'));
app.use(
  '/',
  createProxyMiddleware({
    target: argv.target,
    changeOrigin: true
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
