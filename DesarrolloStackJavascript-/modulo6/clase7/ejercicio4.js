var yargs= require("yargs");//generar comandos 
var axios=require("axios");



 async function buscarPokemon(inicio,cantidad){
    let respuesta=await axios.get("https://pokeapi.co/api/pokemon?limit="+cantidad+"&offset="+inicio);
    respuesta.data.results.map(e=>console.log(e.mane));


}




yargs.command({
    command:'traer_pokemon',
    describe:'este comando trae una cantidad de pokemon determina por el usuario',
    builder:{
        inicio:{
            type:'number',
            describe:'numero del pokemon inicial de la busqueda',    
        },
        cantidad:{
            type:'number',
            describe:'cantidad de pokemon a traer',
        }

    },
    handler:function(args){
        buscarPokemon(args.inicio,args.cantidad);
    }
})
yargs.parse();

//ejecucion del comando node ejercicio4.js traer_pokemon --inicio 150 --cantidad 100