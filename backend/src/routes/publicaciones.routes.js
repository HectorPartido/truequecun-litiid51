const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Publicaciones
 *   description: Gestión de publicaciones de objetos y servicios
 */

/**
 * @swagger
 * /api/publicaciones:
 *   post:
 *     summary: Crear nueva publicación
 *     tags: [Publicaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descripcion
 *               - tipo
 *               - categoriaId
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Guitarra acústica Yamaha"
 *               descripcion:
 *                 type: string
 *                 example: "Guitarra en excelente estado, incluye funda"
 *               tipo:
 *                 type: string
 *                 enum: [objeto, servicio]
 *               categoriaId:
 *                 type: integer
 *               estadoArticulo:
 *                 type: string
 *                 enum: [nuevo, seminuevo, usado]
 *               queBuscaACambio:
 *                 type: string
 *                 example: "Acepto propuestas"
 *               modalidad:
 *                 type: string
 *                 enum: [presencial, virtual]
 *               etiquetas:
 *                 type: string
 *                 example: "musica,guitarra,instrumento"
 *               imagenes:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Publicación creada
 *       400:
 *         description: Datos inválidos
 */
router.post("/", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones:
 *   get:
 *     summary: Listar publicaciones con filtros
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: integer
 *         description: Filtrar por categoría
 *       - in: query
 *         name: tipo
 *         schema:
 *           type: string
 *           enum: [objeto, servicio]
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [nuevo, seminuevo, usado]
 *       - in: query
 *         name: busqueda
 *         schema:
 *           type: string
 *         description: Búsqueda por título o descripción
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           default: 12
 *     responses:
 *       200:
 *         description: Lista de publicaciones paginada
 */
router.get("/", (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones/mis-publicaciones:
 *   get:
 *     summary: Listar mis publicaciones
 *     tags: [Publicaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de mis publicaciones
 */
router.get("/mis-publicaciones", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones/{id}:
 *   get:
 *     summary: Ver detalle de una publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de la publicación con imágenes y usuario
 *       404:
 *         description: Publicación no encontrada
 */
router.get("/:id", (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones/{id}:
 *   put:
 *     summary: Editar mi publicación
 *     tags: [Publicaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               queBuscaACambio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación actualizada
 *       403:
 *         description: No es tu publicación
 */
router.put("/:id", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones/{id}:
 *   delete:
 *     summary: Eliminar mi publicación
 *     tags: [Publicaciones]
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
 *         description: Publicación eliminada
 *       403:
 *         description: No es tu publicación
 */
router.delete("/:id", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/publicaciones/{id}/estado:
 *   patch:
 *     summary: Cambiar estado de mi publicación (activar/pausar/cerrar)
 *     tags: [Publicaciones]
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
 *             properties:
 *               estado:
 *                 type: string
 *                 enum: [activa, pausada, cerrada]
 *     responses:
 *       200:
 *         description: Estado actualizado
 */
router.patch("/:id/estado", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;