const express = require('express')
const mysql = require('mysql')
const exphbs = require('express-handlebars')
const todosRouter = require('./routes/todos')

const PORT = process.env.PORT || 3000
const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.use(todosRouter)

app.listen(PORT, () => {
    console.log('Server has been started...')
})