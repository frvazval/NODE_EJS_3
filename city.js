import express from "express";
import mysql from "mysql2";
const app = express();

process.loadEnvFile();

const configConnection = {
    host : process.env.DB_HOST, 
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT
}

const connection = mysql.createConnection(configConnection);

app.get("/", (req, res) => {
    res.send("<h1>Esto deberia ser una pagina web</h1>")
})

app.get("/api/cities", (req, res) => {
   const city = req.query.city
   const user = req.query.user

   console.log("usuario => ", user, "ciudad => ", city);
})

app.listen(process.env.PORT, () => {console.log(`Servidor arrancado en http://localhost:${process.env.PORT}`)})
