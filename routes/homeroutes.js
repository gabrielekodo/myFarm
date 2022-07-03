const express = require("express");

const router = express.Router();

const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login"); //authorization
const mongoose = require("mongoose");
// const Registration = require("../models/Registration");
// const Manager = require("../models/Manager");

//restricted /dashboard
router.get("/dashboard", (req, res) => {
  res.render("farm_dashboard", {
    title: "Farm Manager Dashboard",
  });
});

// Route to Log out
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    console.log(req.session);
    res.redirect("/login");
  });
});

module.exports = router;
