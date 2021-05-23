const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('express-async-errors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.json({
        message: 'Hello from Sakila API'
    })
})

app.use(function (req, res, next) {
    res.status(404).json({
        error_message: 'Endpoint not found'
    })
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error_message: 'Something broke!'
    })
})

const PORT =  process.env.PORT;
app.listen(PORT, function () {
    console.log(`OnlineAcademy-chatbot backend is runing at ${process.env.HOST_NAME}:${PORT}`);
})