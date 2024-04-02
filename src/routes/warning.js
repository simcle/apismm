import express from 'express'
const warningRouter = express.Router()

import { exportWarning, getWarning } from '../controllers/warning.js'

warningRouter.get('/', getWarning);
warningRouter.get('/download', exportWarning);

export default warningRouter;