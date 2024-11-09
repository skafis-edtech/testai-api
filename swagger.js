const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"]; // Change this to your main Express entry point file

const doc = {
  info: {
    title: "Express API",
    description: "Automatically generated Swagger documentation",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app"); // Your main Express server file
});
