import express from 'express'
const thresholdRouter = express.Router()

import { getThreshold, insertThreshold } from '../controllers/thresholds.js'

thresholdRouter.get('/', getThreshold)
thresholdRouter.post('/', insertThreshold)

export default thresholdRouter