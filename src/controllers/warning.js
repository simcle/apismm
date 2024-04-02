import excel from 'exceljs'
import { warningDownload, warningGet } from "../models/warning.js";

export const getWarning = async (req, res) => {
    const body = req.query
    try {
        const [data] = await warningGet(body)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const exportWarning = async (req, res) => {
    const body = req.query 
    try {
        const [data] = await warningDownload(body)
        let workbook = new excel.Workbook()
        let worksheet = workbook.addWorksheet('Laporan peringatan dini')
        worksheet.columns = [
            {key: 'added_at', width: 20},
            {key: 'description', width: 45},
            {key: 'parameter', width: 10},
            {key: 'value', width: 10},
            {key: 'thresholdValue', width: 10},
        ]
        worksheet.getRow(1).values = ['PERINGATAN DINI', ``]
        worksheet.getRow(3).values = ['TANGGAL', 'KETERANGAN', 'PARAMETER', 'NILAI', 'BATAS AMBANG']
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