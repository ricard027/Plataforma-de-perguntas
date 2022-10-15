const express =  require('express');
const app = express();


app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',(req,res)=>{
    
    res.render('Perguntar')
    
 })
 

app.listen(4000,(erro)=> console.log("app rodando"))


