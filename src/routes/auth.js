import express from 'express'
import { getMe, passwordUpdate, userLogin, userRegister, userUpdate } from '../controllers/users.js'
import { body } from 'express-validator'
const authRouter = express.Router()
import authenticateToken from '../../authenticate.js'
authRouter.post('/register',[
    body('name').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({min: 6}),
], userRegister)

authRouter.put('/update', [
    body('name').notEmpty(),
    body('email').notEmpty(),
], authenticateToken, userUpdate)

authRouter.put('/password', authenticateToken, passwordUpdate)

authRouter.post('/login', [
    body('email').notEmpty(),
    body('password').notEmpty()
], userLogin)

authRouter.get('/me', authenticateToken, getMe)

export default authRouter