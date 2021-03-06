# EducaMais

# EducaMais
## 🚀 Descrição
API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).

<p align="center">
<img src= "https://github.com/nanda-oliveira/EducaMais/blob/main/img/educamais.png" >
</p>


## ✅ Contexto Social 
- A crise causada pela pandemia de Covid-19 pode retardar o progresso na educação por várias décadas, acentuando ainda mais a desigualdade social no país. Devido à nova organização do contexto educacional, podemos obsevar o aumento de estresse entre alunos, pais e professores. Portanto, é preciso uma avaliação completa e um registro das experiências nesse período de adaptação.

## ✅ Problema
- Ausência de canais de comunicação eficaz entre família e escola, falta de suporte para os pais e ausência de índices para orientar os professores no planejamento das aulas. 

## ✅ O que? 
- Plataforma de comunicação família - escola para compartilhar as experiências de aprendizagem das crianças durante a pandemia. 

## ✅ Objetivos
- Favorecer uma avaliação qualitativa do processo de ensino aprendizagem, compartilhar experiências e práticas para fortalecer a comunidade entre os pais, criação de estratégias criativas de aprendizagem e fortalecimento da rede de apoio.

## ✅ Aprendizados
 - Arquitetura Model View Controller (MVC);
 - Métodos de Requisição HTTP;
 - CREATE (CRIAR), READ(CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

## ✅ Arquitetura

        Arquitetura MVC
        |
        \--📂 EDUCAMAIS
            |   README.md  
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂src
                📂---controller
                |       **alunoController.js
                |       usuarioController.js
                |       postagemController.js**
                |
                📂---model
                |       **alunoSchema.js
                |       usuarioSchema.js
                |       postagemSchema.js**    
                |
                📂---routes
                |       **alunoRoute.js
                |       usuarioRoute.js
                |       postagemRoute.js
                |__      index.js**


Clique para visualizar o desenho da [Arquitetura](https://drive.google.com/file/d/1oNqtGjmwjHbi5-6zhF_dYm1JqttO6F6E/view?usp=sharing)

###  Rotas

local: http://localhost:5050

MongoDB: [mongodb://localhost:27017/educamais]()

Heroku: https://educamaisreprograma.herokuapp.com/

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)
- [Postman](https://www.postman.com/)




## EndPoints

Método  |  Caminho               |  Descrição                             | 
--------|------------------------|----------------------------------------|
GET     |      /                 |  Retorna uma index de apresentação     |
GET     | /aluno/alunos          |  Retorna todos alunos cadastrados      |
GET     | /usuario/usuarios      |  Retorna todos usuarios cadastrados    |
GET     | /usuario/nome/:nome    |  Retorna usuarios pelo nome            |
GET     | /postagem/todos        |  Retorna todas as postagens            |
POST    | /aluno/create          |  Cadastro aluno                        |
POST    | /usuario/create        |  Cadastro usuario                      |
POST    | /postagem/create       |  Adiciona uma postagem                 |
PUT     | /aluno/update/         |  Atualiza cadastro aluno               |
PUT     | /usuario/update/       |  Atualiza cadastro usuario             |
PUT     | /postagem/update/      |  Atualiza uma postagem                 |
DELETE  | /aluno/delete/         |  Deleta cadastro de aluno              |
DELETE  | /usuario/delete/       |  Deleta cadastro de usuario            |
DELETE  | /postagem/delete/      |  Deleta uma postagem                   |

---


### Rodando o Back End 

```bash
Server Local
# Com o git/With git
# Clone este repositório/Clone this repository
$ git clone <https://github.com/nanda-oliveira/EducaMais.git>

# Acesse a pasta do projeto no terminal - cmd/Access the mkdir of project on terminal
$ cd EducaMais

# Instale as dependências/Install the dependencies
$ npm install
$ npm instal mongoose

# Execute o servidor/Run the server
$ npm start

# O servidor inciará na porta:5050 - acesse <http://localhost:5050>/The server will start on port 5050
# Mongo conectado em mongodb://localhost:27017/educamais connected to mongodb
```


---