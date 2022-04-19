const express = require('express')
const app = express()
const ejs = require('ejs')


app.use(express.static("public"))
app.use('/css', express.static(__dirname + 'public/css'))


// set views
app.set('view engine', 'ejs')
// app.set('views', './views')
app.get('/', (req, res) => {
    res.render('index')
})

// sign in 
app.get('/signin', (req, res) => {
    res.render('signin')
})

// sign up
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(3000, () => {
    console.log('Server stated on port 3000')
})