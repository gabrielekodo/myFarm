const express = require("express");

const router = express.Router();

const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login"); //authorization
const mongoose = require("mongoose");

const Manager = require("../models/Manager");



//get request to /login
router.get("/", (req, res) => {
  res.render("farm_login", { title: "Login" });
});

// //post to /
router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login" }),
  
  (req, res) => {
    //giving a session to the user when successfully logged in.
    console.log(req.session);
    req.session.user = req.user;
    //redirect user to car registration page after logging in.
    res.redirect("/dashboard");
  }
);


module.exports = router;
