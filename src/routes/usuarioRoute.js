const express = require ("express");
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get("/usuarios", controller.getAllUsers)//http://localhost:3030/usuario/usuarios/
router.get("/nome", controller.getByName) // http://localhost:3030/usuario/nome
router.post("/create", controller.addUser) //http://localhost:3030/usuario/cadastro/
router.delete("/delete", controller.deleteUser)//http://localhost:3030/usuario/delete/
router.patch("/update", controller.updateUser) //http://localhost:3030/usuario/atualizar7

module.exports = router;