const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    
    res.render('index')
    
 })


app.get('/Perguntar',(req,res)=>{
    
    res.render('Perguntar')
    
 })

app.post('/ListaPerguntas',(req,res)=>{
     const titulo = req.body.titulo;
     const assunto = req.body.assunto;

     res.send(`<div><h6>${titulo}</h6>
                    <p>${assunto}</p>
              </div>`)
})
 

app.listen(4000,(erro)=> console.log("app rodando"))


