# Geo Explorer

Geo Explorer é uma aplicação de linha de comando (CLI) para explorar trilhas de aprendizagem fictícias. Ela permite consultar um plano de estudos, receber um desafio de programação por tecnologia e nível e gerar um certificado demonstrativo. O certificado é fictício e não tem validade oficial.

## Requisitos

- Node.js 18 ou superior
- npm, incluído na instalação do Node.js

O projeto não depende de pacotes externos.

## Executar

Abra um terminal na pasta do projeto e rode um dos comandos:

```sh
npm start -- trilha javascript
npm start -- desafio python intermediário
npm start -- certificado "Ana Silva" typescript
```

Os resultados aparecem no terminal. Este projeto é uma CLI e não inicia um site nem um servidor para navegador.

### Comandos disponíveis

| Comando | Uso | Resultado |
| --- | --- | --- |
| `trilha` | `npm start -- trilha <tecnologia>` | Exibe os módulos da trilha em ordem. |
| `desafio` | `npm start -- desafio <tecnologia> <nível>` | Exibe o desafio correspondente à tecnologia e ao nível. |
| `certificado` | `npm start -- certificado "<nome completo>" <tecnologia>` | Gera um certificado de conclusão fictício com a data atual. |

Tecnologias disponíveis: JavaScript (`javascript`, `js`, `node`), Python (`python`, `py`) e TypeScript (`typescript`, `ts`). Os nomes não diferenciam maiúsculas de minúsculas.

Níveis de desafio: `iniciante`, `intermediário` e `avançado`. Os acentos são opcionais; também são aceitos `beginner`, `intermediate` e `advanced`.

Se a tecnologia ou o nível não existir, ou se os argumentos estiverem incompletos, o programa informa o erro e mostra as opções de uso.

## Como funciona

1. `src/index.js` lê os argumentos após `npm start --` e encaminha a execução para o comando solicitado.
2. Os módulos em `src/commands/` validam os dados e formatam o resultado de trilha, desafio ou certificado.
3. `src/data/tracks.json` contém o catálogo fictício. Cada tecnologia define aliases, módulos da trilha e um desafio por nível.
4. `src/data/tracks.js` carrega o catálogo, normaliza entradas (incluindo acentos) e localiza a tecnologia solicitada.

Para adicionar uma tecnologia, inclua no catálogo um identificador, nome, aliases, módulos e desafios para os três níveis.

## Testes

Execute a suíte automatizada com o test runner nativo do Node.js:

```sh
npm test
```

Os testes cobrem consulta por nome e alias, desafios com nível acentuado, entradas inválidas, certificado fictício e encaminhamento dos três comandos.

## Melhorias realizadas

- Separei o catálogo fictício da lógica dos comandos, facilitando adicionar tecnologias, módulos e desafios.
- Incluí aliases para as tecnologias e normalização de acentos e maiúsculas/minúsculas na busca.
- Validei tecnologias, níveis e argumentos, com mensagens de erro que orientam o uso.
- Deixei explícito que o certificado é fictício e não tem validade oficial.
- Adicionei testes automatizados com o test runner nativo do Node.js, sem dependências externas.

## Aprendizados

Aprendi que prompts claros e bem elaborados podem facilitar o uso da IA para estruturar um sistema desde o início, com organização, facilidade de manutenção e espaço para crescer em escala. Também aprendi que é importante revisar as sugestões da IA, testar o comportamento e aplicar boas práticas para manter a solução confiável e simples de evoluir.

## Estrutura do projeto

```text
src/
	commands/       Implementação dos comandos
	data/           Catálogo e busca das trilhas
	index.js        Ponto de entrada da CLI
test/             Testes automatizados
README.md         Documentação do projeto
package.json      Scripts e requisitos do Node.js
```