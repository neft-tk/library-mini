const express = require('express');
const path = require('path');
const fs = require('fs');
const bookRoute = require('./routes/bookRoute');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Routes to our bookRoute script
app.use("/books", bookRoute);

// GET reuquest to /, serves html page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
  });

// catch all for all unhandled routes
app.get("*", (req, res) => {
    res.send("not a valid route! try /books or /books/:id!");
  });
  
//tells my server where to looks for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});  