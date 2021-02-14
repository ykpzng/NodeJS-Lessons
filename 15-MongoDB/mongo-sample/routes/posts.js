var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

// post lara ait routing işlemlerini burada yapıyorum


// ? CREATE
/* POST post saving */   //! Post Ekleme
router.post('/newpost', function (req, res, next) {
  const post = new Post({
    title: 'My new title2 ...',
    isActive: false,
    comments: [{ message: "Loream İpsum" }, { message: "Hello World" }, { message: "Good Job..." }],
    meta: {
      votes: 55,
      favs: 45
    }
  })
  post.save((err, data) => {
    if (err) console.log(err)
    res.json(data)
  });
});


// ? LİSTELEME
/* GET post listing. *///!Postları listeleme      
router.get('/postlist', function (req, res, next) {
  Post.find({}, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


/* GET post listing. */ //!Tekil post getirme  
router.get('/isActive', function (req, res, next) {
  Post.find({ isActive: true }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


/* GET post listing.  //!Belli alanları getiren komut
router.get('/', function (req, res, next) {
  Post.find({}, 'title', (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});

*/

/* GET post listing. */ //! Sadece bir kayıt gelsin
router.get('/searchBy', function (req, res, next) {
  Post.findOne({ title: 'My new title ...' }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});

/* GET post listing. */ //! Bir id ye ait kayıt gelsin (performansı daha yüksek olur)
router.get('/searchById', function (req, res, next) {
  Post.findById('6027f65054e55341c8921944', (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


// ? UPDATE
/*PUT with updateAllpost Updateing. */ //! Çok veriyi güncelleme (kritere uyan tüm verileri günceller)
router.put('/updateall', function (req, res, next) {
  Post.updateMany({ isActive: true }, { isActive: false }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});

/*PUT with updateOne post Updateing. */ //! Bir veriyi güncelleme (kritere uyan ilk veriyi günceller)
router.put('/updateone', function (req, res, next) {
  Post.updateOne({ isActive: true }, { isActive: false }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


/*PUT with findByIdAndUpdate post Updateing. */ //! id ye bağlı güncelleme
router.put('/updateid', function (req, res, next) {
  Post.findByIdAndUpdate('6027f65054e55341c8921944', { isActive: true }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


//? DELETE
/*DELETE with deleteMany post deleting. */ //! kritere uyan tüm kayıtları siler
router.delete('/deleteMany', function (req, res) {
  Post.deleteMany({ isActive: true })
    .then((data) => { res.json(data) })
    .catch((err) => { res.json(err) })
});

/*DELETE with deleteOne post deleting. */ //! kritere uyan ilk kaydı siler
router.delete('/deleteone', function (req, res) {
  Post.deleteOne({ isActive: false }, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


/*DELETE with findByIdandRemove post deleting. */ //! id ye uyan kaydı siler,(sistem dosyasındaki veriyi silmez) (silinen değeri döner)
router.delete('/deleteid', function (req, res) {
  var pstId = '602936f4f14b910ab833cc1d';
  Post.findByIdAndRemove(pstId, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});

/*DELETE with findByIdandDelete post deleting. */ //! id ye uyan kaydı siler, direk siler (silinen değeri döner)
router.delete('/deleteid2', function (req, res) {
  var pstId = '6029381cd8aade3c44bd4c90';
  Post.findByIdAndDelete(pstId, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  })
});


//? SORTHING
// Web Api den gelen veriyi veri tabanına kaydetme (en son yaptık) postmanden veri girdik
router.post('/add', function (req, res) {
  const post = new Post({
    title: req.body.title,
    isActive: req.body.isActive,
    comments: req.body.comments,
    meta: req.body.meta

  });
  post.save((err, data) => {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  });

})

/* GET sort listing. */ //! İstenilen duruma göre sıralama yaparız
router.get('/sorting', function (req, res, next) {
  Post.find({}, (error, data) => {
    if (error) {
      res.send("Beklenmeyen bir hatayla karşılaşıldı...");
    }
    else {
      res.json(data);
    }
  }).sort({ 'meta.favs': 1, title: 'desc' })  //=>1 or 'asc' or 'ascending' (artan sıralmayı ifade eder)
});                             //=>-1 or 'desc' or 'desending' (azalan sıralamayı ifade eder)




module.exports = router;




