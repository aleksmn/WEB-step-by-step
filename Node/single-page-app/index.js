const express = require("express");
// const path = require("path");
const port = 5000;


const app = express();

// app.use("/static", express.static(path.resolve(__dirname + "/static")));
app.use("/static", express.static(__dirname + "/static"));


app.get("/*", (req, res) => {
  // res.sendFile(path.resolve(__dirname + "/index.html"));
  res.sendFile(__dirname + "/index.html");
});


app.listen(port, () =>
  console.log(`Сервер работает... Порт: http://localhost:${port}`)
);