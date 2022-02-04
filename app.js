const express = require('express');
const app = express()
const port = 3000
const { Shirt } = require('./models');

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    // res.send('Hallo Semuanya');
    // res.render('index');
    Shirt.findAll()
        .then((data) => {
            res.render('index', { shirts: data });
        })
        .catch((err) => {
            res.send(err);
        })
}) 

app.get('/form', (req, res) => {
    res.render('form');
})

app.get('/*', (req, res) => {
    res.redirect('/home');
})
//post
//put
//delete

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})