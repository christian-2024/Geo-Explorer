const test = require('node:test');
const assert = require('node:assert/strict');
const { consultarTrilha } = require('../src/commands/trilha');
const { gerarDesafio } = require('../src/commands/desafio');
const { gerarCertificado } = require('../src/commands/certificado');
const { executar } = require('../src');

test('consulta a trilha pelo nome ou alias da tecnologia', () => {
  assert.match(consultarTrilha('js'), /Trilha de estudos: JavaScript/);
  assert.match(consultarTrilha('JavaScript'), /Projeto final/);
});

test('gera desafio e aceita nível com acento', () => {
  assert.match(gerarDesafio('python', 'intermediário'), /Desafio intermediario \| Python/);
});

test('rejeita tecnologia e nível desconhecidos', () => {
  assert.throws(() => consultarTrilha('ruby'), /Tecnologia não encontrada/);
  assert.throws(() => gerarDesafio('python', 'especialista'), /Nível inválido/);
});

test('gera certificado claramente fictício', () => {
  const date = new Date('2026-10-11T12:00:00.000Z');
  const certificate = gerarCertificado('Ana Silva', 'ts', date);

  assert.match(certificate, /CERTIFICADO FICTÍCIO - SEM VALIDADE OFICIAL/);
  assert.match(certificate, /Concedido a: Ana Silva/);
  assert.match(certificate, /Trilha concluída: TypeScript/);
  assert.match(certificate, /Data: 2026-10-11/);
});

test('despacha os três comandos pela interface principal', () => {
  assert.match(executar(['trilha', 'python']), /Trilha de estudos: Python/);
  assert.match(executar(['desafio', 'typescript', 'avancado']), /Desafio avancado/);
  assert.match(executar(['certificado', 'João', 'Silva', 'javascript']), /Concedido a: João Silva/);
  assert.throws(() => executar([]), /Uso:/);
});