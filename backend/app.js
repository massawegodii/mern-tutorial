require('dotenv').config(); 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

// Middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);

// Routers
const productRouter = require('./routers/products');
const categoriesRoutes = require('./routers/categories');
const usersRoutes = require('./routers/users');

// API base URL
const api = process.env.API_URL;
app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);

// Database connection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop_db',
})
.then(() => console.log('Database connection is ready ...'))
.catch((error) => console.error('Database connection error:', error));

// Server setup
app.listen(3000, () => {
    console.log(`API URL: ${api}`);
    console.log("Server is running at http://localhost:3000/");
});
