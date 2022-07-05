
const express = require('express');
const app = express();
const port = 3000;
const bodyParser= require('body-parser');
const  fs=require('fs');
const moment = require('moment');
const { send } = require('process');

//archivos estaticos
app.use(express.static('public'));


function logGlobal(req,res,next){
    console.log("*******nueva solicitud********");
    console.log("fecha: " +moment().toDate());
    console.log("metodo: "+req.method);
    console.log("url: "+req.url);
    next();
} 
app.use(logGlobal);
//-----------------------------------------------------------
//agregar un middleware específico para el formulario
var revisionNumeros = function(req,res,next){
    //para el get
    console.log(req.method);
    if(req.method=='GET'){
        
        let num1=req.query.numero1;
        let num2=req.query.numero2;
        if(!Number(num1) || !Number(num2)){
            res.send("Error en los datos");
            return;
        }else{
            next();
        }
    }
}
app.use('/html/calcular',revisionNumeros);

app.get("/html/calcular",function(req,res){
    let num1=req.query.numero1;
    let num2=req.query.numero2;
    console.log(num1, "-",num2);
    res.send("resultado: " + (Number(num1)*Number(num2)))
})

app.use(bodyParser.urlencoded({extended:false}));


app.post("/html/calcular",function(req,res){
    let num1=req.body.numero1;
    let num2=req.body.numero2;
    console.log(num1, "-",num2);
    res.send("resultado: " + (Number(num1)*Number(num2)));

})

//definir ruta para la hora y fecha
app.get("/moment",function(req,res){
    fs.readFile('public/html/moment.html',function(err,datos){
        let html=datos.toString();
        let fecha=moment().toDate();
        html=html.replace("Hora","Hora"+fecha.toTimeString());
        html=html.replace("Fecha","Fecha"+fecha.toTimeString());
        res.send(html);

    })
})    
//definir ruta para la fecha y hora en formato en español 
app.get("/moment2",function(req,res){
    fs.readFile('public/html/moment.html',function(err,datos){
        let html=datos.toString();
        html=html.replace("Hora:","Hora"+moment().locale('es').format("h:mm:ss a"));
        html=html.replace("Fecha:","Hora"+moment().locale('es').format("dddd D [de] MMMM [de] YYYY"));
        res.send(html);
    })
}) 


// agregar middleware global


//inicio de servers
app.listen(port, () =>  console.log(`Server run in  port ${port}!`))