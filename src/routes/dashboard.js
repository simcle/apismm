import express from 'express'
import { getDashboard } from '../controllers/dashboard.js'

const dahsboardRouter = express.Router()

dahsboardRouter.get('/', getDashboard)

export default dahsboardRouter;