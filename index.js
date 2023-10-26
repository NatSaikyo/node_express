const express = require("express")
const path = require("path")

const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3001, () => {
    console.log("Sevidor rodando na porta 3001")
})