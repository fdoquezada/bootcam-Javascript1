parrafo.addEventListener("mouseover", function(){
    parrafo.style.backgroundColor = "blue";
    parrafo,style.color="yellow";
});
parrafo.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
    this.style.color = "black";
})

let input = parrafo.createElement("input");
parrafo.appendChild(input);
input.addEventListener("keyup", function(){
input.innerHTML = (input type="text" name="text" value="");


let arreglo = [10, 11, 3, 20, 5];

let mayorQueDiez = arreglo.filter(element => element > 10);

console.log(mayorQueDiez)