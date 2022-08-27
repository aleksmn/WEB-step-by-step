const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Date Calculator");
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname);
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  
  let date1 = new Date(req.body.date1);
  let date2 = new Date(req.body.date2);

  let timeDiff = date2.getTime() - date1.getTime();
  let daysDiff = timeDiff / (1000 * 3600 * 24);

  // if (isNaN(daysDiff)) {
  //   res.send("Неверный ввод данных");
  //   return
  // } 

  res.send("Количество дней между датами: " + daysDiff);

});

app.listen(port, () => {
  console.log(`Date calculator app listening on http://localhost:${port}`);
});
