const sequelize = require('sequelize');
const conection = require('./database');


const Pergunta = conection.define('perguntas',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    assunto:{
        type:sequelize.TEXT,
        allowNull:false,
    }
})

Pergunta.sync({force: false})
.then(()=> console.log('criada'))

module.exports = Pergunta;