/* 
async function leerUsuario(){//simpre va con async cuando hay un 
    let respuesta = await fetch("https://reqres.in/api/users/2");//por defecto es un get de la url sin body  y sin header
    console.log(respuesta);
    let datos = await respuesta.json();//convertir la respuesta a json
    console.log(datos);

}

    leerUsuario();

//1.
console.log("************************"); */


/* async function leerUsuario(){//simpre va con async cuando hay un 
    let respuesta = await fetch("https://reqres.in/api/users/2");//por defecto es un get de la url sin body  y sin header
    console.log(respuesta);

    if(respuesta.ok9){
        let datos = await respuesta.json();//convertir la respuesta a json
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
}
}

leerUsuario(); */

// console.log("************************");

// async function leerUsuario(){//simpre va con async cuando hay un 
//     let respuesta = await fetch("https://reqres.in/api/users/2");//por defecto es un get de la url sin body  y sin header
//     console.log(respuesta);

//     if(respuesta.ok9){
//         let datos = await respuesta.json();//convertir la respuesta a json
//         console.log(datos);
//     }else{
//         console.log("Datos no encontrados");
// }
// }

// async function leerUsuario()
//     urlFinal=urlBase+"user/"+Id;

/* const urlBase=("https://reqres.in/api")

async function leerUsuario(){//simpre va con async cuando hay un 
    let urlFinal=urlBase+"/users/2";//por defecto es un get de la url sin body  y sin header
    console.log(urlFinal);
    let respuesta = await fetch(urlFinal);//por defecto es un get de la url sin body  y sin header
    console.log(respuesta);
    let datos = await respuesta.json();//convertir la respuesta a json
    console.log(datos);

}

leerUsuario();
 
console.log("************************");
async function leerUsuario(){
    urlFinal=urlBase+"unkown/"+IdleDeadline;
    let respuesta = await fetch(urlFinal);//por defecto es un get de la url sin body  y sin header
    console.log(respuesta);
 if(respuesta.ok){
    let datos = await respuesta.json();//convertir la respuesta a json
    console.log(datos);
}else{
    console.log("Datos no encontrados");
}
}
leerUsuario();
 */

    //simpre va con async cuando hay un}
    console.log("************************");
    urlBase=("https://reqres.in/api")
/*     let usuario={
        name:"Fernando Quezada",
        job:"Desarrollador"
    }

    async function crearUsuario(usuario){
        let urlFinal=urlBase+"/users"
        let respuesta = await fetch(urlFinal,{
            method:"POST",
            body:JSON.stringify(usuario),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        });//por defecto es un get de la url sin body  y sin header
        console.log(respuesta);
        if(respuesta.ok){
            let datos = await respuesta.json();//convertir la respuesta a json
            console.log(datos);
        }else{
            console.log("Datos no encontrados");
        }
    } */
    // crearUsuario(usuario);
      
    console.log("************************");
    urlBase=("https://reqres.in/api")
    let usuario={
        name:"Fernando Quezada",
        job:"Desarrollador"
    }

    async function crearUsuario(usuario){
        let urlFinal=urlBase+"/users/2/"+usuario.id;
        let respuesta = await fetch(urlFinal,{
            method:"PUT",
            body:JSON.stringify(usuario),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        });//por defecto es un get de la url sin body  y sin header
        console.log(respuesta);
        if(respuesta.ok){
            let datos = await respuesta.json();//convertir la respuesta a json
            console.log(datos);
        }else{
            console.log("Datos no encontrados");
        }
    }
    let usuario2={
        id:10,
        name:"german",
        json:"Desarrollador"


    crearUsuario(usuario);