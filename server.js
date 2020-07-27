var express = require("express");
var path = require("path");
const {
    table
} = require("console");

var app = express();
var PORT = 8080;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'))