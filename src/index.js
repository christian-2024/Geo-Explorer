const { consultarTrilha } = require('./commands/trilha');
const { gerarDesafio } = require('./commands/desafio');
const { gerarCertificado } = require('./commands/certificado');

function executar(args) {
  const [command, ...parameters] = args;

  if (command === 'trilha' && parameters.length === 1) {
    return consultarTrilha(parameters[0]);
  }

  if (command === 'desafio' && parameters.length === 2) {
    return gerarDesafio(parameters[0], parameters[1]);
  }

  if (command === 'certificado' && parameters.length >= 2) {
    const technology = parameters.at(-1);
    const name = parameters.slice(0, -1).join(' ');
    return gerarCertificado(name, technology);
  }

  throw new Error([
    'Uso:',
    '  npm start -- trilha <tecnologia>',
    '  npm start -- desafio <tecnologia> <nível>',
    '  npm start -- certificado <nome completo> <tecnologia>'
  ].join('\n'));
}

if (require.main === module) {
  try {
    console.log(executar(process.argv.slice(2)));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { executar };