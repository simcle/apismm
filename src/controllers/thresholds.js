import { thresholdGet, thresholdInsert } from "../models/threshold.js";

export const getThreshold = async (req, res) => {
    try {
        const [data] = await thresholdGet()
        res.status(200).json(data[0])
    } catch (error) {
        res.status(400).send(error)
    }
}

export const insertThreshold = async (req, res) => {
    const body = req.body
    try {
        await thresholdInsert(body)
        res.status(200).json('OK')
    } catch (error) {
        console.log(error)
    }
}