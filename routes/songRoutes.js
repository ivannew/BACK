const express = require('express');

module.exports = (pool) => {
  const router = express.Router();

  router.get('/songs', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM songs');
      res.json(result.rows);
    } catch (error) {
      console.error('Error al obtener canciones:', error);
      res.status(500).json({ error: 'Error al obtener canciones' });
    }
  });

  return router;
};
