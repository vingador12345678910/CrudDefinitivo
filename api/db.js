import mysql from "mysql"

export const db= mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"123",
    database:"banco_crud"
});