import dbPool from "../config/database.js";

export const statisticGet = async (body) => {
    const filter = body.filter
    let query;
    switch (filter) {
        case '24 Jam':
            query = `SELECT *, DATE_FORMAT(insert_at, '%d/%m/%Y %H:%i') as datetime FROM loggers WHERE insert_at > NOW() - INTERVAL 24 HOUR`
            break;
        case '7 Hari': 
            query = `SELECT 
            ROUND(AVG(ph_1), 2) as ph_1, 
            ROUND(AVG(temp_1), 2) as temp_1, 
            ROUND(AVG(cod_j1), 2) as cod_j1, 
            ROUND(AVG(cod_j2), 2) as cod_j2, 
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
            DATE_FORMAT(insert_at, '%d/%m/%Y %H') as datetime 
            FROM loggers 
            WHERE insert_at > NOW() - INTERVAL 7 DAY
            GROUP BY YEAR(insert_at), MONTH(insert_at), DAY(insert_at), HOUR(insert_at)
            `
            break;
        case '30 Hari': 
            query = `SELECT 
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
            DATE_FORMAT(insert_at, '%d/%m/%Y %H') as datetime 
            FROM loggers 
            WHERE insert_at > NOW() - INTERVAL 30 DAY
            GROUP BY YEAR(insert_at), MONTH(insert_at), DAY(insert_at), HOUR(insert_at)
            `
            break;
        case '90 Hari': 
            query = `SELECT 
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
            DATE_FORMAT(insert_at, '%d/%m/%Y %H') as datetime 
            FROM loggers 
            WHERE insert_at > NOW() - INTERVAL 90 DAY
            GROUP BY YEAR(insert_at), MONTH(insert_at), DAY(insert_at), HOUR(insert_at)
            `
            break;
        case '1 Tahun': 
            query = `SELECT 
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
            DATE_FORMAT(insert_at, '%d/%m/%Y') as datetime 
            FROM loggers 
            WHERE insert_at > NOW() - INTERVAL 360 DAY
            GROUP BY YEAR(insert_at), MONTH(insert_at), DAY(insert_at)
            `
            break;
    }
    const sql = query
    return await dbPool.execute(sql)
}