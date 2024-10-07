const express = require('express');
const router = express.Router();
const Product = require('../models/product')

// Routes
//GET request
router.get(`/`, async (req, res) => {
    const productList = await Product.find();
    if(!productList) {
        res.status(500).json({
            success: false
        })
    }
    res.send(productList);  
});

//POST Request
router.post(`/`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });

    product.save()
    .then((createdProduct) => {
        res.status(201).json(createdProduct);
    })
    .catch((error) => {
        res.status(500).json({
            error: error,
            success: false
        });
    });
});

module.exports = router;