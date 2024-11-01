// routes/itemRoutes.js
const express = require("express");

module.exports = (itemController) => {
  const router = express.Router();

  /**
   * @swagger
   * /api/items:
   *   post:
   *     summary: Create a new item
   *     tags: [Items]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 example: "Test Item"
   *               description:
   *                 type: string
   *                 example: "This is a test item description."
   *     responses:
   *       201:
   *         description: Item created successfully
   */
  router.post("/", itemController.createItem);

  /**
   * @swagger
   * /api/items:
   *   get:
   *     summary: Get all items
   *     tags: [Items]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Retrieved all items successfully
   */
  router.get("/", itemController.getAllItems);

  /**
   * @swagger
   * /api/items/{id}:
   *   get:
   *     summary: Get item by ID
   *     tags: [Items]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Item ID
   *     responses:
   *       200:
   *         description: Retrieved item successfully
   *       404:
   *         description: Item not found
   */
  router.get("/:id", itemController.getItemById);

  /**
   * @swagger
   * /api/items/{id}:
   *   put:
   *     summary: Update item by ID
   *     tags: [Items]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Item ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 example: "Updated Item Name"
   *               description:
   *                 type: string
   *                 example: "Updated description."
   *     responses:
   *       200:
   *         description: Item updated successfully
   *       404:
   *         description: Item not found
   */
  router.put("/:id", itemController.updateItem);

  /**
   * @swagger
   * /api/items/{id}:
   *   delete:
   *     summary: Delete item by ID
   *     tags: [Items]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Item ID
   *     responses:
   *       200:
   *         description: Item deleted successfully
   *       404:
   *         description: Item not found
   */
  router.delete("/:id", itemController.deleteItem);

  return router;
};
