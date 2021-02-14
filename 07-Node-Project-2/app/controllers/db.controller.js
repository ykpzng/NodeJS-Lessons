const db = require("../models");
const Collection = db.models;



exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Collection
  const weather = new Collection({
    isRainy: req.body.isRainy,
    picture: req.body.pictures,
    temperature: req.body.temperature,
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  });

  // Save Collection in the database
  weather
    .save(weather)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Collection."
      });
    });
};

exports.findAll = (req, res) => {
  const temperature = req.query.temperature;
  let condition = temperature ? { temperature: { $regex: new RegExp(temperature), $options: "i" } } : {};

  Collection.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sales."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Collection.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Collection with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Collection with id=" + id });
    });
};


exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  Collection.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Collection with id=${id}. Maybe Collection was not found!`
        });
      } else res.send({ message: "Collection was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Collection with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Collection.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Collection with id=${id}. Maybe Collection was not found!`
        });
      } else {
        res.send({
          message: "Collection was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Collection with id=" + id
      });
    });
};



exports.deleteAll = (req, res) => {
  Collection.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Collections were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sales."
      });
    });
};
