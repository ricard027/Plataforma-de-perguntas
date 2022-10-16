const Sequelize = require('sequelize')

const conection = new Sequelize('plataformaperguntas','root','260321',{
 host: 'localhost',
 dialect:'mysql'
})

module.exports = conection;