//1 cargar las librerias
const { application } = require('express');
const express = require('express');
const hbs=require("hbs");
const morgan = require("morgan");
const { urlToHttpOptions } = require('url');
const {Pool}=require('pg');


//2configurar librerias 
//express
const app =  new express();
//setear la carpeta publica que sera visible por el usuario

//(para cargar contenido como fotos , css,etc.)
app.use(express.static("public"));

//aqui le indicamos a express que use hbs para las vistas
app.set("view engine", "ejs");

//crear una carpeta llamada views y establacer la ruta en express
app.set("views",__dirname+"/views");

//3 crear un vista en la carpeta views
//4crear un server con el; get 
//5 envia la respuesta , el archivo hbs junto comn la variable que la plantilla 





app.use(morgan("dev"));

const datos={
    texto:"hoy es martes",
    precio:499,0
    alimentos:["pan","mantequilla", "mermelada", "cecinas"],0
    subtitulo:"mensaje enviado desde js "
}

app.get('/', (req, res) => {
    res.render('ejemplo_ejs.ejs', datos)
   
})



/* 
const datos=["pan","mantequilla", "mermelada", "cecinas"];

app.get('/partial2', (req, res) =>{
    res.render('vistaclase3_2', {lista:datos})
}) */
const port = 3000

app.listen(port, () => console.log(`Estamos escuchando en el puerto  ${port} siiiiiiii!`))