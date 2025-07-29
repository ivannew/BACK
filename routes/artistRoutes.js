const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  router.get('/artists', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM artists');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener artistas' });
    }
  });

  // Más rutas...

  return router;
};
