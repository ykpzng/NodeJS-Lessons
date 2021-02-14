const express = require('express')
const path = require('path')


/*** App Variables */
const app = express()
const port = 8000

/***  App Configuration */
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


/*** Routes Definitions */
//app.get('/', (req, res) => res.send('WHATS-UP: Food For Devs'))
app.get('/', (req, res) => {
  res.render('index', { title: "Home Page" })
})

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

app.get('/logout', (req, res) => {
  res.redirect('/')
})



/*** Server Activation */
app.listen(port, () => console.log(`Example app listening on port port!`))


















