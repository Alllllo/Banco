//conexão com o banco de dados
const Sequelize = require("sequelize");
const sequelize =  new Sequelize('aula240123','root','sonorforce2007',{
    host : 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(function(){
    console.log('conectado com sucesso');
}).catch(function(erro){
    console.log('falha ao conectar'+erro);
})
//model usuario
const Usuario = sequelize.define('usuarios',{
    Nome: {type:Sequelize.STRING(40)},
    Email: {type:Sequelize.STRING(50)},
    Salario: {type:Sequelize.DECIMAL(9,2)}
});
//model produto
const Produto = sequelize.define('produtos',{
    Produto:{type:Sequelize.STRING(40)},
    Quantidade:{type:Sequelize.INTEGER},
    Preco:{type:Sequelize.DECIMAL(9,2)}
});
//Usuario.sync();
//Produto.sync();