import express from "express"
import mongoose from "mongoose"

import ClientesController from "./controllers/ClientesController.js"

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost:27017/provaNodeJS")

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/", ClientesController)

app.listen(8080, erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log("Servidor iniciado com sucesso.")
    }
})