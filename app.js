const express = require('express')
const app = express()
const port = 2000
const router = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(port, function(){
    console.log(`live on port ${port}`);
})


