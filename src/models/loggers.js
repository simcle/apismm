import dbPool from "../config/database.js";
import moment from "moment";

export const loggerInsert = async (body) => {
    const insert_at = moment.unix(body.datetime).format('YYYY-MM-DD h:mm:ss')
    const ph_1 = body.ph_1
    const temp_1 = body.temp_1
    const cod_1 = body.cod_1
    const cod_2 = body.cod_2
    const cod_3 = body.cod_3
    const cod_4 = body.cod_4
    const cod_5 = body.cod_5
    const do_1 = body.do_1
    const do_2 = body.do_2
    const do_3 = body.do_3
    const do_4 = body.do_4
    const tss_1 = body.tss_1
    const nh3n_1 = body.nh3n_1
    const debit_1 = body.debit_1
    const debit_2 = body.debit_2
    const sql = `INSERT INTO loggers(
        ph_1,
        temp_1,
        cod_1,
        cod_2,
        cod_3,
        cod_4,
        cod_5,
        do_1,
        do_2,
        do_3,
        do_4,
        tss_1,
        nh3n_1,
        debit_1,
        debit_2,
        insert_at
    ) VALUES (
        '${ph_1}',
        '${temp_1}',
        '${cod_1}',
        '${cod_2}',
        '${cod_3}',
        '${cod_4}',
        '${cod_5}',
        '${do_1}',
        '${do_2}',
        '${do_3}',
        '${do_4}',
        '${tss_1}',
        '${nh3n_1}',
        '${debit_1}',
        '${debit_2}',
        '${insert_at}'
    )`
    return await dbPool.execute(sql)
}

export const loggerGet = async (body) => {
    let currentPage = parseInt(body.page) || 1
    let perPage = body.perPage || 20
    const label = body.label
    const date = body.date
    const filter = body.filter
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
    if(filter == '2 menit') {
        sql = `SELECT * FROM loggers  
        ${query}
        ORDER BY id DESC
        LIMIT ${perPage} OFFSET ${(currentPage -1) * perPage}`
    } else {
        sql = `SELECT 
        AVG(ph_1) as ph_1, 
        AVG(temp_1) as temp_1, 
        AVG(cod_1) as cod_1, 
        AVG(cod_2) as cod_2, 
        AVG(cod_3) as cod_3, 
        AVG(cod_4) as cod_4, 
        AVG(cod_5) as cod_5, 
        AVG(do_1) as do_1, 
        AVG(do_2) as do_2, 
        AVG(do_3) as do_3, 
        AVG(do_4) as do_4, 
        AVG(tss_1) as tss_1, 
        AVG(nh3n_1) as nh3n_1, 
        AVG(debit_1) as debit_1, 
        AVG(debit_2) as debit_2, 
        insert_at
        FROM loggers
        ${query}
        GROUP BY HOUR(insert_at)
        ORDER BY id DESC
        LIMIT ${perPage} OFFSET ${(currentPage -1) * perPage}`
    }
    
    return await dbPool.execute(sql)
}
export const loggerExport = async (body) => {
    const label = body.label
    const date = body.date
    const filter = body.filter
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
    if(filter == '2 menit') {
        sql = `SELECT 
        ROUND(ph_1, 2) as ph_1, 
        ROUND(temp_1, 2) as temp_1, 
        ROUND(cod_1, 2) as cod_1, 
        ROUND(cod_2, 2) as cod_2, 
        ROUND(cod_3, 2) as cod_3, 
        ROUND(cod_4, 2) as cod_4, 
        ROUND(cod_5, 2) as cod_5, 
        ROUND(do_1, 2) as do_1, 
        ROUND(do_2, 2) as do_2, 
        ROUND(do_3, 2) as do_3, 
        ROUND(do_4, 2) as do_4, 
        ROUND(tss_1, 2) as tss_1, 
        ROUND(nh3n_1, 2) as nh3n_1, 
        ROUND(debit_1, 2) as debit_1, 
        ROUND(debit_2, 2) as debit_2, 
        DATE_FORMAT(insert_at, '%d/%m/%Y %H:%i:%s') as added_at FROM loggers 
        ${query}
        ORDER BY id DESC`
    } else {
        sql = `SELECT 
        ROUND(AVG(ph_1), 2) as ph_1, 
        ROUND(AVG(temp_1), 2) as temp_1, 
        ROUND(AVG(cod_1), 2) as cod_1, 
        ROUND(AVG(cod_2), 2) as cod_2, 
        ROUND(AVG(cod_3), 2) as cod_3, 
        ROUND(AVG(cod_4), 2) as cod_4, 
        ROUND(AVG(cod_5), 2) as cod_5, 
        ROUND(AVG(do_1), 2) as do_1, 
        ROUND(AVG(do_2), 2) as do_2, 
        ROUND(AVG(do_3), 2) as do_3, 
        ROUND(AVG(do_4), 2) as do_4, 
        ROUND(AVG(tss_1), 2) as tss_1, 
        ROUND(AVG(nh3n_1), 2) as nh3n_1, 
        ROUND(AVG(debit_1), 2) as debit_1, 
        ROUND(AVG(debit_2), 2) as debit_2, 
        DATE_FORMAT(insert_at, '%d/%m/%Y %H:%i:%s') as added_at
        FROM loggers
        ${query}
        GROUP BY HOUR(insert_at)
        ORDER BY id DESC`
    }
    
    return await dbPool.execute(sql)
}