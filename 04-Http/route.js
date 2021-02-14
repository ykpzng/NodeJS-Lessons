// GET,POST,PUT,DELETE işlemleri

const http = require("http");
const myserver = http.createServer((request, response) => {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.write("This is HomePages!...");
    } else if (request.url === "/about") {
      response.write("This is About Pages!...");
    } else {
      response.write("This is 404 Pages...");
    }
  }
  response.end();
});

myserver.listen(3000)