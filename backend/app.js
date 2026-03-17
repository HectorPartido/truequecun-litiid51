// Configuración de Express
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

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