const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Categorías de publicaciones
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Listar todas las categorías activas
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías
 */
router.get("/", (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;