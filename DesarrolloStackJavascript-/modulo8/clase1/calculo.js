module.exports.sumar=function(a,b){
    return a+b;
}
module.exports.restar=function(a,b){
    return a-b;
}
module.exports.multiplicar=function(a,b){
    return a*b;
}
module.exports.dividir=function(a,b){
    return a/b;
}

module.exports.punto=class{
    constructor(x,y){
        this.x=x;
        this.y=y,
    }
}