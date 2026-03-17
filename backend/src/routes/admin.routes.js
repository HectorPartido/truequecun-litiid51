const express = require("express");
const router = express.Router();
const { authMiddleware, adminMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Panel de administración
 */

/**
 * @swagger
 * /api/admin/reportes:
 *   get:
 *     summary: Listar reportes pendientes
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reportes
 *       403:
 *         description: Se requiere rol de administrador
 */
router.get("/reportes", authMiddleware, adminMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/admin/reportes/{id}:
 *   patch:
 *     summary: Resolver un reporte
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - estado
 *               - resolucion
 *             properties:
 *               estado:
 *                 type: string
 *                 enum: [revisado, resuelto]
 *               resolucion:
 *                 type: string
 *                 example: "Publicación eliminada por contenido falso"
 *     responses:
 *       200:
 *         description: Reporte actualizado
 */
router.patch("/reportes/:id", authMiddleware, adminMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/admin/usuarios:
 *   get:
 *     summary: Listar usuarios
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/usuarios", authMiddleware, adminMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/admin/usuarios/{id}/suspender:
 *   patch:
 *     summary: Suspender un usuario
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario suspendido
 */
router.patch("/usuarios/:id/suspender", authMiddleware, adminMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/admin/metricas:
 *   get:
 *     summary: Obtener métricas de la plataforma
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Estadísticas generales (usuarios activos, trueques, categorías top)
 */
router.get("/metricas", authMiddleware, adminMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;