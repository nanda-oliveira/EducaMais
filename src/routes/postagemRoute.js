const express = require("express");
const router = express.Router();
const controller = require("../controllers/postagemController");

router.get("/todos", controller.getAllPostagens) //http://localhost:3030/postagem/todos
router.post("/create", controller.addPostagem) //http://localhost:3030/postagem/postar
router.delete("/delete", controller.deletePostagem) //http://localhost:3030/postagem/deletar
router.patch("/update", controller.updatePostagem) //http://localhost:3030/postagem/update

module.exports = router;