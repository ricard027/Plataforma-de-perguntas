const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conection = require("./database/database.js");
const Perguntas = require('./database/Pergunta');

//database

conection.authenticate()
 .then(()=> console.log('conexao criada'))
 .catch((error)=> console.log(error))

//bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//rotas
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
  
    res.render('index');

 })


app.get('/Perguntar',(req,res)=>{
    
    res.render('Perguntar')
    
 })
 app.get('/PerguntasSalvas',(req,res)=>{

   Perguntas.findAll({raw:true}).then((per)=>
   res.render('PerguntasSalvas',{
     perguntas:per,
   }))
})


app.post('/ListaPerguntas',(req,res)=>{
     const titulo = req.body.titulo;
     const assunto = req.body.assunto;
      
     Perguntas.create({
        titulo: titulo,
        assunto:assunto
     }).then(()=>res.redirect('/'))
})
 

app.listen(4000,(erro)=> console.log("app rodando"))


