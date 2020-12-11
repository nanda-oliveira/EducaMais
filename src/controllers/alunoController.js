const mongoose = require("mongoose");
const alunoCollection = require("../models/alunoSchema")


const getAluno = (req,res)=>{
    console.log(req.url)
    alunoCollection.find((error,aluno)=>{
        if(error){
            return res.status(500).send(error)
       }else{
           return res.status(200).send({
               aluno
           })
       }
    })
}

const addAluno = (req, res) =>{
    const alunoBody = req.body
    const aluno = new alunoCollection(alunoBody)

    aluno.save((error)=>{
        if(error){
            console.log(error)
            return res.status(400).send("Adicione as informações de cadastro corretamente!")
        }else{
            return res.status(200).send({
                mensagem : "Cadastro de aluno realizado com sucesso",
                aluno
            })
        }
    })

}


const deleteAluno = (req,res)=>{
    const removerAluno = req.query
    alunoCollection.findByIdAndDelete(removerAluno, (error, aluno)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send("Perfil do aluno apagado com sucesso!")
        }
    })
}

const updateAluno = (req,res) =>{
    const idParam = req.query
    const alunoBody = req.body
    const alunoAtualizado= {new:true}


    alunoCollection.findByIdAndUpdate(
        idParam,
        alunoBody,
        alunoAtualizado,
        (error, aluno)=>{
            if(error){
                return res.status(500).send({
                    mensagem: "Falha ao atualizar cadastro do aluno",
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem: "Cadastro do aluno atualizado com sucesso!",
                    aluno 
                })
            }
        }
    )
}


module.exports = {
    addAluno,
    deleteAluno,
    updateAluno,
    getAluno
}