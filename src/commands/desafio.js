const { findTrack, normalize } = require('../data/tracks');

const levels = new Map([
  ['iniciante', 'iniciante'],
  ['beginner', 'iniciante'],
  ['intermediario', 'intermediario'],
  ['intermediate', 'intermediario'],
  ['avancado', 'avancado'],
  ['advanced', 'avancado']
]);

function gerarDesafio(technology, level) {
  const track = findTrack(technology);
  const normalizedLevel = levels.get(normalize(level || ''));

  if (!normalizedLevel) {
    throw new Error('Nível inválido. Use iniciante, intermediário ou avançado.');
  }

  return [`Desafio ${normalizedLevel} | ${track.name}`, track.challenges[normalizedLevel]].join('\n');
}

module.exports = { gerarDesafio };