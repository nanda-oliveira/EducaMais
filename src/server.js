const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

/**
 * * Carregar variaveis do arquivo .env file, onde chaves de API e senhas são configuradas
 */

  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/educamais"
  const PORT = process.env.PORT || 5050

  const index = require("./routes/index");
  const usuario = require ("./routes/usuarioRoute");
  const postagem = require ("./routes/postagemRoute");
  const aluno = require ("./routes/alunoRoute");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

  app.use(express.json());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/", index);
  app.use("/usuario", usuario);
  app.use("/postagem", postagem);
  app.use("/aluno",aluno);


  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
  })

  app.listen(PORT, () => {
    console.log('Está rodando')
  })

module.exports = app