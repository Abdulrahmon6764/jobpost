const router = require('express').Router()
const path = require('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join (__dirname, '../','views','index.html'))
    // res.sendFile(path.join(__dirname,'../','css','all.css'))
})


module.exports=router