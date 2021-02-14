//dosya işlemleri modülü
const fs = require("fs");

//readFile ın ilk parametresi dosya adı, ikinci parametre callback function
fs.readFile('data.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
  console.log("Readed.....");
});

//Senkrona çevirmek için
/*
const demo = fs.readFileSync('data.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());

});
console.log(demo.toString());
console.log("Readed.....");
*/