const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password : "",  //enter your password here
    database: "empleados_crud"
});

app.post("/create",(req,res)=>{
    const nombre=req.body.nombre;
    const edad=req.body.edad;
    const pais=req.body.pais;
    const cargo=req.body.cargo;
    const anios=req.body.anios;

    db.query('insert into empleados(nombre,edad,pais,cargo,anios) values (?,?,?,?,?)',[nombre,edad,pais,cargo,anios],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Empleado registrado con exito!");
        }
    });
});

app.get("/empleados",(req,res)=>{
    db.query('select * from empleados',
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log('server is running on port 3001  127https://www.youtube.com/watch?v=eJ6v0E5DJlw---https://www.youtube.com/watch?v=U1u2jNYXmBw');
})



