const express = require('express');

const router = express.Router();


//Eğer app sayfasında helperı görmek istemiyorsak burada da bu şekilde tanımlanır
const isAuth = require("../helpers/isAuth");


//yukarda tanımlanan buraya parametre olarak verilir
router.get('/user', isAuth, (req, res) => {
  res.send("User Page From Get");
})


// hata yakalamayı burada kullanalım
router.post('/user', (req, res, next) => {
  const user = false;
  if (user) {
    res.send("User Page From Post");
  } else {
    return next({ status: 404, message: "This user was not fount" })
  }
})



module.exports = router