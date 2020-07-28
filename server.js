//Server
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'))

//Routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Sets server to listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});