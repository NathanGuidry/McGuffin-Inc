const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const stylesheet = 'home'
    const script = 'home'
    const name = 'Home'
    res.render('home', { stylesheet, script, name })
})

app.get('/home', (req, res) => {
    const stylesheet = 'home'
    const script = 'home'
    const name = 'Home'
    res.render('home', { stylesheet, script, name })
})

app.get('/about', (req, res) => {
    const stylesheet = 'about'
    const script = 'about'
    const name = 'About Us'
    res.render('about', { stylesheet, script, name })
})

app.get('/services', (req, res) => {
    const stylesheet = 'services'
    const script = 'services'
    const name = 'Services'
    res.render('services', { stylesheet, script, name })
})

app.get('/contact', (req, res) => {
    const stylesheet = 'contact'
    const script = 'contact'
    const name = 'Contact Us'
    res.render('contact', { stylesheet, script, name })
})

app.get('*', (req, res) => {
    res.render('errorpage')
})

app.listen(port, () => {
    console.log("LISTENING ON PORT 3000")
})