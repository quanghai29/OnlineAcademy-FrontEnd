const swaggerJsdoc = require('swagger-jsdoc'); 

const options = {
  definition: { 
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `${process.env.HOST_NAME}:${process.env.PORT}`,
        description: 'Local host'
      },
      {
        url: 'https://udemall.herokuapp.com/',
        description: 'host'
      }
    ],
  },
  apis: ["./routes/*.route.js", "./routes/lecturer/*.route.js",
        "./routes/admin/*.route.js","./routes/common/*.route.js",
      "./routes/course.route.js"],
};
const openapiSpecification = swaggerJsdoc(options);

module.exports = {
    openapiSpecification
};
