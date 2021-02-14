const express = require('express')
const app = express()
const port = 3000

const user = require("./routers/user")
const about = require("./routers/about")


app.use('/', user);      // localhost:3000/user
app.use('/api', about);  // localhost:3000/api/about


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))