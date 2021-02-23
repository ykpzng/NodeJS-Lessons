const express = require('express');
const router = express.Router();


//Model ile ilgili işlem yapacağım için import ediyorum
const AuthorModel = require('../models/Author');

// $exists => bir alanın var olup olmadığını kontroleder
router.get('/findExists', (req, res, next) => {
  AuthorModel.find({ score: { $exists: false } }, "name score views", (req, result) => {
    res.json(result)
  })
})



//! post format
/* router.post('/add', function (req, res) {
  const authot=new AuthorModel({})
  authot.save((err,data)=>{})
 }) */

router.post('/add', function (req, res) {
  const authot = new AuthorModel({
    name: req.body.name,
    category: req.body.category,
    score: req.body.score,
    views: req.body.views,
    isDelete: req.body.isDelete
  })
  authot.save((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
})


//aggregate methodunu kullanıyorum (filtreleme, gruplama,sıralama, listeleme, join işlemleri yapılabilir -- Kümeleme --)
//aggregate array alır
//match => (veritabanından uygun olan veriyi getirir)
//$group => istenilen alana göre gruplama yapar. categoriye göre grupladık. grup kaçartane olduğunu verdi
//$project => Sadece istenen alanlar getirilir
//$sort => scor alanına göre büyükten küçüğe sıralar
//$limit => istenen adette kayıt listeler
//$skip => istenilen adette atlama yapar
router.get('/aggregate', (req, res) => {
  AuthorModel.aggregate([
    // {
    //   $match: { isDelete: true }
    // },
    // {
    //   $group: { _id: "$category", totalcount: { $sum: 1 } }
    // }
    // {
    //   $project: { name: true, category: true }
    // },
    // {
    //   $sort: { score: -1 }
    // },
    {
      $limit: 2
    },
    {
      $skip: 1
    }

  ], (err, result) => {
    if (err) res.json(err)
    res.json(result)
  })
})

//?JOIN
// $lookup => tabloları birbirine bağlar, localField=şu an üzerinde olunan tablo, foreignField=bağlanılacak tablo, as=sonuş bu isim altında oluşur
//  $unwind => sanal oluşturulan alanı içeriğini ayrıca getirmek için (genel kullanım lookup yapılan tablolarda kullanılır)
const mongoose = require('mongoose');

router.get('/aggregate-lookup', function (req, res) {
  AuthorModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId("602f91ab28d91d4b0c58c3eb") } },
    { $lookup: { from: 'books', localField: '_id', foreignField: 'authorId', as: "book" } },
    { $unwind: "$book" },
    { $project: { name: true, booktitle: "$book.title" } }
  ], (req, result) => {
    res.json(result);
  })
})


module.exports = router;

