const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Trueques
 *   description: Gestión de trueques acordados
 */

/**
 * @swagger
 * /api/trueques:
 *   get:
 *     summary: Listar mis trueques
 *     tags: [Trueques]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de trueques donde participo
 */
router.get("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/trueques/{id}:
 *   get:
 *     summary: Ver detalle de un trueque
 *     tags: [Trueques]
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
 *         description: Detalle del trueque con publicación, puja y usuarios
 *       403:
 *         description: No participas en este trueque
 */
router.get("/:id", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/trueques/{id}/completar:
 *   patch:
 *     summary: Confirmar que el trueque se realizó
 *     tags: [Trueques]
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
 *         description: Trueque marcado como completado
 */
router.patch("/:id/completar", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/trueques/{id}/cancelar:
 *   patch:
 *     summary: Cancelar un trueque
 *     tags: [Trueques]
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
 *         description: Trueque cancelado
 */
router.patch("/:id/cancelar", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/trueques/{id}/disputa:
 *   patch:
 *     summary: Marcar trueque en disputa
 *     tags: [Trueques]
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
 *         description: Trueque marcado en disputa
 */
router.patch("/:id/disputa", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;