import express from "express"

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/crudProva")

app.set("view engine", "ejs")

app.use(express.static("public"))

import UsersController from "./controllers/UsersController.js"
import mongoose from "mongoose"

app.get("/", (req, res) => {
  res.render("index")
})

app.use("/", UsersController)

app.listen(8080, erro => {
  if(erro){
    console.log(erro)
  } else{
    console.log("Servidor iniciado com sucesso.")
  }
})