const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/section_1", (req, res) => {
    res.sendFile(__dirname + "/public/section_1.html");
});

app.get("/section_2", (req, res) => {
    res.sendFile(__dirname + "/public/section_2.html");
});

app.get("/section_3", (req, res) => {
    res.sendFile(__dirname + "/public/section_3.html");
});

app.get("/section_4", (req, res) => {
    res.sendFile(__dirname + "/public/section_4.html");
});

app.get("/section_5", (req, res) => {
    res.sendFile(__dirname + "/public/section_5.html");
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", Number(port));
});