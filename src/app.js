const express = require('express')
const hbs = require('hbs')
const path = require('path')
const dairy_handler = require('./utils/diary_handler')


const app = express()
const index_path = path.join(__dirname, '../public')
const view_path = path.join(__dirname, '../templates/views')
const partial_path = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', view_path)
hbs.registerPartials(partial_path)

app.use(express.static(index_path))
app.get('', (req, res) => {
    res.render('index')
})

app.get('/save', (req, res) => {
    console.log(req.query.name)
    dairy_handler.save_file(req.query.name, req.query.body, (result) => {
        res.send(result)
    })
})

app.get('/search', (req, res) => {
    dairy_handler.search(req.query.name, (result) => {
        res.send(result)
    })
})
app.get('/searchpage', (req, res) => {
    res.render('searchpage')
})

app.listen('3000', () => {
    console.log('listening at port 3000')
})