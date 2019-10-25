var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8890;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("app"));
app.use(express.static(path.join(__dirname, './')));
// app.use(express.static(path.join(__dirname, 'style/')));
// app.use(express.static(path.join(__dirname, 'assets/')));

require("./assets/routing/htmlroutes.js")(app);

app.listen(PORT, function () {
    console.log("port: " + PORT);
});