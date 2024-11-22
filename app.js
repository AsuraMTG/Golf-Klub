const express = require('express'); 
const app = express();
const mysql = require('mysql2');

require('dotenv').config();

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
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

// http://localhost:3000/ugyfelek
app.get('/ugyfelek', (req, res) => {
    let sql = "SELECT `uazon`,`unev`,`uemail`,`utel`,`ujelszo`,`uszuletett` FROM `ugyfelek` WHERE 1";
    connection.query(sql, function (err, rows) {
        if (err) {
            console.error(err);
            res.status(500).send(`Database error: ${err.stack}`);
            return;
        };
        res.status(201).json(rows);
        res.send(rows);
    });
});

app.listen(3000, () => {
    console.log('A szerver elindult a http://localhost:3000 porton.');
});