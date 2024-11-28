import express from 'express';

const app = express();

import mysql from 'mysql2';


import dotenv from 'dotenv';
dotenv.config();

/*\
app.use(express.json());
\*/

const connection = mysql.createConnection({
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


// ROUTES //
//const route = express.Router();

import routeBefizetes from './routes/befizetes.js';
app.use("/golf/befizetes", routeBefizetes);

import routeJelenlet from './routes/jelenlet.js';
app.use("/golf/jelenlet", routeJelenlet);

import routeTagsag from './routes/tagsag.js';
app.use("/golf/tagsag", routeTagsag);

import routeUgyfel from './routes/ugyfel.js';
app.use("/golf/ugyfel", routeUgyfel);


/*\
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
\*/

app.listen(3000, () => {
    console.log('A szerver elindult a http://localhost:3000 porton.');
});