const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Calificaciones
 *   description: Calificaciones y reseñas post-trueque
 */

/**
 * @swagger
 * /api/calificaciones:
 *   post:
 *     summary: Calificar al otro usuario después del trueque
 *     tags: [Calificaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - truequeId
 *               - calificadoId
 *               - estrellas
 *             properties:
 *               truequeId:
 *                 type: integer
 *               calificadoId:
 *                 type: integer
 *               estrellas:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comentario:
 *                 type: string
 *                 example: "Excelente trato, muy puntual"
 *     responses:
 *       201:
 *         description: Calificación creada
 *       400:
 *         description: Ya calificaste este trueque
 */
router.post("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/calificaciones/usuario/{usuarioId}:
 *   get:
 *     summary: Ver calificaciones de un usuario
 *     tags: [Calificaciones]
 *     parameters:
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de calificaciones del usuario
 */
router.get("/usuario/:usuarioId", (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;