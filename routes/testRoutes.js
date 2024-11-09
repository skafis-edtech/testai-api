const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

router.post("/", (req, res) => {
  testController.createItem(req, res);
});

router.get("/", testController.getAllItems);

router.get("/:id", testController.getItemById);

router.put("/:id", (req, res) => {
  testController.updateItem(req, res);
});

router.delete("/:id", testController.deleteItem);

module.exports = router;
