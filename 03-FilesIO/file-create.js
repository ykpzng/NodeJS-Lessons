const fs = require("fs");
const { clearScreenDown } = require("readline");

// fs.appendFile();  (ekleme yapar sonuna, dosya yoksa oluşturulur)
// fs.writeFile();   (dosyaya yeniden yazar, dosya yoksa oluşturulur)      
/* 
fs.appendFile("data2.txt", "Hello World!!", (error) => {
  if (error) {
    throw error;
  }
  console.log("Added to file...")
})


fs.writeFile("data1.txt", "Hello World!!", (error) => {
  if (error) {
    throw error;
  }
  console.log("Added to file...")
})
*/



// Dosya silme fs.unlink()

fs.unlink("data2.txt", (error) => {
  if (error) {
    throw error;
  }
  console.log("File deleted...")
});