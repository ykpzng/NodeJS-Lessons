const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const connectionString = "mongodb://localhost:27017/newform";

app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "pug");

// MongoClient.connect(connectionString, (err, client) => {
//   console.log("Servere bağlandı...")
// })

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("newform");
    const quotesCollection = db.collection("mewformcollection");

    app.use(bodyParser.urlencoded({ extended: true }));

    // app.get('/', (req, res) => res.send('Hello World!'))
    //   app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))
    app.get("/", (req, res) => {
      db.collection("mewformcollection")
        .find({})
        .toArray((err, data) => {
          if (err) {
            res.send(err);
          } else {
            res.render("index", { datas: data });
          }
        });
    });

    // app.post('/post', (req, res) => res.send(console.log("write a message")))

    //   app.post('/post', (req, res) => console.log(req.body))

    app.post("/post", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    app.get("/find", (req, res) => {
      db.collection("mewformcollection")
        .find({})
        .toArray((err, data) => {
          res.send(data);
        });
    });

    //   app.get('/find', (req, res) => {
    //     db.collection('test')
    //       .find({})
    //       .toArray()
    //       .then(result => res.send(result))
    //       .catch(err => res.send(err))
    //   })

    // app.get('/find', (req, res) => {
    //     db.collection('test').find({}).toArray((err, data) => {
    //       if (err) {
    //         res.send(err)
    //       } else {
    //         res.send(data)
    //       }

    //     })
    //   })

    app.put("/post", (req, res) => {
      // console.log(req.body);
      quotesCollection
        .findOneAndUpdate(
          { name: "Selçuk" }, // write it manually from your quotes
          {
            $set: {
              name: req.body.name,
              surname: req.body.surname,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.delete("/post", (req, res) => {
      // console.log(req.body)
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          "Deleted succes";
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Example app listening on port port!`));