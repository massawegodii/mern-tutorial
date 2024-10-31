const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/post');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');
// const testRoutes = require('./routes/tests');

const app = express();

app.use(bodyParser.json());
// make upload public to be accessed
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);
// app.use("/test", testRoutes);

module.exports = app;
