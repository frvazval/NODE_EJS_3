import mysql from "mysql2";

const configConnection = {
    host:"localhost", 
    user:"root",
    password:"root",
    database:"world",
    port:3307
}

const connection = mysql.createConnection(configConnection);

