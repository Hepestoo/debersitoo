const express = require('express')
const app = express();
import connectionDB from './database';

const cors = require('cors')

app.use(cors());
app.use(express.json());


// CRUD
app.get('/consultar-mascotas', (req: any, res: any) => {
    connectionDB.query("select * from mascotas", (error, resultado) => {
        if (error) {
            throw error;
        }

        res.send(resultado.rows);
    });
});

app.get('/consultar-mascota', (req: any, res: any) => {
    connectionDB.query("select * from mascotas where id_mascota = $1", [req.query.id_mascota], (error, resultado) => {
        if (error) {
            throw error;
        }

        res.send(resultado.rows);
    });
});

app.get('/actualizar-mascota',(req:any , res:any)=>{
    connectionDB.query("update mascotas set nombre=$1 , especie=$2, edad=$3, id_propietario =$4 where id_mascota=$5",[req.query.nombre,req.query.especie,req.query.edad,req.query.id_propietario, req.query.id_mascota],(error , resultado)=>{
        if(error){
            throw error;
        }

        res.send(resultado.rows);
    })
})

app.get('/crear-mascota', (req: any, res: any) => {
    connectionDB.query("insert into mascotas(nombre,especie,edad,id_propietario) values($1,$2,$3,$4)", [req.query.nombre, req.query.especie, req.query.edad, req.query.id_propietario], (error, resultado) => {
        if (error) {
            throw error;
        }

        res.send(resultado.rows);
    });
});
app.get('/eliminar-mascota', (req: any, res: any) => {
    connectionDB.query("delete from mascotas where id_mascota=$1", [req.query.id_mascota], (error, resultado) => {
        if (error) {
            throw error;
        }

        res.send(resultado.rows);
    });
});

app.listen(3000, () => console.log('server on port 3000'))
