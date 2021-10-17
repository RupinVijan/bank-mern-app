const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = process.env.PORT || 5000;



app.use(express.json())

app.use('/api/use', require('./routes/dataget'))
app.use('/api/user', require('./routes/users'))

if(process.env.NODE_ENV=== "production"){
  app.use(express.static('my-bank/build'))
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})