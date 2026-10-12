const { findTrack } = require('../data/tracks');

function consultarTrilha(technology) {
  const track = findTrack(technology);
  const modules = track.modules.map((module, index) => `${index + 1}. ${module}`);

  return [`Trilha de estudos: ${track.name}`, ...modules].join('\n');
}

module.exports = { consultarTrilha };