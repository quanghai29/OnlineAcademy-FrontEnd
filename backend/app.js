const express = require('express');

const app = express();


const PORT = 3000;
app.listen(PORT, function () {
    console.log(`OnlineAcademy-chatbot backend is runing at http://localhost:${PORT}`);
})