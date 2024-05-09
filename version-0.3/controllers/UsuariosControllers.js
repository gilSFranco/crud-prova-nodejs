import express from "express";
import UsuarioService from "../services/UsuarioService.js";

const router = express.Router();

router.get("/usuarios", (req, res) => {
  UsuarioService.selectAll().then((usuario) => {
    res.render("usuarios", {
      usuarios: usuario,
    });
  });
});

router.post("/usuarios/new", (req, res) => {
  const { nome, email, usuario } = req.body;
  UsuarioService.Create(nome, email, usuario);

  res.redirect("/usuarios");
});

router.get("/usuarios/edit/:id", (req, res) => {
  const id = req.params.id;

  UsuarioService.selectOne(id).then((usuario) => {
    res.render("usuarioEdit", {
      usuario: usuario,
    });
  });
});

router.get("/usuarios/delete/:id", (req, res) => {
  const id = req.params.id;
  UsuarioService.Delete(id);

  res.redirect("/usuarios");
});

router.post("/usuarios/update/:id", (req, res) => {
  const id = req.params.id;
  const { nome, email, usuario } = req.body;

  UsuarioService.Update(id, nome, email, usuario);

  res.redirect("/usuarios");
});

export default router;
