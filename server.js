const express = require("express");
const app= express();
const bcrypt = require('bcrypt')
const users = [];

app.set('view-engine','ejs')

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('index.ejs',{name : 'xyz'}) //render index.ejs file 
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.post('/login',(req,res)=>{
    
})
app.post('/register',(req,res)=>{
    try{
        const hashedPassword = bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')  //on success redirect to login page
    }catch{
        res.redirect('/register')   //if err,redirect them to redirect page again
    }
})
app.listen(3000)