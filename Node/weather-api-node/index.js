const express = require("express");
const https = require("https");
const port = 5000;
const app = express();

require("dotenv").config();


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {

  res.sendFile(__dirname + "/index.html");
})

app.get("/weather", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid="+ process.env.WEATHER_API_KEY +"&q=moscow&units=metric&lang=ru";

  https.get(url, function (response) {
    console.log(response.statusCode, response.statusMessage); /// -> 200 OK

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const { name } = weatherData;
      const { temp, humidity } = weatherData.main;
      const { description } = weatherData.weather[0];
      const { icon } = weatherData.weather[0];
      const iconUrl = "https://openweathermap.org/img/wn/" + icon + ".png";
      const { speed } = weatherData.wind;

      // res.send(`
      //       <h3>Погода в Москве:${temp} °С, ${description}.</h3>
      //       <img src=${iconUrl}>`);

      res.send({ name, iconUrl, description, temp, humidity, speed });
        
    });
  });

  // res.send("Server is up!")
});

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});
