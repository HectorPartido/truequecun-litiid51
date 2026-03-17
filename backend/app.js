// Configuración de Express
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

// Importaciones de rutas
const authRoutes = require("./src/routes/auth.routes");
const usuariosRoutes = require("./src/routes/usuarios.routes");
const categoriasRoutes = require("./src/routes/categorias.routes");
const publicacionesRoutes = require("./src/routes/publicaciones.routes");
const pujasRoutes = require("./src/routes/pujas.routes");
const truequesRoutes = require("./src/routes/trueques.routes");
const calificacionesRoutes = require("./src/routes/calificaciones.routes");
const mensajesRoutes = require("./src/routes/mensajes.routes");
const notificacionesRoutes = require("./src/routes/notificaciones.routes");
const reportesRoutes = require("./src/routes/reportes.routes");
const adminRoutes = require("./src/routes/admin.routes");

const app = express();

// Middlewares globales
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (uploads)
app.use("/uploads", express.static("uploads"));

// Documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "TruequeCun API",
}));

//Rutas
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/publicaciones", publicacionesRoutes);
app.use("/api/pujas", pujasRoutes);
app.use("/api/trueques", truequesRoutes);
app.use("/api/calificaciones", calificacionesRoutes);
app.use("/api/mensajes", mensajesRoutes);
app.use("/api/notificaciones", notificacionesRoutes);
app.use("/api/reportes", reportesRoutes);
app.use("/api/admin", adminRoutes);

// Ruta de health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "TruequeCun API funcionando correctamente",
        timestamp: new Date().toISOString(),
    });
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Error interno del servidor",
    });
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
    });
});

module.exports = app;