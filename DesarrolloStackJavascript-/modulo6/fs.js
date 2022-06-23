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
})
