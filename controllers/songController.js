const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSongs(req, res) {
  try {
    const songs = await prisma.song.findMany();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getSongs };
