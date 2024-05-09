import mongoose from "mongoose";
import usuario from "../models/Usuario.js";

const Usuario = mongoose.model("Usuario", usuario);

class UsuarioService {
  selectAll() {
    const usuarios = Usuario.find();
    return usuarios;
  }

  selectOne(id) {
    const usuario = Usuario.findOne({ _id: id });
    return usuario;
  }

  Create(nome, email, usuario) {
    const novoUsuario = new Usuario({
      nome: nome,
      email: email,
      usuario: usuario,
    });

    novoUsuario.save();
  }

  Delete(id) {
    Usuario.findByIdAndDelete(id)
      .then(() => {
        console.log(`O usuário com o id: ${id} foi deletado com sucesso!`);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  Update(id, nome, email, usuario) {
    Usuario.findByIdAndUpdate(id, {
      nome: nome,
      email: email,
      usuario: usuario,
    })
      .then(() => {
        console.log(`O usuário com o id: ${id} foi alterado com sucesso!`);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}

export default new UsuarioService();
