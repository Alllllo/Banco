const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const handlebars = require("express-handlebars");
//config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine','handlebars');
    //bodyparser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());
    //Rotas
    app.get("/", function(req,res){
        res.send("Bem Vindo");
    })
    app.get("cadproduto", function(req,res){
        res.render("cad_produto");
    })
    app.get("/addproduto", function(req,res){
        res.send("Produto"+req.body.produto+
        "<br>Quantidade"+req.body.quantidade+
        "<br>Preco"+req.body.preco);
    })
    app.get("cadusuario", function(req,res){
        res.render("cad_usuario");
    });
    app.get("/addusuario", function(req,res){
        res.send("Nome"+req.body.nome+
        "<br>Email"+req.body.email+
        "<br>Salario"+req.body.salario);
    })
    //Ativa o servidor
app.listen(8080,function(){
    console.log("servidor rodando na URL http://localhost:8080")
})    