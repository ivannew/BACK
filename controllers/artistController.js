const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getArtists = async (req, res) => {
  try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    console.error('Error al obtener artistas:', error);
    res.status(500).json([]);
  }
};

module.exports = { getArtists };
