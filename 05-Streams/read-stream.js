//readeble (okunabilir stream örneği)

const fs = require("fs");

const file = "mov_bbb.mp4";

const readStream = fs.createReadStream(file);

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

  readStream.on("end", () => {
    console.log("Data reading finished...");
  });

});
