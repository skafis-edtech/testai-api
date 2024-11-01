const express = require("express");
const testRoutes = require("./routes/testRoutes");
const { authorize } = require("./firebaseConfig");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/test", authorize, testRoutes);

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

module.exports = app;
