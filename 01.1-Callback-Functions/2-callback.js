function firstFunc(callback) {
  setTimeout(() => {
    console.log("First Function...");
    callback();
  }, 1000);

}

function secondFunc() {
  console.log("Second Function...");
}

function thirdFunc() {
  console.log("Third Function...");
}


// firstFunc();
// secondFunc();
// thirdFunc();

firstFunc(secondFunc()); //=>second function burda çalışır
firstFunc(secondFunc); //second function sonra çalışır

