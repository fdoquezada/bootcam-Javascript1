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
app.set("view engine", "hbs");

//crear una carpeta llamada views y establacer la ruta en express
app.set("views",__dirname+"/views");

//3 crear un vista en la carpeta views
//4crear un server con el; get 
//5 envia la respuesta , el archivo hbs junto comn la variable que la plantilla 



hbs.registerPartials(__dirname + '/views/partials', function(err){

});
app.use(morgan("dev"));

const datosPagina1={
    titulo:"hola desde partials!!",
    subtitulo:"hola desde javascript"
}


app.get('/', (req, res) => {
    res.render('vistaclase3_1',datosPagina1)
   
})

const datos=["pan","mantequilla", "mermelada", "cecinas"];

app.get('/partial2', (req, res) =>{
    res.render('vistaclase3_2', {lista:datos})
})
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))