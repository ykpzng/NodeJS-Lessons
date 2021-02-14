function sayName(text, callback) {
  console.log(text)
  callback();
}

function saySurname() {
  console.log(" Surname");
}

sayName("Yakup", saySurname);
//saySurname();

//or

sayName("Ali", function () {
  console.log("Surname2");
})