var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
        // res.sendFile(path.join(__dirname, "../../views/layouts/main.handlebars"));
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
    // app.get("/survey", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/survey.html"));
    // });

    // app.get("/answer", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/answer.html"));
    // });
}