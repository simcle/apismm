import dbPool from "../config/database.js";

const migrate = async () => {
    const users = `CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        refresh_token VARCHAR(255),
        reset_password VARCHAR(255),
        UNIQUE (email)
    ) ENGINE=INNODB`
    try {
        await dbPool.execute(users)
    } catch (error) {
        console.log(error)
    }

    // DATA LOGGER
    const loggers = `CREATE TABLE IF NOT EXISTS loggers(
        id INT AUTO_INCREMENT PRIMARY KEY,
        ph_1 DECIMAL(8,4) DEFAULT NULL,
        temp_1 DECIMAL(8,4) DEFAULT NULL,
        cod_J1 DECIMAL(8,4) DEFAULT NULL,
        cod_J2 DECIMAL(8,4) DEFAULT NULL,
        cod_1 DECIMAL(8,4) DEFAULT NULL,
        cod_2 DECIMAL(8,4) DEFAULT NULL,
        cod_3 DECIMAL(8,4) DEFAULT NULL,
        cod_4 DECIMAL(8,4) DEFAULT NULL,
        cod_5 DECIMAL(8,4) DEFAULT NULL,
        do_1 DECIMAL(8,4) DEFAULT NULL,
        do_2 DECIMAL(8,4) DEFAULT NULL,
        do_3 DECIMAL(8,4) DEFAULT NULL,
        do_4 DECIMAL(8,4) DEFAULT NULL,
        tss_1 DECIMAL(8,4) DEFAULT NULL,
        nh3n_1 DECIMAL(8,4) DEFAULT NULL,
        debit_1 DECIMAL(8,4) DEFAULT NULL,
        debit_2 DECIMAL(8,4) DEFAULT NULL,
        insert_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=INNODB`
    try {
        await dbPool.execute(loggers)
    } catch (error) {
        console.log(error)
    }
    const thresholds = `CREATE TABLE IF NOT EXISTS thresholds(
        id INT AUTO_INCREMENT PRIMARY KEY,
        min_ph_1 DECIMAL(8,4) DEFAULT NULL,
        min_temp_1 DECIMAL(8,4) DEFAULT NULL,
        min_cod_J1 DECIMAL(8,4) DEFAULT NULL,
        min_cod_J2 DECIMAL(8,4) DEFAULT NULL,
        min_cod_1 DECIMAL(8,4) DEFAULT NULL,
        min_cod_2 DECIMAL(8,4) DEFAULT NULL,
        min_cod_3 DECIMAL(8,4) DEFAULT NULL,
        min_cod_4 DECIMAL(8,4) DEFAULT NULL,
        min_cod_5 DECIMAL(8,4) DEFAULT NULL,
        min_do_1 DECIMAL(8,4) DEFAULT NULL,
        min_do_2 DECIMAL(8,4) DEFAULT NULL,
        min_do_3 DECIMAL(8,4) DEFAULT NULL,
        min_do_4 DECIMAL(8,4) DEFAULT NULL,
        min_tss_1 DECIMAL(8,4) DEFAULT NULL,
        min_nh3n_1 DECIMAL(8,4) DEFAULT NULL,
        min_debit_1 DECIMAL(8,4) DEFAULT NULL,
        min_debit_2 DECIMAL(8,4) DEFAULT NULL,
        max_ph_1 DECIMAL(8,4) DEFAULT NULL,
        max_temp_1 DECIMAL(8,4) DEFAULT NULL,
        max_cod_1 DECIMAL(8,4) DEFAULT NULL,
        max_cod_2 DECIMAL(8,4) DEFAULT NULL,
        max_cod_3 DECIMAL(8,4) DEFAULT NULL,
        max_cod_4 DECIMAL(8,4) DEFAULT NULL,
        max_cod_5 DECIMAL(8,4) DEFAULT NULL,
        max_do_1 DECIMAL(8,4) DEFAULT NULL,
        max_do_2 DECIMAL(8,4) DEFAULT NULL,
        max_do_3 DECIMAL(8,4) DEFAULT NULL,
        max_do_4 DECIMAL(8,4) DEFAULT NULL,
        max_tss_1 DECIMAL(8,4) DEFAULT NULL,
        max_nh3n_1 DECIMAL(8,4) DEFAULT NULL,
        max_debit_1 DECIMAL(8,4) DEFAULT NULL,
        max_debit_2 DECIMAL(8,4) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`
    try {
        await dbPool.execute(thresholds)
    } catch (error) {
        console.log(error)
    }

    const warnings = `CREATE TABLE IF NOT EXISTS warnings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255),
        parameter VARCHAR(255),
        value DECIMAL(8,4),
        threshold VARCHAR(255),
        thresholdValue DECIMAL(8,4),
        insert_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`
    try {
        await dbPool.execute(warnings)
    } catch (error) {
        console.log(error)   
    }
}


export default migrate