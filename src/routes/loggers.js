import express from 'express'
import { exportLoggers, getLogger, insertLogger } from '../controllers/loggers.js'

const loggerRouter = express.Router()

loggerRouter.post('/', insertLogger)
loggerRouter.get('/', getLogger)
loggerRouter.get('/download', exportLoggers)

export default loggerRouter