const {Pool}=require("pg");

const configuracion={
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:precess.env.PGDATABASE,
    password:process.env.PGPASSWORD
}
const conexion=new Pool(configuracion);

module.exports={conexion}