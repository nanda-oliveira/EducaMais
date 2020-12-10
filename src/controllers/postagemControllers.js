const {request, response } = require("express");
const mongoose = require("mongoose");
const postagemCollections = require("../models/postagemSchema");
const postagemCollection = require("../models/postagemSchema");


const getAllPostagens = (req,res)=>{
    console.log(req.url)
    postagemCollection.find((error, postagem)=>{
        if(error){
            return res.status(500).send("Postagem nao encontrada")
        }else{
            return res.status(200).send({
                mensagem : "Postagem deu certo",
                postagem
            })
        }
    }
    )
}

const addPostagem = (req,res) =>{
    const postdoBody = req.body
    const postagem = new postagemCollection(postdoBody)

    postagem.save((error)=>{
        if(error){
            console.log(error)
            return res.status(400).send("Adicione todas as informacoes corretamente")
        }else{
            return res.status(200).send({
                mensagem: "Postagem realizada com sucesso!",
                postagem
            })
        }
    })


}

const deletePostagem = (req,res)=>{
    const removePostagem = req.params.id
    postagemCollection.findByIdAndDelete(removePostagem, (error, postagem)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send("Postagem apagada com sucesso")
        }
    })
}

const updatePostagem = (req,res)=>{
    const idParam = req.params.id
    const postagemBody= req.body
    const postagemAtualizada = {new:true}

    postagemCollection.findByIdAndUpdate(
        idParam,
        postagemBody,
        postagemAtualizada,
        (error, postagem)=>{
            if (error){
                return res.status(500).send({
                    mensagem: "Falha ao atualizar postagem",
                    error
                })
            }else{
                return res.status(200).send({
                    mensagem :"Postagem atualizada com sucesso"
                    
                })
            }
        }
    )
}

module.exports = {
    getAllPostagens,
    addPostagem,
    deletePostagem,
    updatePostagem
}