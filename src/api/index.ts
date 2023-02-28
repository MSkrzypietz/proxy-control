import express from 'express';
import controlsRouter from "./controls";

const apiRouter = express.Router();

apiRouter.use('/controls', controlsRouter);

export default apiRouter;
