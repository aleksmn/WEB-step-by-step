const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  // res.send("Date Calculator");
  res.sendFile(__dirname+ "/index.html");
  // console.log(__dirname);
});

app.post("/", function(req, res){
  console.log(req.body);
  let date1 = new Date(req.body.date1); 
  let date2 = new Date(req.body.date2);

  let timeDiff = date2.getTime() - date1.getTime();
  let daysDiff = timeDiff / (1000 * 3600 * 24); 

  res.send("Количество дней между датами: " + daysDiff);
});

app.listen(port, () => {
  console.log(`Date calculator app listening on port ${port}`);
});
