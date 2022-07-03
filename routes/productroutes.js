const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("productsale");
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product(req.body);
    await newProduct.save();
    res.redirect("/productlist/list");
  } catch (error) {
    console.log(error);
  }
});

router.get("/list", async (req, res) => {
  try {
    let productDetails = await Product.find();
    console.log(productDetails);
    res.render("productlist", {
      products: productDetails,
      title: "Products Details",
    });
  } catch (error) {
    console.log(error);
    res.send("Failed to retrieve product details.....");
  }
});

//
router.get("/edit/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("edit_product", {
      title: "Edit product",
      product: product,
    });
  });
});

//update submit new product
// update submit new product
router.post("/edit/:id", (req, res) => {
  let product = {};
  product.name = req.body.name;
  product.price = req.body.price;
  product.quantity = req.body.quantity;

  let query = { _id: req.params.id };

  Product.update(query, product, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      // req.flash('success', 'Product Updated');
      res.redirect("/productlist/list");
    }
  });
});

router.get("/editproduct", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("edit_product");
  });
});

module.exports = router;
