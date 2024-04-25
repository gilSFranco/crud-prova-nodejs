import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService{
    selectAll(){
        const clientes = Cliente.find()
        return clientes
    }

    selectOne(id){
        const cliente = Cliente.findOne({ _id: id })
        return cliente
    }

    Create(nome, cargo, idade){
        const novoCliente = new Cliente({
            nome: nome,
            cargo: cargo,
            idade: idade
        })

        novoCliente.save()
    }

    Update(id, nome, cargo, idade){
        Cliente.findByIdAndUpdate(id, {
            nome: nome,
            cargo: cargo,
            idade: idade
        }).then(() => {
            console.log(`O cliente com o id: ${id} foi alterado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }

    Delete(id){
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`O cliente com o id: ${id} foi deletado com sucesso.`)
        }).catch(erro => {
            console.log(erro)
        })
    }
}

export default new ClienteService()