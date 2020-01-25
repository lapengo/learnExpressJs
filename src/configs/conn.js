const mysqlcon = require('mysql')

// create db connection and store to variable
const conn = mysqlcon.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'learnexpress'
})

// connect to db
conn.connect(err => {
    if (err) {
        console.log(`Error: \n ${err}`) // ES6 template literals
    } else {
        console.log('Success connect to database')
    }
})

module.exports = conn