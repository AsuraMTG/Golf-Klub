import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if(err){
        console.error(`Database error: ${err.stack}`);
        return;
    }
    console.log('Connected to the MySQL server.');
});

export async function getUgyfelek () {
    let sql = 'SELECT * FROM ugyfelek';
    const [result] = await connection.execute(sql);
    return result;
};

export async function getUgyfel (id) {
    let sql = 'SELECT * FROM ugyfelek WHERE uazon = ?';
    const [result] = await connection.execute(sql, [id]);
    return result;
};