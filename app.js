import express from 'express';

const app = express();

import mysql from 'mysql2';

import dotenv from 'dotenv';

dotenv.config();

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

import routeBefizetes from './routes/befizetes.js';
app.use("/golf/befizetes", routeBefizetes);

import routeJelenlet from './routes/jelenlet.js';
app.use("/golf/jelenlet", routeJelenlet);

import routeTagsag from './routes/tagsag.js';
app.use("/golf/tagsag", routeTagsag);

import routeUgyfel from './routes/ugyfel.js';
app.use("/golf/ugyfel", routeUgyfel);

app.listen(3000, () => {
    console.log('A szerver elindult a http://localhost:3000 porton.');
});

/*\
http://localhost:3000/golf/register
http://localhost:3000/golf/login
http://localhost:3000/golf/ugyfel
http://localhost:3000/golf/ugyfel/:uazon
http://localhost:3000/golf/ugyfel/:uazon
http://localhost:3000/golf/befizetes
http://localhost:3000/golf/befizetes/:uazon/:bido
http://localhost:3000/golf/befizetes/:uazon
http://localhost:3000/golf/ugyfelek
http://localhost:3000/golf/tagsag/:uazon/:tszint
http://localhost:3000/golf/tagsag/:uazon
http://localhost:3000/golf/jelenlet
http://localhost:3000/golf/jelenlet/:uazon
http://localhost:3000/golf/jelenlet/:uazon
http://localhost:3000/golf/jelenlet/:uazon
\*/