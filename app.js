const express = require("express");
const testRoutes = require("./routes/testRoutes");
const { authorize } = require("./firebaseConfig");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/test", authorize, testRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
