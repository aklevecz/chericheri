// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs");
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE Metaphors (id INTEGER PRIMARY KEY AUTOINCREMENT, metaphor TEXT)"
    );
    console.log("New table Metaphors created!");

    // insert default dreams
    db.serialize(() => {
      db.run(
        'INSERT INTO Metaphors (metaphor) VALUES ("cheri cheri feels like my pussy is purring")'
      );
    });
  } else {
    console.log('Database "Metaphors" ready to go!');
    db.each("SELECT * from Metaphors", (err, row) => {
      if (row) {
        console.log(`record: ${row.metaphor}`);
      }
    });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// endpoint to get all the dreams in the database
app.get("/get-metaphors", (request, response) => {
  db.all("SELECT * from Metaphors", (err, rows) => {
    console.log(rows);
    response.send(JSON.stringify(rows));
  });
});

// endpoint to add a dream to the database
app.post("/add-metaphor", (request, response) => {
  console.log(`add to metaphors ${request.body.metaphor}`);

  // DISALLOW_WRITE is an ENV variable that gets reset for new projects
  // so they can write to the database
  if (!process.env.DISALLOW_WRITE) {
    const cleansedMetaphor = cleanseString(request.body.metaphor);
    db.run(
      `INSERT INTO Metaphors (metaphor) VALUES (?)`,
      cleansedMetaphor,
      (error) => {
        if (error) {
          response.send({ message: "error!" });
        } else {
          response.send({ message: "success" });
        }
      }
    );
  }
});

// endpoint to clear dreams from the database
app.get("/clearDreams", (request, response) => {
  // DISALLOW_WRITE is an ENV variable that gets reset for new projects so you can write to the database
  if (!process.env.DISALLOW_WRITE) {
    db.each(
      "SELECT * from Dreams",
      (err, row) => {
        console.log("row", row);
        db.run(`DELETE FROM Dreams WHERE ID=?`, row.id, (error) => {
          if (row) {
            console.log(`deleted row ${row.id}`);
          }
        });
      },
      (err) => {
        if (err) {
          response.send({ message: "error!" });
        } else {
          response.send({ message: "success" });
        }
      }
    );
  }
});

// helper function that prevents html/css/script malice
const cleanseString = function (string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// listen for requests :)
var listener = app.listen(3333, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
