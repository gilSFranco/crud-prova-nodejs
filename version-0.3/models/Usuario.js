import mongoose from "mongoose";

const usuario = new mongoose.Schema({
  nome: String,
  email: String,
  usuario: String,
});

export default usuario;
