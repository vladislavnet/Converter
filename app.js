//Подключаемые модули
//Веб-фреймворк
const express = require("express");
//Маршруты
const routes = require("./routes");


let app = express();
const port = 80;

// app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

//Подключаем шаблонизотор
app.set("view engine", "hbs");
//Устанавливаем всем слой-шаблон для всех страниц
app.set("view options", { layout: "layout" });

//Подключаем маршруты
app.use("/", routes);

app.listen(port, () => {
    console.log("app run on http://localhost");
});