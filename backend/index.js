const express = require('express')
const session = require('session')
const cors = require('cors')
const app = express()
const sql = require(sql)

const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/teste', (req, res)=>{
    res.json([{'titulo':'alcoasdajsd'}])
})

app.listen(port, ()=>{
    console.log(`rodando na porta ${port}`)
})