
const http = require("http");


const server = http.createServer((request, response) => {
  console.log("Request URL : ", request.url);
  console.log("Request : ", request);
  response.write("<h1>Hi! I'm from response...</h1>");
  // response.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
  // response.write("Ç ğ Ö")
  response.end();  //cevap bitirilmek zorundadır
});


server.listen(3000);