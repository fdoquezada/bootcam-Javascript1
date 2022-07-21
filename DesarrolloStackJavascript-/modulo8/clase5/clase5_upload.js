//1 cargar las libreias
const express = require('express');
const upload= require('express-fileupload');//carga de liobreria para optener archivos 
const moment = require('moment');
const morgan = require('morgan');

//2 configurar express
const app = express()
const port = 3000
app.use(morgan("dev"));
app.use(express.static("public"));
const opcionesUpload={
    limits:{
        fileSize:1024*1024*10 //tamano maximo 10 megas
    }
}
app.use(upload());//inicializacion de libreria de archivos para que express lo use
app.set("view engine","ejs");
app.set("views", __dirname+"/views");

//crear post con la ruta para optener los archivos del formulario
app.post("/enviar_archivo", function(req, res) {
        //chequeo de si viena o no un archvo
        if(!req.files){
            return res.status(400).send("archivo no encontrado");
        }

            let archivo=req.files.archivo;
            let fecha=moment().format("YYYY_MM_DD_HH_mm_ss");
            let ruta=__dirname+"/uploads/"+fecha+"_"+archivo.name;
            archivo.mv(ruta,function(err){
                if(err){
                    console.log("Error al guardar archivo:" + err.message);
                    res.status(500).send("error al guardar archivo");
                }else{
                    res.send("archivo guardado correctamante");
                }
            })
        })

app.post("/enviar_archivo", function(req, res) {
        //chequeo de si viena o no un archvo
        if(!req.files){
            return res.status(400).send("archivo no encontrado");
        }
        
            let archivo=req.files.archivo;
            let fecha=moment().format("YYYY_MM_DD_HH_mm_ss");
            let ruta=__dirname+"/uploads/"+fecha+"_"+archivo.name;
            archivo.mv(ruta,function(err){
                if(err){
                    console.log("Error al guardar archivo:" + err.message);
                    res.status(500).send("error al guardar archivo");
                }else{
                    res.send("archivo guardado correctamante");
                }
            })
        })

app.post("/enviar_archivos", function(req, res) {
            //chequeo de si viena o no un archvo
        if(!req.files){
                return res.status(400).send("archivo no encontrado");
        }
            
                let archivo=req.files.archivo;
                let foto=req.files.imagen;
                let doc=req.files.documento;
                
                res.send("foto" + foto.name+" -" + foto.size);
           
        })        
            /* console.log(archivo.name);
            console.log(archivo.size);
            res.send(archivo.name + " - " + archivo.size); */

//4 generara los reques y las rutas
app.get('/', (req, res) => res.render('upload'));



//4iniciar el server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))