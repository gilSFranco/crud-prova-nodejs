import mongoose from "mongoose";
import produto from "../models/Produto.js";

const Produto = mongoose.model("Produto", produto);

class ProdutoService {
  selectAll() {
    const produtos = Produto.find();
    return produtos;
  }

  selectOne(id) {
    const produto = Produto.findOne({ _id: id });
    return produto;
  }

  Create(nome, quantidade, preco) {
    const novoProduto = new Produto({
      nome: nome,
      quantidade: quantidade,
      preco: preco,
    });

    novoProduto.save();
  }

  Delete(id) {
    Produto.findByIdAndDelete(id)
      .then(() => {
        console.log(`O produto com o id: ${id} foi deletado com sucesso.`);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  Update(id, nome, quantidade, preco) {
    Produto.findByIdAndUpdate(id, {
      nome: nome,
      quantidade: quantidade,
      preco: preco,
    })
      .then(() => {
        console.log(`O produto com o id: ${id} foi alterado com sucesso.`);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}

export default new ProdutoService();
