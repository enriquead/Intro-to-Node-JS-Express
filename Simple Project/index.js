const express = require('express')
const path = require('path')
const hoganMiddleware = require('hogan-middleware')

const app = express()
app.set('views',path.join(__dirname,'views')) 
app.set('view engine','mustache')
app.engine('mustache',hoganMiddleware.__express)

//La siguiente línea Establece que los static assets estan en public
app.use(express.static(path.join(__dirname,'public'))) 


const indexRouter = require('./routes/index')
app.use('/',indexRouter)

app.listen(5000) // 3000, 5000,8000,8080
console.log('Server is running')


