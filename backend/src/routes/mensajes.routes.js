const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Mensajes
 *   description: Chat entre usuarios (polling)
 */

/**
 * @swagger
 * /api/mensajes:
 *   post:
 *     summary: Enviar mensaje en un trueque
 *     tags: [Mensajes]
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
 *               - contenido
 *             properties:
 *               truequeId:
 *                 type: integer
 *               contenido:
 *                 type: string
 *                 example: "Hola, nos vemos mañana en Plaza Las Américas?"
 *     responses:
 *       201:
 *         description: Mensaje enviado
 *       403:
 *         description: No participas en este trueque
 */
router.post("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/mensajes/trueque/{truequeId}:
 *   get:
 *     summary: Obtener mensajes de un trueque
 *     tags: [Mensajes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: truequeId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de mensajes ordenados por fecha
 *       403:
 *         description: No participas en este trueque
 */
router.get("/trueque/:truequeId", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/mensajes/trueque/{truequeId}/leer:
 *   patch:
 *     summary: Marcar mensajes como leídos
 *     tags: [Mensajes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: truequeId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mensajes marcados como leídos
 */
router.patch("/trueque/:truequeId/leer", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;