const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de perfiles de usuario
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Ver perfil público de un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *       404:
 *         description: Usuario no encontrado
 */
router.get("/:id", (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/usuarios/perfil:
 *   put:
 *     summary: Editar mi perfil
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               bio:
 *                 type: string
 *               telefono:
 *                 type: string
 *               colonia:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil actualizado
 *       401:
 *         description: No autenticado
 */
router.put("/perfil", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/usuarios/password:
 *   put:
 *     summary: Cambiar mi contraseña
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - passwordActual
 *               - passwordNuevo
 *             properties:
 *               passwordActual:
 *                 type: string
 *               passwordNuevo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada
 *       400:
 *         description: Contraseña actual incorrecta
 */
router.put("/password", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

/**
 * @swagger
 * /api/usuarios/verificar:
 *   post:
 *     summary: Subir INE para verificación de identidad
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               ine:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: INE subida, verificación en proceso
 *       401:
 *         description: No autenticado
 */
router.post("/verificar", authMiddleware, (req, res) => {
  res.status(501).json({ message: "No implementado aún" });
});

module.exports = router;