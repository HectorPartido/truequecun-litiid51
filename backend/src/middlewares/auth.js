const jwt = require("jsonwebtoken");
const prisma = require("../config/database");

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Token de autenticación requerido",
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                nombre: true,
                email: true,
                rol: true,
                verificado: true,
            },
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token expirado, inicia sesión nuevamente",
            });
        }
        return res.status(401).json({
            success: false,
            message: "Token inválido",
        });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.rol !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Acceso denegado. Se requiere rol de administrador.",
        });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };