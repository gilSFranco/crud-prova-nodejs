import mongoose from "mongoose"

const user = new mongoose.Schema({
  nickname: String,
  name: String,
  idade: Number
})

export default user