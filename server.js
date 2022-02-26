//express cors
const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
    res.send("hello from get request");
});
app.post("/login", (req, res) => {
    res.send("hello from post request");
});

app.listen(8000, () => {
    console.log("Api is running");
});