import express from 'express'
import { getStatistic } from '../controllers/statistics.js'

const statisticRouter = express.Router()

statisticRouter.get('/', getStatistic);

export default statisticRouter;

