// Enciende el servidor
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`TruequeCun API corriendo en http://localhost:${PORT}`);
    console.log(`Swagger docs en http://localhost:${PORT}/api-docs`);
    console.log(`Entorno: ${process.env.NODE_ENV || "development"}`);
});