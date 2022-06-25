const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('index.html'))
app.get('/contacto', (req, res) => res.send('prueba de servidor con nodemon'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))