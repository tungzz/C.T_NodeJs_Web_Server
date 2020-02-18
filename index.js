const express = require('express')
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/use.route')

const port = 3000

const app = express()
app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded 

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', (req, res) => res.render('index'))

app.use('/users', userRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))