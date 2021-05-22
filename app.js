const express = require('express');
var http = require("http")
const flash = require ('connect-flash');


const app = express();

// Global variables

//Routes
app.use('/', require('./routes/index'));




const PORT = process.env.PORT ||;

app.listen(PORT, console.log(`Server started on port ${PORT}`));