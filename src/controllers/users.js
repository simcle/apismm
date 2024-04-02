import 'dotenv/config'
import { insertUser, loginUser, updateUser, getUser, updatePassword } from "../models/users.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getMe = async (req, res) => {
    const user = req.user
    const [data] = await getUser(user)
    res.status(200).json(data[0])
}

export const userRegister = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.send(errors.array())
    }
    try {
        await insertUser(req.body)
        res.status(200).json('OK')
    } catch (error) {
        res.status(400).send(error)
    }
}

export const userUpdate = async (req, res) => {
    const errors = validationResult(req) 
    const body = {
        id: req.user.id,
        name: req.body.name,
        email: req.body.email
    }
    if(!errors.isEmpty()) {
        return res.send(errors.array())
    }
    try {
        await updateUser(body)
        res.status(200).json('OK')
    } catch (error) {
        res.status(400).send(error)
    }
}

export const passwordUpdate = async (req, res) => {
    const body = {
        id: req.user.id,
        password: req.body.password
    }
    try {
        await updatePassword(body)
        res.status(200).json('OK')
    } catch (error) {
        res.status(400).send(error)
    }
}

export const userLogin = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.send(errors.array())
    } 
    try {
        const [data] = await loginUser(req.body)
        const password = req.body.password
        if(data.length > 0) {
            const result = data[0]
            try {
                if(await bcrypt.compare(password, result.password)) {
                    const user = {id: result.id, name: result.name, email: result.email}
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                    const payload = {
                        id: result.id,
                        name: result.name,
                        email: result.email,
                    }
                    res.status(200).json({
                        accessToken: accessToken,
                        user: payload
                    })
                } else {
                    res.status(400).send('password salah')
                }
            } catch (error) {
                res.status(400).send(error)
            }
        } else {
            res.status(400).send('Email tidak ditemukan')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
