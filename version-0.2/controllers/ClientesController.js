import express from "express"
import ClienteService from "../services/ClienteService.js"

const router = express.Router()

router.get("/clientes", (req, res) => {
    ClienteService.selectAll().then(cliente => {
        res.render("cliente", {
            clientes: cliente
        })
    })
})

router.post("/clientes/new", (req, res) => {
    const { nome, cargo, idade } = req.body
    ClienteService.Create(nome, cargo, idade)

    res.redirect("/clientes")
})

router.get("/clientes/delete/:id", (req, res) => {
    const id = req.params.id

    ClienteService.Delete(id)

    res.redirect("/clientes")
})

router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id

    ClienteService.selectOne(id).then(cliente => {
        res.render("clienteEdit", {
            cliente: cliente
        })
    })
})

router.post("/clientes/update/:id", (req, res) => {
    const id = req.params.id
    const { nome, cargo, idade } = req.body

    ClienteService.Update(id, nome, cargo, idade)

    res.redirect("/clientes")    
})

export default router