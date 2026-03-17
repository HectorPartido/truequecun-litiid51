const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Reportes
 *   description: Reportes de usuarios y publicaciones
 */

/**
 * @swagger
 * /api/reportes:
 *   post:
 *     summary: Crear un reporte
 *     tags: [Reportes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo
 *               - motivo
 *             properties:
 *               tipo:
 *                 type: string
 *                 enum: [usuario, publicacion]
 *               usuarioReportadoId:
 *                 type: integer
 *               publicacionReportadaId:
 *                 type: integer
 *               motivo:
 *                 type: string
 *                 example: "Publicación con información falsa"
 *     responses:
 *       201:
 *         description: Reporte creado
 *       400:
 *         description: Datos inválidos
 */
router.post("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;