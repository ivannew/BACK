const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getArtists(req, res) {
  try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getArtists };
