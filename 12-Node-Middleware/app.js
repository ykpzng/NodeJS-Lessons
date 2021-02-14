const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

const user = require("./routers/user")
const about = require("./routers/about")

//Middleware tanımlama, sadece user i kontrol eder,user'ı kaldırırsak tüm sayfaları kontrol eder
//Tek sayfa için
/* app.use('/user', (req, res, next) => {
  const isAutorizet = false;
  if (isAutorizet) {
    next();
  } else {
    res.send("You have no authority. Plase Login...")
  }
}) */


//helperı çağırma, Tüm sayfalara uygulanacaksa app in birinci parametresi kaldırılır
/* const isAuth = require("./helpers/isAuth");
app.use('/user', isAuth) */


app.use('/', user);      // localhost:3000/user
app.use('/api', about);  // localhost:3000/api/about




//hata yakalama
app.use((err, req, res, next) => {
  res.status(err.status)
  res.render('error.pug', { message: err.message, status: err.status })
})




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))