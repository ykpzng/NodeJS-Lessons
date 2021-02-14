const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send('Hello World! from post method'))

app.get('/contact', (req, res) => res.send('From Contact Page'))

app.put('/', (req, res) => res.send('Hello World! from put method'))

app.delete('/', (req, res) => res.send('Hello World! from delete method'))

app.all('/info', (req, res) => res.send('Hello World! from all method'))


app.get('/user/:id', (req, res) => {
  res.send('User Page. User id:' + req.params.id)

})

app.get('/post/:postId/:userId', (req, res) => {
  res.send(req.params)
})



app.listen(port, () => console.log(`Example app listening on ${port} port!`))