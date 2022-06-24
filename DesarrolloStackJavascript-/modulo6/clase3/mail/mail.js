//keal wonv rjwa vmpy
//1.-cargamos el nodemailer
var nodemailer=require("nodemailer");
nodemailer
//2.1 configuracion del servidor 
var trasnporter =nodemailer.createTransport({
    service :'gmail',
    auth :{
        user :'fdoquezadapuno@gmail.com',
        pass : 'kealwonvrjwavmpy'
    }
});
//2.2 configurara el mensaje de correo
var mailOption ={
    from :'holacomoestas@lavida.com',
    to :'p.olidelcl@yahoo.com',
    subject: 'saludos desde pluton',
    text : 'este mensaje es ṕara saludarte y que pases un gran fin de semana '

};
//3 enviar correo
trasnporter.sendMail(mailOption,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response)
    }
})
