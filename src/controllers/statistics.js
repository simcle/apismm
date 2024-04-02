import { statisticGet } from "../models/statistics.js"


export const getStatistic = async (req, res) => {
    const body = req.query
    try {
        const [data] = await statisticGet(body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send(error)   
    }
} 