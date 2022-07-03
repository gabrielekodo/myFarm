const express = require("express");

const router = express.Router();

const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login"); //authorization
const mongoose = require("mongoose");

const Manager = require("../models/Manager");

//restricted /dashboard
router.get("/", async (req, res) => {
  try {
    let managerDetails = await Manager.find();
    console.log(managerDetails);
    res.render("all_managers", {
      users: managerDetails,
      title: "Manager Details",
    });
  } catch (error) {
    console.log(error);
    res.send("Failed to retrieve manager details.....");
  }
});

router.post("/delete", async (req, res) => {
   try {
     await Manager.deleteOne({ _id: req.body.id });
     res.redirect("back");
   } catch (err) {
     res.status(400).send("Unable to delete item in the database");
   }
});





module.exports = router;
