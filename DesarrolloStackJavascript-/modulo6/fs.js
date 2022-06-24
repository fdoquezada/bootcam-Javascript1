//cargs del modulo file system(manejo de archivos)
var fs = require('fs');
//leemos un archivo
// err: mensaje se error (SI ES QUE HAY ERROE AL LLER rchivo)
fs.readFile("ejemploa.txt",function(err,data){
      if(err){
        console.log(err.message);
    }else{
        console.log(data.toString());

    }
});

//sobreescribir un archivo
fs.writeFile("ejemeplo2.txt","texto de ejemplo 2",function(err){
    if(err){
        console.log(eer.message);
        
    }else{
        console.log("Archivo guardalo correctamante")
    }
});

fs.appendFile("ejemplo2.txt","texto de ejemplo 2",function(err){
    if(err){
        console.log(eer.message);
        
    }else{
        console.log("Archivo guardalo correctamante")
    }
});
//abrir archivo 
fs.open('ejemplo4.txt',"w",function(err,fd){
    if(err){
        console.log(err.menssage);
    }else{
        console.log("archivo abierto correctamente");
    }
});
fs.unlink('basura.txt',"w",function(err,fd){
    if(err){
        console.log(err.menssage);
    }else{
        console.log("archivo eliminado correctamante");
    }
});