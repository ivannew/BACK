require('dotenv').config(); // Carga variables de entorno

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json()); // Para poder leer JSON en el body

// Configura la conexión a la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false } // Descomenta si tienes problemas SSL
});

// Pasa el pool a las rutas para que puedan usarlo
const artistRoutes = require('./routes/artistRoutes')(pool);
const songRoutes = require('./routes/songRoutes')(pool);

app.use('/api', artistRoutes);
app.use('/api', songRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
