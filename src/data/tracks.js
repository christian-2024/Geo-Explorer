const tracks = require('./tracks.json');

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

function findTrack(technology) {
  const searchTerm = normalize(technology || '');
  const track = tracks.find((item) =>
    [item.id, item.name, ...item.aliases].some((alias) => normalize(alias) === searchTerm)
  );

  if (!track) {
    throw new Error(`Tecnologia não encontrada. Opções: ${tracks.map((item) => item.name).join(', ')}.`);
  }

  return track;
}

module.exports = { findTrack, normalize, tracks };