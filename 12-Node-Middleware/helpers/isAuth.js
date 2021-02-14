
//moduler şekilde middleware tanımlama

const isAuth = ((req, res, next) => {
  const isAutorizet = false;
  if (isAutorizet) {
    next();
  } else {
    res.send("You have no authority. Plase Login...")
  }
})


module.exports = isAuth;