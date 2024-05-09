import express from "express";
import mongoose from "mongoose";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js";

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/provaPraticaDW");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", ProdutosController);

app.listen(8080, (erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
