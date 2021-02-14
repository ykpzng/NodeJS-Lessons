const request = require('request');
const http = require("http");
require("dotenv").config();


// let url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${city}`;

const server = http.createServer((req, res) => {
  const form = `<form action="/" method="post">
  <input name="city" type="text" class="ghost-input" placeholder="Enter a City" required>
  <input type="submit" class="ghost-button" value="Get Weather">
</form>`;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(form)

  let body = "";
  req.on('data', function (chunk) {  //takes input value from DOM
    body += chunk;
    const city = body.split('=')[1];


    const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${city}`;

    request(url, function (err, response, body) {
      const temp = JSON.parse(body);
      if (err) {
        console.log('error:', error);
      } else {
        // console.log(`Today ${temp.current.temperature} degress in ${temp.location.name}`);
        res.end("<h3>Today ${temp.current.temperature} degress in ${temp.location.name}</h3>");
      }
    })

  })

})

server.listen(3002);



