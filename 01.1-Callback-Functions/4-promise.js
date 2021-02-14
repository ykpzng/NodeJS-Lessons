const promiseFunc = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 5) {
      resolve("Runing resolve...");
    } else {
      reject("Runing reject...")
    }
  })
}

promiseFunc(4)
  .then((item) => {
    console.log(item);
    return 1;
  })
  .then((item2) => {
    console.log(item2);
    return 2;
  })
  .then((item3) => {
    console.log(item3);
    return 3;
  })
  .catch((err) => {
    console.log(err);
  })


  //Buradaki return bir sonraki then ' e gönderir
