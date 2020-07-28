var fs = require("fs");
var app = require("express");

module.exports = app => {
    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }
            data = JSON.parse(data)

            res.json(data)
        });
    });

    app.post("/api/notes", (req, res) => {
        var note = req.body;
        console.log("save pushed")

        fs.readFile("./db/db.json", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }

            data = JSON.parse(data);
            data.push(note);
            data = JSON.stringify(data);


            fs.writeFile("./db/db.json", data, function (error) {
                if (error) {
                    return console.log("error! " + err)
                }
                res.json(console.log("Posted"));
            })
        });
    });

    app.delete("/api/notes/:id", (req, res) => {
        var id = req.params.id;
        console.log(id)
        fs.readFile("./db/db.json", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }

            // data.forEach(element => {
            //     if (this.id === id) {
            //         console.log("found one")
            //     }

            // });
            data = JSON.parse(data);
            data.push(note);
            data = JSON.stringify(data);


            fs.writeFile("./db/db.json", data, function (error) {
                if (error) {
                    return console.log("error! " + err)
                }
                res.json(console.log("Posted"));
            })
        });

    })
};