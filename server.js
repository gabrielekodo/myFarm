const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

//sessions
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

const Managerlogin = require("./models/Manager");

const homeRoutes = require("./routes/homeroutes");
const registerRoutes = require("./routes/registerroutes");
const loginRoutes = require("./routes/loginroutes");
const managerList = require("./routes/managerlist");
const productsRoutes = require("./routes/productroutes");
const productsList = require("./routes/productroutes");

const config = require("./config/database");

// models

//instatiating the express server
const server = express();

//database setup
//setting connection
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

//checking connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
  console.error(err);
});

//middlewares
// Express Middleware
// Setting view Engine.
server.set("view engine", "pug");
server.set("views", "./views");
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(expressSession);

//configuring passport
server.use(passport.initialize());
server.use(passport.session());

// Passport Local Strategy
passport.use(Managerlogin.createStrategy());
passport.serializeUser(Managerlogin.serializeUser());
passport.deserializeUser(Managerlogin.deserializeUser());

const loginchecker = (req, res, next) => {
  if (req.path != "/login" && req.path != "/register" && !req.session.user) {
    res.redirect("/login");
  }
  next();
};
server.use(loginchecker);

//routes middleware
server.use("/", homeRoutes);
server.use("/register", registerRoutes);
server.use("/login", loginRoutes);
server.use("/managers", managerList);
server.use("/products", productsRoutes);
server.use("/productlist", productsList);

// handling non existing routes
server.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
server.listen(3002, () => console.log("Listening on Port 3002"));
