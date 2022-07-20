const express=require('express');
const app=new express();
const morgan= require("morgan");

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",__dirname+"/views");

app.use(morgan("dev"));
app.get('/', (req, res) => {
  res.render('views');
})


module.exports={app}