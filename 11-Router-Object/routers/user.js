const express = require('express');

const router = express.Router();


router.get('/user', (req, res) => {
  res.send("User Page From Get");
})

router.post('/user', (req, res) => {
  res.send("User Page From Post");
})



module.exports = router