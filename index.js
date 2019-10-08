const express = require('express')

const app = express()

app.get('/',(req,res,next)=>{
    res.send('Hello World')
})

app.listen(5000) // 3000, 5000,8000,8080

// Simplemente imprime un HelloWorld en localhost 5000

