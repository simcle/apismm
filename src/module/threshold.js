import dbPool from "../config/database.js";
import { warningInsert } from "../models/warning.js";

const threshold = async (body) => {
    let sql = `SELECT * FROM thresholds`
    const [thresholds] = await dbPool.execute(sql)
    const data = thresholds[0]

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
    const insert_at = body.datetime

    const payload = {
        description: '',
        parameter: '',
        value: '',
        threshold: '',
        thresholdValue: '',
        insert_at: ''
    }
    if(parseFloat(data.min_ph_1) && ph_1 < parseFloat(data.min_ph_1)) {
        payload.description = 'Nilai pH tidak sesuai ambang batas minimal'
        payload.parameter = 'pH'
        payload.value = ph_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_ph_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_temp_1) && temp_1 < parseFloat(data.min_temp_1)) {
        payload.description = 'Nilai Temperatur tidak sesuai ambang batas minimal'
        payload.parameter = 'Temp'
        payload.value = temp_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_temp_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_cod_1) && cod_1 < parseFloat(data.min_cod_1)) {
        payload.description = 'Nilai COD A1 tidak sesuai ambang batas minimal'
        payload.parameter = 'COD A1'
        payload.value = cod_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_cod_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_cod_2) && cod_2 < parseFloat(data.min_cod_2)) {
        payload.description = 'Nilai COD A2 tidak sesuai ambang batas minimal'
        payload.parameter = 'COD A2'
        payload.value = cod_2
        payload.threshold = 'min'
        payload.thresholdValue = data.min_cod_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_cod_3) && cod_3 < parseFloat(data.min_cod_3)) {
        payload.description = 'Nilai COD A3 tidak sesuai ambang batas minimal'
        payload.parameter = 'COD A3'
        payload.value = cod_3
        payload.threshold = 'min'
        payload.thresholdValue = data.min_cod_3
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_cod_4) && cod_4 < parseFloat(data.min_cod_4)) {
        payload.description = 'Nilai COD A4 tidak sesuai ambang batas minimal'
        payload.parameter = 'COD A4'
        payload.value = cod_4
        payload.threshold = 'min'
        payload.thresholdValue = data.min_cod_4
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_cod_5) && cod_5 < parseFloat(data.min_cod_5)) {
        payload.description = 'Nilai COD A5 tidak sesuai ambang batas minimal'
        payload.parameter = 'COD A5'
        payload.value = cod_5
        payload.threshold = 'min'
        payload.thresholdValue = data.min_cod_5
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_do_1) && do_1 < parseFloat(data.min_do_1)) {
        payload.description = 'Nilai DO A1 tidak sesuai ambang batas minimal'
        payload.parameter = 'DO A1'
        payload.value = do_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_do_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_do_2) && do_2 < parseFloat(data.min_do_2)) {
        payload.description = 'Nilai DO A2 tidak sesuai ambang batas minimal'
        payload.parameter = 'DO A2'
        payload.value = do_2
        payload.threshold = 'min'
        payload.thresholdValue = data.min_do_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_do_3) && do_3 < parseFloat(data.min_do_3)) {
        payload.description = 'Nilai DO A3 tidak sesuai ambang batas minimal'
        payload.parameter = 'DO A3'
        payload.value = do_3
        payload.threshold = 'min'
        payload.thresholdValue = data.min_do_3
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_do_4) && do_4 < parseFloat(data.min_do_4)) {
        payload.description = 'Nilai DO A3 tidak sesuai ambang batas minimal'
        payload.parameter = 'DO A4'
        payload.value = do_4
        payload.threshold = 'min'
        payload.thresholdValue = data.min_do_4
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_tss_1) && tss_1 < parseFloat(data.min_tss_1)) {
        payload.description = 'Nilai TSS tidak sesuai ambang batas minimal'
        payload.parameter = 'TSS'
        payload.value = tss_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_tss_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_nh3n_1) && nh3n_1 < parseFloat(data.min_nh3n_1)) {
        payload.description = 'Nilai NH3N tidak sesuai ambang batas minimal'
        payload.parameter = 'NH3N'
        payload.value = nh3n_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_nh3n_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_debit_1) && debit_1 < parseFloat(data.min_debit_1)) {
        payload.description = 'Nilai DEBIT J1 tidak sesuai ambang batas minimal'
        payload.parameter = 'DEBIT J1'
        payload.value = debit_1
        payload.threshold = 'min'
        payload.thresholdValue = data.min_debit_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.min_debit_2) && debit_2 < parseFloat(data.min_debit_2)) {
        payload.description = 'Nilai DEBIT J2 tidak sesuai ambang batas minimal'
        payload.parameter = 'DEBIT J2'
        payload.value = debit_2
        payload.threshold = 'min'
        payload.thresholdValue = data.min_debit_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }

    if(parseFloat(data.max_ph_1) && ph_1 > parseFloat(data.max_ph_1)) {
        payload.description = 'Nilai pH tidak sesuai ambang batas maksimal'
        payload.parameter = 'pH'
        payload.value = ph_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_ph_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_temp_1) && temp_1 > parseFloat(data.max_temp_1)) {
        payload.description = 'Nilai Temperatur tidak sesuai ambang batas maksimal'
        payload.parameter = 'Temp'
        payload.value = temp_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_temp_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_cod_1) && cod_1 > parseFloat(data.max_cod_1)) {
        payload.description = 'Nilai COD A1 tidak sesuai ambang batas maksimal'
        payload.parameter = 'COD A1'
        payload.value = cod_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_cod_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_cod_2) && cod_2 > parseFloat(data.max_cod_2)) {
        payload.description = 'Nilai COD A2 tidak sesuai ambang batas maksimal'
        payload.parameter = 'COD A2'
        payload.value = cod_2
        payload.threshold = 'max'
        payload.thresholdValue = data.max_cod_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_cod_3) && cod_3 > parseFloat(data.max_cod_3)) {
        payload.description = 'Nilai COD A3 tidak sesuai ambang batas maksimal'
        payload.parameter = 'COD A3'
        payload.value = cod_3
        payload.threshold = 'max'
        payload.thresholdValue = data.max_cod_3
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_cod_4) && cod_4 > parseFloat(data.max_cod_4)) {
        payload.description = 'Nilai COD A4 tidak sesuai ambang batas maksimal'
        payload.parameter = 'COD A4'
        payload.value = cod_4
        payload.threshold = 'max'
        payload.thresholdValue = data.max_cod_4
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_cod_5) && cod_5 > parseFloat(data.max_cod_5)) {
        payload.description = 'Nilai COD A5 tidak sesuai ambang batas maksimal'
        payload.parameter = 'COD A5'
        payload.value = cod_5
        payload.threshold = 'max'
        payload.thresholdValue = data.max_cod_5
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_do_1) && do_1 > parseFloat(data.max_do_1)) {
        payload.description = 'Nilai DO A1 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DO A1'
        payload.value = do_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_do_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_do_2) && do_2 > parseFloat(data.max_do_2)) {
        payload.description = 'Nilai DO A2 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DO A2'
        payload.value = do_2
        payload.threshold = 'max'
        payload.thresholdValue = data.max_do_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_do_3) && do_3 > parseFloat(data.max_do_3)) {
        payload.description = 'Nilai DO A3 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DO A3'
        payload.value = do_3
        payload.threshold = 'max'
        payload.thresholdValue = data.max_do_3
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_do_4) && do_4 > parseFloat(data.max_do_4)) {
        payload.description = 'Nilai DO A4 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DO A4'
        payload.value = do_4
        payload.threshold = 'max'
        payload.thresholdValue = data.max_do_4
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_tss_1) && tss_1 > parseFloat(data.max_tss_1)) {
        payload.description = 'Nilai TSS tidak sesuai ambang batas maksimal'
        payload.parameter = 'TSS'
        payload.value = tss_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_tss_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_nh3n_1) && nh3n_1 > parseFloat(data.max_nh3n_1)) {
        payload.description = 'Nilai NH3N tidak sesuai ambang batas maksimal'
        payload.parameter = 'NH3N'
        payload.value = nh3n_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_nh3n_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_debit_1) && debit_1 > parseFloat(data.max_debit_1)) {
        payload.description = 'Nilai DEBIT J1 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DEBIT J1'
        payload.value = debit_1
        payload.threshold = 'max'
        payload.thresholdValue = data.max_debit_1
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
    if(parseFloat(data.max_debit_2) && debit_2 > parseFloat(data.max_debit_2)) {
        payload.description = 'Nilai DEBIT J2 tidak sesuai ambang batas maksimal'
        payload.parameter = 'DEBIT J2'
        payload.value = debit_2
        payload.threshold = 'max'
        payload.thresholdValue = data.max_debit_2
        payload.insert_at = insert_at
        await warningInsert(payload)
    }
}

export default threshold