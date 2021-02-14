const express = require('express');

const router = express.Router();


router.get('/about', (req, res) => {
  res.send("About Page From Get");
})

router.post('/about', (req, res) => {
  res.send("About Page From Post");
})



module.exports = router