const express = require('express');
const path = require('path');

// Crea la aplicación Express
const app = express();

// Sirve archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
