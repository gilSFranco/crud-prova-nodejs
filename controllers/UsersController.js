import express from "express"
import UserService from "../services/UserService.js"

const router = express.Router()

router.get("/users", (req, res) => {
  UserService.selectAll().then(user => {
    res.render("user", {
      users: user
    })
  })
})

router.post("/users/new", (req, res) => {
  const { nickname, name, idade } = req.body

  UserService.Create(nickname, name, idade)

  res.redirect("/users")
})

router.get("/users/delete/:id", (req, res) => {
  const id = req.params.id

  UserService.Delete(id)

  res.redirect("/users")
})

router.get("/users/edit/:id", (req, res) => {
  const id = req.params.id

  UserService.selectOne(id).then(user => {
    res.render("userEdit", {
      user: user
    })
  })
})

router.post("/users/update/:id", (req, res) => {
  const id = req.params.id
  const { nickname, name,  idade } = req.body

  UserService.Update(id, nickname, name, idade)

  res.redirect("/users")
})

export default router