const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

/**
 * @swagger
 * /test:
 *   post:
 *     tags: [Tests]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               specialSymbols:
 *                 type: string
 *               problems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     number:
 *                        type: string
 *                     points:
 *                        type: integer
 *                     question:
 *                        type: string
 *                     correctAnswer:
 *                        type: string
 *                     isAdditional:
 *                        type: boolean
 *     responses:
 *       201:
 *        description: Created
 */
router.post("/", testController.createItem);

/**
 * @swagger
 * /test:
 *   get:
 *     tags: [Tests]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", testController.getAllItems);

/**
 * @swagger
 * /test/{id}:
 *   get:
 *     tags: [Tests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.get("/:id", testController.getItemById);

/**
 * @swagger
 * /test/{id}:
 *   put:
 *     tags: [Tests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               specialSymbols:
 *                 type: string
 *               problems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     number:
 *                        type: string
 *                     points:
 *                        type: integer
 *                     question:
 *                        type: string
 *                     correctAnswer:
 *                        type: string
 *                     isAdditional:
 *                        type: boolean
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.put("/:id", testController.updateItem);

/**
 * @swagger
 * /test/{id}:
 *   delete:
 *     tags: [Tests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.delete("/:id", testController.deleteItem);

module.exports = router;
