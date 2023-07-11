const express = require("express");
const path = require("path"); 
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path:'./.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public/css/');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL connected...")
    }
})

app.get('/', (req, res) => {
    res.render('login')
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})

