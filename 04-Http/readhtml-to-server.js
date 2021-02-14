const fs = require("fs");
const http = require("http");

const myServer = http.createServer((request, response) => {
  fs.readFile("demo.html", (error, data) => {
    if (error) {
      throw error;
    }
    response.end(data);
  })
})

myServer.listen(3000);