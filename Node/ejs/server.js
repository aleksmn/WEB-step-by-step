const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    let users = [
        {
            name: 'Александр',
            designation: "учитель информатики"
        },
        {
            name: 'Дмитрий',
            designation: "ученик"
        },
        {
            name: 'Мария',
            designation: "учитель физики"
        },
        {
            name: 'Владислав',
            designation: "ученик"
        },
        {
            name: 'Георгий',
            designation: "ученик"
        }
    ];
 
    let subheading = "Список пользователей нашего сайта"

    res.render("index", {
        users,
        subheading
    });

});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000 ");
});