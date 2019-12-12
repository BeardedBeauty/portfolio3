var express = require("express");
var path = require("path");
var app = express();
var hndlbrs = require("express-handlebars");
// const nodemailer = require('nodemailer');
var PORT = process.env.PORT || 8890;

// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: 'smtp.gmail.com',
//     auth: {
//         user: "john.w.ochs0@gmail.com",
//         pass: ""
//     }
// });

// let mailOptions = {
//     from: "?",
//     to: "john.w.ochs0@gmail.com",
//     subject: "portfolio message",
//     text: 'yeet yeet mcskeet'
// };

// transporter.sendMail(mailOptions, (err, data) => {
//     err ? console.log(err) : console.log("mailed");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));
app.engine("handlebars", hndlbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./assets/routing/htmlroutes.js")(app);

app.listen(PORT, function () {
    console.log("port: " + PORT);
});