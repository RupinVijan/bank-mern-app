const express = require('express')
const router =express.Router()

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/spark');
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log("asd ")
});

const kittySchema = new mongoose.Schema({
    sno: String ,
    user:String
  });



router.get('/data',async (req,res)=>{
    const Kitten = mongoose.model('user',kittySchema);
    const kittens = await Kitten.find();
    res.send(kittens);
})
// router.get('/data/Rupin',async (req,res)=>{
//     const Kitten = mongoose.model('transactions', kittySchema);
//     Kitten.find({from:"rupin"},(err,reso)=>{
//         res.send(reso);
//     })
// })

module.exports=router;