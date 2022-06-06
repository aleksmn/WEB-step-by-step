const express = require("express");
const path = require("path");
const port = 5555;


const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});


app.listen(port, () => console.log(`Сервер работает... Порт: ${port}`))