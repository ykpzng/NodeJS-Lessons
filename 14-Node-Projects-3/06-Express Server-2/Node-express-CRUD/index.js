const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = require("./routes/api/users")

app.get('/', (req, res) => res.send("Home Page..."))

app.use('/api/users', users);





app.listen(port, () => console.log(`Example app listening on port port!`))