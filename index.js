// Packages
const express = require('express');


// Configs
const conf = require('./configs/index')


// Routes
const routes = require('./api/routes')



// MongoDB
const mongoConnection = require('./utils/mongoDB')
mongoConnection()

// Instances
const app = express();

// MiddlewareS
app.use(express.json())
app.use(routes)
// app.use(errorHandler);

app.listen(4000, () => console.log("HI"))