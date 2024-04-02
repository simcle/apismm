import dbPool from "../config/database.js";

export const thresholdGet = async () => {
    const sql = `SELECT * FROM thresholds`
    return await dbPool.execute(sql)
}

export const thresholdInsert = async (body) => {
    const min_ph_1 = body.min_ph_1
    const min_temp_1 = body.min_temp_1
    const min_cod_1 = body.min_cod_1
    const min_cod_2 = body.min_cod_2
    const min_cod_3 = body.min_cod_3
    const min_cod_4 = body.min_cod_4
    const min_cod_5 = body.min_cod_5
    const min_do_1 = body.min_do_1
    const min_do_2 = body.min_do_2
    const min_do_3 = body.min_do_3
    const min_do_4 = body.min_do_4
    const min_tss_1 = body.min_tss_1
    const min_nh3n_1 = body.min_nh3n_1
    const min_debit_1 = body.min_debit_1
    const min_debit_2 = body.min_debit_2
    const max_ph_1 = body.max_ph_1
    const max_temp_1 = body.max_temp_1
    const max_cod_1 = body.max_cod_1
    const max_cod_2 = body.max_cod_2
    const max_cod_3 = body.max_cod_3
    const max_cod_4 = body.max_cod_4
    const max_cod_5 = body.max_cod_5
    const max_do_1 = body.max_do_1
    const max_do_2 = body.max_do_2
    const max_do_3 = body.max_do_3
    const max_do_4 = body.max_do_4
    const max_tss_1 = body.max_tss_1
    const max_nh3n_1 = body.max_nh3n_1
    const max_debit_1 = body.max_debit_1
    const max_debit_2 = body.max_debit_2
    let sql = `SELECT * FROM thresholds`
    const [data] = await dbPool.execute(sql)
    if(data.length > 0) {
        sql = `UPDATE thresholds SET 
            min_ph_1 = '${min_ph_1}',
            min_temp_1 = '${min_temp_1}',
            min_cod_1 = '${min_cod_1}',
            min_cod_2 = '${min_cod_2}',
            min_cod_3 = '${min_cod_3}',
            min_cod_4 = '${min_cod_4}',
            min_cod_5 = '${min_cod_5}',
            min_do_1 = '${min_do_1}',
            min_do_2 = '${min_do_2}',
            min_do_3 = '${min_do_3}',
            min_do_4 = '${min_do_4}',
            min_tss_1 = '${min_tss_1}',
            min_nh3n_1 = '${min_nh3n_1}',
            min_debit_1 = '${min_debit_1}',
            min_debit_2 = '${min_debit_2}',
            max_ph_1 = '${max_ph_1}',
            max_temp_1 = '${max_temp_1}',
            max_cod_1 = '${max_cod_1}',
            max_cod_2 = '${max_cod_2}',
            max_cod_3 = '${max_cod_3}',
            max_cod_4 = '${max_cod_4}',
            max_cod_5 = '${max_cod_5}',
            max_do_1 = '${max_do_1}',
            max_do_2 = '${max_do_2}',
            max_do_3 = '${max_do_3}',
            max_do_4 = '${max_do_4}',
            max_tss_1 = '${max_tss_1}',
            max_nh3n_1 = '${max_nh3n_1}',
            max_debit_1 = '${max_debit_1}',
            max_debit_2 = '${max_debit_2}'
        `
    } else {
        sql = `INSERT INTO thresholds (
            min_ph_1,
            min_temp_1,
            min_cod_1,
            min_cod_2,
            min_cod_3,
            min_cod_4,
            min_cod_5,
            min_do_1,
            min_do_2,
            min_do_3,
            min_do_4,
            min_tss_1,
            min_nh3n_1,
            min_debit_1,
            min_debit_2,
            max_ph_1,
            max_temp_1,
            max_cod_1,
            max_cod_2,
            max_cod_3,
            max_cod_4,
            max_cod_5,
            max_do_1,
            max_do_2,
            max_do_3,
            max_do_4,
            max_tss_1,
            max_nh3n_1,
            max_debit_1,
            max_debit_2
        ) VALUES(
            '${min_ph_1}',
            '${min_temp_1}',
            '${min_cod_1}',
            '${min_cod_2}',
            '${min_cod_3}',
            '${min_cod_4}',
            '${min_cod_5}',
            '${min_do_1}',
            '${min_do_2}',
            '${min_do_3}',
            '${min_do_4}',
            '${min_tss_1}',
            '${min_nh3n_1}',
            '${min_debit_1}',
            '${min_debit_2}',
            '${max_ph_1}',
            '${max_temp_1}',
            '${max_cod_1}',
            '${max_cod_2}',
            '${max_cod_3}',
            '${max_cod_4}',
            '${max_cod_5}',
            '${max_do_1}',
            '${max_do_2}',
            '${max_do_3}',
            '${max_do_4}',
            '${max_tss_1}',
            '${max_nh3n_1}',
            '${max_debit_1}',
            '${max_debit_2}'
        )`
    }
    return await dbPool.execute(sql)
}