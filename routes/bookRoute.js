const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    // console.log("hello");
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

router.post("/", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const bookArr = JSON.parse(data);
        bookArr.push(req.body);
        console.log(bookArr);
        fs.writeFile(
          "./db/books.json",
          JSON.stringify(bookArr,null,4),
          (err, data) => {
            if (err) {
              throw err;
            }
            res.send("book added!");
          }
        );
      }
    });
});

module.exports = router;