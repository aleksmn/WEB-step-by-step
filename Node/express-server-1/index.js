const express = require("express");
const app = express();
const port = 3050;

const path = require("path");


app.use("/static", express.static(path.resolve(__dirname + "/static")));



app.get("/", (req, res) => {

  res.sendFile(__dirname + "/index.html");

});

app.get("/contacts", (req, res) => {
  res.sendFile(__dirname + "/contacts.html")
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html")
});

app.listen(port, () => {
  
  console.log(`Example app listening http://localhost:${port}`);
});
