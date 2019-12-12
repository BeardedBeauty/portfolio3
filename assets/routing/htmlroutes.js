var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/music", function (req, res) {
        res.render("music");
    });

    app.get("/portfolio", function (req, res) {
        res.render("portfolio");
    });

    app.get("/travelogue", function (req, res) {
        res.render("travelogue");
    });
}