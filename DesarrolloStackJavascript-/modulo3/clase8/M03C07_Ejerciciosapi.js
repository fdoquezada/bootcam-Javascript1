
function cargarCard(textoTitulo,UrlFofo){

    var card = document.createElement("div");
    card.className = "card";

    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerHTML = titulo;

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = UrFofo;

    cardBody.appendChild(cardText);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}


async function cargarPerros(){
    let respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
    let datos = await respuesta.json();
    let contenedor=document.querySelector("#contenedor");
    for(let i in datos.message){
        let urlFoto = await cargarFotoPerro(r);
        let card = cargarCard(i,urlFoto);
        contenedor.appendChild(card);
        

}