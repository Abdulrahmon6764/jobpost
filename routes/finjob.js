const router = require('express').Router()
const path = require('path')

let products = []
router.get('/add-Job',(req,res)=>{
    res.sendFile(path.join (__dirname,'../','views','addjob.html'))
    // res.sendFile(path.join(__dirname,'../','css','all.css'))
   
})


router.get('/findJob',(req,res)=>{
    res.sendFile(path.join (__dirname,'../','views','finjob.html'))
    // res.sendFile(path.join(__dirname,'../','css','all.css'))
    res.render('finjob',{product:products})
})
router.post('/add-Job',(req,res)=>{
    // console.log(req.body)
    products.push(req.body)
    res.redirect('/findJob')
})

module.exports=router