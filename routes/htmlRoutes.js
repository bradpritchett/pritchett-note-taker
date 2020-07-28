const path = require("path");
var fs = require("fs");


module.exports = app => {

    app.get("/notes", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/notes.html"));

    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};