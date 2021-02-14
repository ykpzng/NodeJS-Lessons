const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
require("./app/routes/db.routes")(app);

let corsOptions = {
  origin: "http:// 127.0.0.1: 5500"   //This is for frontend
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database!");
}).catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
