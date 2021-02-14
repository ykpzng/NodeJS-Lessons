const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request');
require("dotenv").config();


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
  res.render('index');

})

app.post('/', function (req, res) {
  console.log(req.body.city);

  const city = req.body.city;
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${city}`;

  request(url, function (err, response, body) {
    //const temp = JSON.parse(body);
    // if (err) {
    //   console.log('error:', error);
    // } else {
    //   console.log(`Today ${temp.current.temperature} degress in ${temp.location.name}`);
    // }
    if (err) {
      console.log('error:', error);
      res.render('index', { weather: null, error: 'Error, please try again' });

    } else {
      //console.log('body:', body);
      let weather = JSON.parse(body);
      let message = `It's ${weather.current.temperature} degrees in ${weather.location.name}!`;
      console.log(message);
      res.render('index', { weather: message, error: null });
    }

  });

})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

