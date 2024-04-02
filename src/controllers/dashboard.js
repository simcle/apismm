import { dashboardData } from "../models/dahsboard.js";

export const getDashboard = async (req, res) => {
    try {
        const data = await dashboardData()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send(error)   
    }
}