const express = require("express");
const app = express();
const port = 3050;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});


app.get("/contacts", (req, res) => {
  res.send("<h1>Contact Us!</h1>");
});


app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});


app.listen(port, () => {
  
  console.log(
    'Example app listening on port http://localhost:' + port
  );
});
