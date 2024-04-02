import dbPool from "../config/database.js";

export const dashboardData = async () => {
    let sql = `SELECT ROUND(AVG(ph_1), 2) as avg_ph_1, ROUND(MAX(ph_1), 2) as max_ph_1,
        ROUND(AVG(temp_1), 2) as avg_temp_1, ROUND(MAX(temp_1), 2) as max_temp_1,
        ROUND(AVG(cod_1), 2) as avg_cod_1, ROUND(MAX(cod_1), 2) as max_cod_1,
        ROUND(AVG(cod_2), 2) as avg_cod_2, ROUND(MAX(cod_2), 2) as max_cod_2,
        ROUND(AVG(cod_3), 2) as avg_cod_3, ROUND(MAX(cod_3), 2) as max_cod_3,
        ROUND(AVG(cod_4), 2) as avg_cod_4, ROUND(MAX(cod_4), 2) as max_cod_4,
        ROUND(AVG(cod_5), 2) as avg_cod_5, ROUND(MAX(cod_5), 2) as max_cod_5,
        ROUND(AVG(do_1), 2) as avg_do_1, ROUND(MAX(do_1), 2) as max_do_1,
        ROUND(AVG(do_2), 2) as avg_do_2, ROUND(MAX(do_2), 2) as max_do_2,
        ROUND(AVG(do_3), 2) as avg_do_3, ROUND(MAX(do_3), 2) as max_do_3,
        ROUND(AVG(do_4), 2) as avg_do_4, ROUND(MAX(do_4), 2) as max_do_4,
        ROUND(AVG(nh3n_1), 2) as avg_nh3n_1, ROUND(MAX(nh3n_1), 2) as max_nh3n_1,
        ROUND(AVG(tss_1), 2) as avg_tss_1, ROUND(MAX(tss_1), 2) as max_tss_1,
        ROUND(AVG(debit_1), 2) as avg_debit_1, ROUND(MAX(debit_1), 2) as max_debit_1,
        ROUND(AVG(debit_2), 2) as avg_debit_2, ROUND(MAX(debit_2), 2) as max_debit_2,
        DATE_SUB(NOW(), INTERVAL 24 HOUR) as coba
        FROM loggers 
        WHERE insert_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
    `
    const [averages] = await dbPool.execute(sql)

    sql = `SELECT ROUND(max_debit_1, 2) as max_debit_1,  
        ROUND(min_debit_1, 2) as min_debit_1,
        ROUND(max_cod_1, 2) as max_cod_1,
        ROUND(max_cod_2, 2) as max_cod_2,
        ROUND(max_cod_3, 2) as max_cod_3,
        ROUND(max_cod_4, 2) as max_cod_4,
        ROUND(max_cod_5, 2) as max_cod_5,
        ROUND(min_cod_1, 2) as min_cod_1,
        ROUND(min_cod_2, 2) as min_cod_2,
        ROUND(min_cod_3, 2) as min_cod_3,
        ROUND(min_cod_4, 2) as min_cod_4,
        ROUND(min_cod_5, 2) as min_cod_5,
        ROUND(max_do_1, 2) as max_do_1,
        ROUND(max_do_2, 2) as max_do_2,
        ROUND(max_do_3, 2) as max_do_3,
        ROUND(max_do_4, 2) as max_do_4,
        ROUND(min_do_1, 2) as min_do_1,
        ROUND(min_do_2, 2) as min_do_2,
        ROUND(min_do_3, 2) as min_do_3,
        ROUND(min_do_4, 2) as min_do_4,
        ROUND(max_ph_1, 2) as max_ph_1,
        ROUND(min_ph_1, 2) as min_ph_1,
        ROUND(max_temp_1, 2) as max_temp_1,
        ROUND(min_temp_1, 2) as min_temp_1,
        ROUND(max_nh3n_1, 2) as max_nh3n_1,
        ROUND(min_nh3n_1, 2) as min_nh3n_1,
        ROUND(max_tss_1, 2) as max_tss_1,
        ROUND(min_tss_1, 2) as min_tss_1
        FROM thresholds`
    const [threshold] = await dbPool.execute(sql)

    sql = `SELECT *, 
        DATE_FORMAT(insert_at, '%d/%m/%Y %h:%i') as insert_at 
        FROM loggers
        WHERE insert_at >= DATE_SUB(NOW(), INTERVAL 1440 MINUTE)
    `
    const [loggers] = await dbPool.execute(sql)
    
    let debit_1=0;
    let debit_2=0;
    for(let i = 0; i < loggers.length; i++) {
        const obj = loggers[i]
        debit_1 += parseFloat(obj.debit_1)
        debit_2 += parseFloat(obj.debit_2)
    }

    const data = {
        avg: averages[0],
        loggers: loggers,
        total_debit_1: (debit_1 / 30).toFixed(2),
        total_debit_2: (debit_2 / 30).toFixed(2),
        threshold: threshold[0]
    }
    return data
}