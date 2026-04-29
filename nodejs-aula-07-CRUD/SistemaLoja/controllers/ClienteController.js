// const express = require("express")

// Importando o Express com ES6 Modules (nova)
import express from "express";

// Método do Express usado para criar as rotas da aplicação
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela de cliente
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  }).catch(error=>{
    console.log("Ocorreu um erro ao buscar os clientes."+ error)
  })
});

// Rota de cadastro de clientes (subrota/cadastrar)
router.post("/clientes/cadastrar", (req,res) => {
  // CRIANDO AS VARIÁVEIS QUE IRÃO ARMAZENAR OS DADOS VINDOS DO FORMULÁRIO
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Enviando os dados para o banco
  // O método create cadastra informações no BD
  Cliente.create({
    // coluna // variável
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(()=>{
    res.redirect("/clientes")
    // Falha na promessa
  }).catch(error =>{
    console.log("Ocorreu um erro ao cadastrar o cliente."+ error)
  });
})

// ROTA DE EXCLUSÃO
router.get("/clientes/excluir/:id", (req,res)=>{
  // Capturado o parâmetro da rota
  const id = req.params.id
  // Eviando o ID do cliente para apagar do banco de dados
  Cliente.destroy({
    where : {
// Banco // Parâmetro recebido
      id : id
    }
  // SUCESSO
  }).then(()=>{
    res.redirect("/clientes")
  // FALHA
  }).catch(error =>{
    console.log("Ocorreu um erro ao excluir o cliente"+ error)
  })
})

// Exportando o módulo para usá-lo em outro arquivo
export default router;
