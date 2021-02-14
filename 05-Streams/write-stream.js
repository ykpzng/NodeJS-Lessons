//writeble (yazılabilir stream örneği)

const fs = require("fs");

const file = "mov_bbb.mp4";

//Strem okuma işlemi
const readStream = fs.createReadStream(file);

// yazılacak stream dosyasını belirleriz
const writeStream = fs.createWriteStream("newvideo.mp4");

let progress = 0;

//Data hakkında bilgi almak için fs.stat
fs.stat(file, (error, data) => {
  const total = data.size;
  console.log(total);


  readStream.on("data", (chunk) => {
    // console.log("this size : ", chunk.length);
    // console.log("A Chunk came in...");
    progress += chunk.length;
    console.log((100 * progress) / total);
  });

  //okunan stream ı yeni dosyaya yazar
  readStream.pipe(writeStream);

  //Dosyanın tamamen aktarıldığını öğrenmek için
  writeStream.on('finish', () => {
    console.log("Created new file...");
  })

});
