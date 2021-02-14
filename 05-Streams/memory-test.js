const fs = require("fs");
const http = require("http");

//!Dosyayı normal okuma yönteminde tamamını ram a yükler
/* const myserver = http.createServer();
myserver.on('request', (req, res) => {
  fs.readFile('mov_bbb.mp4', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  })
}); */

//! stream yöntemiyle dosyayı okumada tamamını ram a yazmaz, chunklara bölerek alır
const myserver = http.createServer();
myserver.on('request', (req, res) => {
  const readStream = fs.createReadStream('mov_bbb.mp4');
  readStream.pipe(res);
});





myserver.listen(3001);