
import dbPool from "../config/database.js";
import moment from "moment";

export const warningGet = async (body) => {
    let currentPage = parseInt(body.page) || 1
    let perPage = body.perPage || 20
    const label = body.label
    const date = body.date
    const filter = body.filter
    let parameter = body.parameter
    let sortKey = body.sortKey
    let query;

    switch (label) {
        case 'Hari ini': 
            const today = moment().format('YYYY-MM-DD')
            query = `WHERE (DATE(insert_at) = '${today}')`
            break;
        case 'Kemarin': 
            const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
            query = `WHERE (DATE(insert_at) = '${yesterday}')`
            break;
        case '7 Hari terakhir':
            query = `WHERE (DATE(insert_at) >= DATE(NOW() -  INTERVAL 7 DAY))`
            break;
        case '30 Hari terakhir':
            query = `WHERE (DATE(insert_at) >= DATE(NOW() -  INTERVAL 30 DAY))`
            break;
        case 'Bulan ini':
            const month = moment().format('M')
            query = `WHERE (MONTH(insert_at) = ${month})`
            break;
        case 'Per hari': 
            query = `WHERE DATE_FORMAT(insert_at,'%d/%m/%Y') = '${date}'`
            break;
        case 'Per bulan': 
        query = `WHERE DATE_FORMAT(insert_at,'%m-%Y') = '${date}'`
            break;
        case 'Per tahun': 
            query = `WHERE DATE_FORMAT(insert_at,'%Y') = '${date}'`
            break;
    }
    let sql;
    if(filter) {
       query = `${query} AND threshold = '${filter}'`
    }
    if(parameter) {
        const sensors = parameter.join("','")
        query = `${query} AND parameter IN ('${sensors}')`
    }
    sql = `SELECT * FROM warnings
    ${query}
    ORDER BY id DESC
    LIMIT ${perPage} OFFSET ${(currentPage -1) * perPage}
    `
    return await dbPool.execute(sql)
}

export const warningDownload = async (body) => {
    const label = body.label
    const date = body.date
    const filter = body.filter
    let parameter = body.parameter
    let query;
    switch (label) {
        case 'Hari ini': 
            const today = moment().format('YYYY-MM-DD')
            query = `WHERE (DATE(insert_at) = '${today}')`
            break;
        case 'Kemarin': 
            const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
            query = `WHERE (DATE(insert_at) = '${yesterday}')`
            break;
        case '7 Hari terakhir':
            query = `WHERE (DATE(insert_at) >= DATE(NOW() -  INTERVAL 7 DAY))`
            break;
        case '30 Hari terakhir':
            query = `WHERE (DATE(insert_at) >= DATE(NOW() -  INTERVAL 30 DAY))`
            break;
        case 'Bulan ini':
            const month = moment().format('M')
            query = `WHERE (MONTH(insert_at) = ${month})`
            break;
        case 'Per hari': 
            query = `WHERE DATE_FORMAT(insert_at,'%d/%m/%Y') = '${date}'`
            break;
        case 'Per bulan': 
        query = `WHERE DATE_FORMAT(insert_at,'%m-%Y') = '${date}'`
            break;
        case 'Per tahun': 
            query = `WHERE DATE_FORMAT(insert_at,'%Y') = '${date}'`
            break;
    }
    let sql;
    if(filter) {
       query = `${query} AND threshold = '${filter}'`
    }
    if(parameter) {
        const sensors = parameter.join("','")
        query = `${query} AND parameter IN ('${sensors}')`
    }
    sql = `SELECT description, parameter, DATE_FORMAT(insert_at, '%d/%m/%Y %H:%i:%s') as added_at, ROUND(value, 2) as value, ROUND(thresholdValue, 2) as thresholdValue FROM warnings
    ${query}
    ORDER BY id DESC`
    return await dbPool.execute(sql)
}

export const warningInsert = async (body) => {
    const description = body.description
    const parameter = body.parameter
    const value = body.value
    const threshold = body.threshold
    const thresholdValue = body.thresholdValue
    const insert_at = moment.unix(body.insert_at).format('YYYY-MM-DD h:mm:ss')
    const sql = `INSERT INTO warnings(
        description,
        parameter,
        value,
        threshold,
        thresholdValue,
        insert_at
    ) VALUES (
        '${description}',
        '${parameter}',
        '${value}',
        '${threshold}',
        '${thresholdValue}',
        '${insert_at}'
    )`
    try {
        return await dbPool.execute(sql)
    } catch (error) {
        console.log(error)
    }
}

