const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Date Calculator");
  res.sendFile(__dirname+ "/index.html")
  // console.log(__dirname);
});

app.post("/", function(req, res){
  res.send("Thanks for posting that!")
})

app.listen(port, () => {
  console.log(`Date calculator app listening on port ${port}`);
});
