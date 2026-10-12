const { findTrack } = require('../data/tracks');

function gerarCertificado(name, technology, date = new Date()) {
  const learner = name.trim();
  if (!learner) {
    throw new Error('Informe o nome da pessoa para gerar o certificado.');
  }

  const track = findTrack(technology);
  const issueDate = date.toISOString().slice(0, 10);

  return [
    '========================================',
    'CERTIFICADO FICTÍCIO - SEM VALIDADE OFICIAL',
    '',
    `Concedido a: ${learner}`,
    `Trilha concluída: ${track.name}`,
    `Data: ${issueDate}`,
    '========================================'
  ].join('\n');
}

module.exports = { gerarCertificado };