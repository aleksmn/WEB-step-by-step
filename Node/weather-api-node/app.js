const express = require("express");
const https = require("https");
const port = 3000;
const app = express();



app.get("/", (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=7156236ecba085335a43e6b6cf40deeb&q=moscow&units=metric&lang=ru"
  
  https.get(url, (res) => {
    console.log(res.statusCode, res.statusMessage); /// -> 200 OK



  })

  res.send("Hello!")
});


app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});