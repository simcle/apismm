import excel from 'exceljs'
import { loggerExport, loggerGet, loggerInsert } from "../models/loggers.js"
import threshold from '../module/threshold.js'

export const insertLogger = async (req, res) => {
    try {
        await loggerInsert(req.body)
        await threshold(req.body)
        res.status(200).json('OK')
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getLogger = async (req, res) => {
    const body = req.query
    try {
        const [data] = await loggerGet(body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const exportLoggers = async (req, res) => {
    const body = req.query
    try {
        const [data] = await loggerExport(body)
        let workbook = new excel.Workbook()
        let worksheet = workbook.addWorksheet('Laporan monitoring')
        worksheet.columns = [
            {key: 'added_at', width: 20},
            {key: 'ph_1', width: 10},
            {key: 'temp_1', width: 10},
            {key: 'cod_J1', width: 10},
            {key: 'cod_J2', width: 10},
            {key: 'cod_1', width: 10},
            {key: 'cod_2', width: 10},
            {key: 'cod_3', width: 10},
            {key: 'cod_4', width: 10},
            {key: 'cod_5', width: 10},
            {key: 'do_1', width: 10},
            {key: 'do_2', width: 10},
            {key: 'do_3', width: 10},
            {key: 'do_4', width: 10},
            {key: 'tss_1', width: 10},
            {key: 'nh3n_1', width: 10},
            {key: 'debit_1', width: 10},
            {key: 'debit_2', width: 10},
        ]
        worksheet.getRow(1).values = ['LOGGERS', ``]
        worksheet.getRow(3).values = ['Tanggal', 'pH', 'Temp','COD J1', 'COD J2', 'COD A1', 'COD A2', 'COD A3', 'COD A4', 'COD A5', 'DO A1', 'DO A2', 'DO A3', 'DO A4', 'TSS', 'NH3N', 'DEBIT J1', 'DEBIT J2']
        worksheet.addRows(data)
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + "tutorials.xlsx"
        );
        await workbook.xlsx.write(res);
        res.status(200).end();

    } catch (error) {
        res.status(400).send(error)
    }
}