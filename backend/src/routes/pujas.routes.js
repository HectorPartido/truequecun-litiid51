const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Pujas
 *   description: Sistema de pujas/ofertas sobre publicaciones
 */

/**
 * @swagger
 * /api/pujas:
 *   post:
 *     summary: Crear una puja sobre una publicación
 *     tags: [Pujas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - publicacionId
 *               - items
 *             properties:
 *               publicacionId:
 *                 type: integer
 *                 example: 1
 *               mensaje:
 *                 type: string
 *                 example: "Me interesa tu guitarra, te ofrezco esto"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     tipoOferta:
 *                       type: string
 *                       enum: [publicacion_existente, servicio_nuevo]
 *                     publicacionOfrecidaId:
 *                       type: integer
 *                     descripcionServicio:
 *                       type: string
 *     responses:
 *       201:
 *         description: Puja creada
 *       400:
 *         description: No puedes pujar en tu propia publicación
 */
router.post("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/pujas/mis-pujas:
 *   get:
 *     summary: Listar las pujas que yo he hecho
 *     tags: [Pujas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de mis pujas con estado
 */
router.get("/mis-pujas", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/pujas/publicacion/{publicacionId}:
 *   get:
 *     summary: Ver todas las pujas de una publicación (solo el dueño)
 *     tags: [Pujas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: publicacionId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de pujas recibidas
 *       403:
 *         description: No es tu publicación
 */
router.get("/publicacion/:publicacionId", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/pujas/{id}:
 *   get:
 *     summary: Ver detalle de una puja
 *     tags: [Pujas]
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
 *         description: Detalle de la puja con sus items
 */
router.get("/:id", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/pujas/{id}/ganadora:
 *   patch:
 *     summary: Seleccionar una puja como ganadora
 *     tags: [Pujas]
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
 *         description: Puja marcada como ganadora, trueque creado
 *       403:
 *         description: No es tu publicación
 */
router.patch("/:id/ganadora", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/pujas/{id}/cancelar:
 *   patch:
 *     summary: Cancelar mi puja
 *     tags: [Pujas]
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
 *         description: Puja cancelada
 *       403:
 *         description: No es tu puja
 */
router.patch("/:id/cancelar", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;