//Express ile yazılan kod

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');  // express'e pug kullandığımızı bildirdik. "render" da direk dosya yazabiliriz

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => {
  res.render('index', { name: 'Hortense', phone: '437-911-0992' })
});

app.get('/home', (req, res) => {
  res.render('home')
});

app.get('/contact', (req, res) => {
  res.render('contact')
});


app.listen(port, () => console.log(`Example app listening on port port!`))