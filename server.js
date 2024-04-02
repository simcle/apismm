process.env.TZ = 'Asia/Jakarta'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())


import migrate from './src/database/migrate.js'
migrate()


import authenticateToken from './authenticate.js'
import authRouter from './src/routes/auth.js'
import dashboardRouter from './src/routes/dashboard.js'
import loggerRouter from './src/routes/loggers.js'
import thresholdRouter from './src/routes/threshold.js'
import warningRouter from './src/routes/warning.js'
import statisticRouter from './src/routes/statistics.js'

app.use('/auth', authRouter)
app.use('/', authenticateToken, dashboardRouter);
app.use('/loggers', authenticateToken, loggerRouter)
app.use('/thresholds', authenticateToken, thresholdRouter)
app.use('/warnings', authenticateToken, warningRouter);
app.use('/statistics', authenticateToken, statisticRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})