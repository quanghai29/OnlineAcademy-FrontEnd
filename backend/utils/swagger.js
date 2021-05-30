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
      },
    ],
  },
  apis: ["./routes/*.route.js"],
};
const openapiSpecification = swaggerJsdoc(options);

module.exports = {
    openapiSpecification
};
