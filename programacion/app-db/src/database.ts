import { Pool } from "pg";

const connectionDB = new Pool({
    host: 'localhost', 
    port: 5432, 
    database: 'veterinaria_mascota',
    user: 'postgres',
    password: '0314',
})

connectionDB.connect();
console.log('conexión exitosa')

export default connectionDB;