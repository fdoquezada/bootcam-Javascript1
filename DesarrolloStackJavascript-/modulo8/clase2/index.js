//1 cargar las librerias
const { application } = require('express');
const express = require('express');
const hbs=require("hbs");
const morgan = require("morgan");
const { urlToHttpOptions } = require('url');
const {Pool}=require('pg');

const configuracion={
    user: "postgres",
    host:"localhost",
    database:"biblioteca",
    password:"12345"
}
const pool= new Pool(configuracion);


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

let valor=600;

hbs.registerHelper("imagen", function(option){
    return"<img src='"+option.fn(this)+"'>";
})


app.use(morgan("dev"));

app.get('/', (req, res) => {
    const datos={
        titulo:"MI primer renden en HBS por Fernando Quezada!!",
        html:"<p>Hola que tal estas?</p><br><a href='http://www.google.cl'>link a google</a>",
        escribir:true,
        esCaro:valor>500,
        frutas:["piña","manzana","platano","uva"],
        autos:{
            mazda:"kj7654",
            for:"ij58414",
            mitsubishi:"po7654",
            lada:"pk2574",
            chevrolet:"pjhd25"
        },
        foto :"img/foto.webp"
    }
       res.render("vista1",datos);
    })
    app.get('/libros', (req, res) => {
       


const port = 3000
app.listen(port, () => console.log(`escuchando en el puerto  ${port}!`))