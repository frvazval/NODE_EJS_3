import mysql from "mysql2";

process.loadEnvFile();

const configConnection = {
    host : process.env.DB_HOST, 
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT
}

const connection = mysql.createConnection(configConnection);

const selectBarcelona = "SELECT * FROM city WHERE Name = 'Barcelona'";

connection.query(selectBarcelona, (err, result, fields) => {
    if (err) throw err;
    console.table(result);
})

