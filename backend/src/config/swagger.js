const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TruequeCun API",
            version: "1.0.0",
            description: "API REST para la Plataforma de Trueque Comunitario de Cancún.",
            contact: {
                name: "Equipo TruequeCun",
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Servidor de desarrollo",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;