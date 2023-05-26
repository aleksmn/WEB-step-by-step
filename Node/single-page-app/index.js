const express = require("express");

const port = 3080;


const app = express();

app.use("/static", express.static(__dirname + "/static"));


app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(port, () =>
  console.log(`Сервер работает... Порт: http://localhost:${port}`)
);