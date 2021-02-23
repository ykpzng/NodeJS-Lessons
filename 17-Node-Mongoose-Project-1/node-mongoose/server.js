const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require('./routes/user.routes');

app.use('/users', userRouter);


app.get('/', (req, res) => res.send('Welcome to Students Database!'))





app.listen(port, () => console.log(`Example app listening on port port!`))