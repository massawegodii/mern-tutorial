
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.options('*', cors())

// API_URL loading dotenv
require('dotenv/config'); 

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Routers
const productRouter = require('./routers/products');
const categoriesRoutes = require('./routers/categories');
// const usersRoutes = require('./routes/users');
// const ordersRoutes = require('./routes/orders');


const api = process.env.API_URL;

app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoriesRoutes);
// app.use(`${api}/users`, usersRoutes);
// app.use(`${api}/orders`, ordersRoutes);


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


// Start server
app.listen(3000, () => {
    console.log(`API URL: ${api}`);
    console.log("Server is running at http://localhost:3000/");
});
