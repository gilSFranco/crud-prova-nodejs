import express from "express";
import mongoose from "mongoose";

import UsuariosControllers from "./controllers/UsuariosControllers.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/provaHojeCRUD");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", UsuariosControllers);

app.listen(8080, (erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
