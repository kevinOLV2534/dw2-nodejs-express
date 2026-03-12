// O arquivo index.js é o arquivo principal do projeto

// Importando o MÓDULOS do Express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Configurando o EJS
app.set('view engine','ejs')

// Criando a rota principal do site ("/")
app.get("/",(req,res)=>{
    // res.send("<h1>Bem-Vindo ao meu primeiro site em Node.js e Express.js!</h1>")
    res.render("index")
});

// Criando a rota de perfil do usuário
app.get("/perfil", (req,res)=>{
    // res.send("<h2>Bem-Vindo ao seu perfil!</h2>")
    res.render("perfil")
})

app.get("/clientes", (req,res)=>{
    res.render("clientes")
})
app.get("/produtos",(req,res)=>{
    res.render("produtos")
})
app.get("/servicos",(req,res)=>{
    res.render("servicos")
})

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro!"+error);
  } else {
    console.log(`Servidor inciado com sucesso no endereço: http://localhost:${port}`);
  }
});  
