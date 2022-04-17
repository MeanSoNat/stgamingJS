const mysql = require('mysql')
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "87654321",
    database : "roitip_db"
})

con.connect(function(err) {
    if (err) throw err
    con.query("SELECT * FROM user", function(err, result, fields) {
        if (err) throw err
        console.log(result)
        con.end()
    })
})