const express = require("express");

const router = express.Router();

const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login"); //authorization
const mongoose = require("mongoose");

const Manager = require("../models/Manager");

//restricted /dashboard
router.get("/",async (req, res) => {
  try {
    let managerDetails=await Manager.find()
    console.log(managerDetails);
// res.render('all_managers',{users:managerDetails,title:'Manager Details'})
res.redirect('/dashboard')
  } catch (error) {
    console.log(error);
    res.send('Failed to retrieve manager details.....')
  }
});



module.exports = router;
