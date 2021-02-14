const express = require('express');
const uuid = require('uuid');   //Random id üreten middleware 'uuid'
const users = require('../../UsersData')
const router = express.Router();



router.get("/", (req, res) => {
  res.json(users)
})

//userları getirme
router.get("/:id", (req, res) => {
  res.json(users.filter((user) => (
    user.id === parseInt(req.params.id)
  )))
})

//user ekleme
router.post('/', (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser)
  res.json(users)
})

//user güncelleme
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  // console.log(req.body)
  const user = users.find((user) => user.id === parseInt(id));
  user.name = name ? name : user.name;
  user.email = email ? email : user.email;
  res.json({ msg: "User updated", user });
});


//user silme
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.filter((user) => user.id !== parseInt(id));
  res.json({ msg: "User deleted", user });
});




module.exports = router

