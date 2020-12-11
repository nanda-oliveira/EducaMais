const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunoController")

router.get("/alunos",controller.getAluno)
router.post("/create", controller.addAluno)
router.delete("/delete", controller.deleteAluno)
router.put("/update", controller.updateAluno)

module.exports = router;