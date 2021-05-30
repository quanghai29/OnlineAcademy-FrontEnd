const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('express-async-errors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

// middleware api
require('./middlewares/routes.mdw')(app);

// middleware error
require('./middlewares/error.mdw')(app);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`OnlineAcademy-chatbot backend is runing at ${process.env.HOST_NAME}:${PORT}`);
});
