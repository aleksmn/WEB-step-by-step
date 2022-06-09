const express = require("express");
const path = require("path");
const port = process.env.PORT || 5050;

const app = express();

app.use("/static", express.static(path.resolve(__dirname + "/static")));

app.use("/images", express.static(path.resolve(__dirname + "/static/images")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.listen(port, () =>
  console.log(`Сервер работает... Порт: http://localhost:${port}`)
);
