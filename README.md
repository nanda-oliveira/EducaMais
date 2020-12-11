# EducaMais

# EducaMais
## 🚀 Descrição
API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).


## ✅ Contexto Social 
- A crise causada pela pandemia de Covid-19 pode retardar o progresso na educação por várias décadas, acentuando ainda mais a desigualdade social no país.Devido à nova organização do contexto educacional, podemos obsevar o aumento de estresse entre alunos, pais e professores . Portanto, faz necessário uma avaliação completa e um registro das experiências nesse período de adaptação.

## ✅ Problema
- Ausência de canais de comunicação eficaz entre família e escola, falta de suporte para os pais, ausência de um índice para orientar os professores no planejamento das aulas, socialização das experiências, criação de rede de apoio entre familiares. 

## ✅ O que? 
- Plataforma de comunicação família - escola para um compartilhamento das experiências de aprendizagem das crianças durante a pandemia. 

## ✅ Objetivos
- Favorecer uma avaliação qualitativa do processo de ensino aprendizagem, compartilhar experiências e práticas para fortalecer a comunidade entre os pais, criação de estratégias criativas de aprendizagem, crianção de rede de apoio.

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
PATCH   | /aluno/update/:id      |  Atualiza cadastro aluno               |
PATCH   | /usuario/update/:id    |  Atualiza cadastro usuario             |
PATCH   | /postagem/update/:id   |  Atualiza uma postagem                 |
DELETE  | /aluno/delete/:id      |  Deleta cadastro de aluno              |
DELETE  | /usuario/delete/:id    |  Deleta cadastro de usuario            |
DELETE  | /postagem/delete/:id   |  Deleta uma postagem                   |