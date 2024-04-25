import mongoose from "mongoose"

const cliente = new mongoose.Schema({
    nome: String,
    cargo: String,
    idade: Number
})

export default cliente