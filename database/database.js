const Sequelize = require('sequelize')

const conection = new Sequelize('PlataformaPerguntas','root','260321',{
 host: 'localhost',
 dialect:'mysql'
})

module.exports = conection;