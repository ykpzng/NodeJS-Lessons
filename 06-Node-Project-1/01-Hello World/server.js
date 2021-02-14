// const http = require("http");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.write("Home Page");
//   } else if (request.url === "/about") {
//     response.write("About Page");
//   } else if (request.url === "/contact") {
//     response.write("Contact Page");
//   } else {
//     response.write("Error Page 404...")
//   }

//   response.end();
// })

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
}).listen(3000);



// server.listen(3000);