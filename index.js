const express = require('express');
const cors = require('cors'); // importa cors
const app = express();

app.use(cors()); // permite todas las solicitudes de cualquier origen

// mis rutas
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

app.use('/api', artistRoutes);
app.use('/api', songRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
