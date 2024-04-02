import dbPool from "../config/database.js";
import bcrypt from 'bcrypt'


export const insertUser = async (body) => {
    const name = body.name
    const email = body.email
    const password = body.password
    const hashPassword = await bcrypt.hash(password, 10)

    const sql = `INSERT INTO users(name, email, password) VALUES('${name}', '${email}', '${hashPassword}')`
    return await dbPool.execute(sql)
}

export const updateUser = async (body) => {
    const user_id = body.id
    const name = body.name
    const email = body.email
    const sql = `UPDATE users SET 
        name = '${name}',
        email = '${email}'
        WHERE id = '${user_id}'
    `
    return await dbPool.execute(sql)
}

export const updatePassword = async (body) => {
    console.log(body)
    const user_id = body.id
    const password = body.password
    const hashPassword = await bcrypt.hash(password, 10)
    const sql = `UPDATE users SET 
        password  = '${hashPassword}'
        WHERE id = '${user_id}'
    `
    return await dbPool.execute(sql)
}

export const getUser = async (user) => {
    const id = user.id
    const sql = `SELECT name, email FROM users WHERE id = '${id}'`
    return await dbPool.execute(sql)
}

export const loginUser = async (body) => {
    const email = body.email
    const sql = `SELECT * FROM users WHERE email = '${email}'`
    return await dbPool.execute(sql)
}