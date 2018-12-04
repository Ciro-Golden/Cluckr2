const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();
// const clucksRouter = require("./routes/clucks");

// View Engine
app.set("view engine", "ejs");

// access to public stylessheets
app.use(express.static(path.join(__dirname, "public")));

// Bodyparsers
app.use(bodyParser.urlencoded({ extended: true }));

// cookies parsers
app.use(cookieParser());

// the router
// app.use("/", clucksRouter);







app.get("/hello-world", (req, res) => {
    res.send("Hello, World");
});




app.get("/login", (req, res) => {
    res.render("login");
});

















const DOMAIN = 'localhost';
const PORT = '4220';
app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`);
});