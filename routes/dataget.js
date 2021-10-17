const express = require('express')
const router =express.Router()

const mongoose=require('mongoose')
MongoDbURL=' ';
mongoose.connect(MongoDbURL);
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log("asd ")
});

const kittySchema = new mongoose.Schema({
    from: String,
    to: String,
    am: String
  });

  const kittySchema1 = new mongoose.Schema({
    sno: String ,
    user:String
  });

router.post('/', (req, res) => {
    console.log(req.body)
    const Kitten = mongoose.model('transactions', kittySchema);
    const fluffy = new Kitten({ from : req.body.from , to : req.body.to , am : req.body.am});
    fluffy.save();
    console.log(fluffy)
  res.send('Hello World!')
  res.redirect('/')
})

router.get('/data',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    const kittens = await Kitten.find();
    res.send(kittens);
})
router.get('/data/rupin',async (req,res)=>{
    x=[]
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"rupin"},(err,reso)=>{
        Kitten.find({to:"rupin"},(err,resot)=>{
        res.send([reso,resot]);
    })
        
    })
})
router.get('/data/aarav',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"aarav"},(err,reso)=>{
    Kitten.find({to:"aarav"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/dev',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"dev"},(err,reso)=>{
    Kitten.find({to:"dev"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/hritik',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"hritik"},(err,reso)=>{
    Kitten.find({to:"hritik"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/nidhi',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"nidhi"},(err,reso)=>{
    Kitten.find({to:"nidhi"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/komal',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"komal"},(err,reso)=>{
    Kitten.find({to:"komal"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/meena',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"meena"},(err,reso)=>{
    Kitten.find({to:"meena"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/utkarsh',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"utkarsh"},(err,reso)=>{
    Kitten.find({to:"utkarsh"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/vikram',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"vikram"},(err,reso)=>{
    Kitten.find({to:"vikram"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})
router.get('/data/zohra',async (req,res)=>{
    const Kitten = mongoose.model('transactions', kittySchema);
    Kitten.find({from:"zohra"},(err,reso)=>{
    Kitten.find({to:"zohra"},(err,resot)=>{
        res.send([reso,resot]);
    })
    })
})

router.get('/data/user',async (req,res)=>{
    const Kitten = mongoose.model('user',kittySchema1);
    const kittens = await Kitten.find();
    res.send(kittens);
})

module.exports=router;