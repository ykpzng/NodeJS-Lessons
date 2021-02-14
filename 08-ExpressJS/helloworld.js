
const express = require('express');

//Express in constructure methodu
const app = express(); //Arka planda http yi çalıştırır

app.get('/', (req, res) => {
  res.send("Hello express js...");
});


app.listen(3001);


