const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if(!err) {
        console.log(`MySQL Connected on ${process.env.DB_HOST}`)
    } else {
        console.log(err)
    }
})

module.exports = connection