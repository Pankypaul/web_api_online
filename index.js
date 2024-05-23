const express = require("express");     //Llamado de express
const app = express();      //Va a contener los datos de express
const port = 3001; //Puerto 3001

const{ robots } = require ("./robots");
const { getRobots } = require("./getRobots");

app.get("/",getRobots);

app.get("/:id",getRobotsById);

app.listen(port,()=>{ //Escucha el puerto y ejecutate
    console.log(`Conectado ok en el puerto ${port}`);
})   

































/*
app.get("/", (req, res )=>{
    res.json({
        robots:robots
    });
})*/