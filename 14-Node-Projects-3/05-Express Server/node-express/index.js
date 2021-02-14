const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))

app.get("/about", (req, res) => {
  res.send("About Page");
})

app.get("/hobbies", (req, res) => {
  res.send("<h1>Hobbies Page</h1>");
})

app.get("/friends", (req, res) => {
  res.json(["Hasan", "Hüseyin", "Veli", "Deli"])
})


app.listen(port, () => console.log(`Example app listening on port port!`))


