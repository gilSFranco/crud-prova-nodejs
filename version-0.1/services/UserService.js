import mongoose from "mongoose"
import user from "../models/User.js"

const User = mongoose.model("User", user)

class UserService{
  selectAll(){
    const users = User.find()
    return users
  }

  selectOne(id){
    const user = User.findOne({ _id: id })
    return user
  }

  Create(nickname, name, idade){
    const novoUser = new User({
      nickname: nickname,
      name: name,
      idade: idade
    })

    novoUser.save()
  }

  Delete(id){
    User.findByIdAndDelete(id).then(() => {
      console.log(`O User com o id: ${id} foi deletado com sucesso.`)
    }).catch(erro => {
      console.log(erro)
    })
  }

  Update(id, nickname, name, idade){
    User.findByIdAndUpdate(id, {
      nickname: nickname,
      name: name,
      idade: idade
    }).then(() => {
      console.log(`O User com o id: ${id} foi alterado com sucesso.`)
    }).catch(erro => {
      console.log(erro)
    })
  }
}

export default new UserService()