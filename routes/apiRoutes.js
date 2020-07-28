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
                res.end();
            });

        });

    });

    app.delete("/api/notes/:id", (req, res) => {
        var id = req.params.id;
        fs.readFile("./db/db.json", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }
            let newData = [];
            data = JSON.parse(data);

            data.forEach(note => {
                if (note.id != id) {
                    JSON.stringify(note);
                    newData.push(note)
                } else {
                    console.log("matches and skipped @" + note.id)
                }

            });
            newData = JSON.stringify(newData);
            fs.writeFile("./db/db.json", newData, function (error) {
                if (error) {
                    return console.log("error! " + err)
                }
                res.end();
            })

        });
        res.end;
    })
};