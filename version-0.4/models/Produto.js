import mongoose from "mongoose";

const produto = new mongoose.Schema({
  nome: String,
  quantidade: Number,
  preco: Number,
});

export default produto;
