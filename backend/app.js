// Load environment variables first
require('dotenv/config'); 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Use API_URL after loading dotenv
const api = process.env.API_URL; 

// Database connection
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'eshop_db',
})
.then(() => {
    console.log('Database connection is ready ....')
})  
.catch((error) => {
    console.log(error);
})

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Product schema and model
const productSchema = new Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        require: true
    }
});

const Product = mongoose.model('product', productSchema);

// Routes
//GET request
app.get(`${api}/products`, async (req, res) => {
    const productList = await Product.find();
    if(!productList) {
        res.status(500).json({
            success: false
        })
    }
    res.send(productList);  
});

//POST Request
app.post(`${api}/products`, (req, res) => {
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

// Start server
app.listen(3000, () => {
    console.log(`API URL: ${api}`);
    console.log("Server is running at http://localhost:3000/");
});
