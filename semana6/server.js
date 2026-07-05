const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <h1>Semana 6 ✅</h1>
    <p>Servidor Express funcionando</p>
    <a href="/preguntas">Ver preguntas</a>
  `);
});

// Ruta de preguntas
app.get('/preguntas', (req, res) => {
  res.sendFile(__dirname + '/preguntas.txt');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
