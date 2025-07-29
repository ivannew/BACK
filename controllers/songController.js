const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSongs = async (req, res) => {
  try {
    const songs = await prisma.song.findMany();
    res.json(songs);  // Siempre devuelve un array aunque esté vacío
  } catch (error) {
    console.error('Error al obtener canciones:', error);
    res.status(500).json([]);  // Devuelve array vacío en caso de error para evitar fallos en el front
  }
};

module.exports = { getSongs };
