// app.js
const express = require("express");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();

// Firebase Admin initialization
admin.initializeApp({
  credential: admin.credential.cert(require(process.env.SDK_PATH)),
});

const db = admin.firestore();

// Import Repository, Service, Controller, and Route Layers
const itemRepository = require("./repositories/itemRepository")(db);
const itemService = require("./services/itemService")(itemRepository);
const itemController = require("./controllers/itemController")(itemService); // Initialize with itemService
const itemRoutes = require("./routes/itemRoutes")(itemController); // Pass initialized controller

// Middleware to verify Firebase token
async function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(403).json({ error: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ error: "Unauthorized" });
  }
}

// Express app setup
const app = express();
app.use(express.json());

// Swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
// Routes
app.use("/api/items", verifyToken, itemRoutes);

module.exports = app;
