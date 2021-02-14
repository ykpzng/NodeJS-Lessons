module.exports = app => {
  const weather = require("../controllers/db.controller.js");
  let router = require("express").Router();

  router.post("/", weather.create); // Create a new Collection
  router.get("/", weather.findAll);  // Retrieve all Collections
  router.get("/:id", weather.findOne);  // Retrieve a single Collection with id
  router.put("/:id", weather.update);  // Update a Collection with id
  router.delete("/:id", weather.delete);  // Delete a Collection with id
  router.delete("/", weather.deleteAll);   // Delete all Collections

  app.use('/api/weather', router);
};
