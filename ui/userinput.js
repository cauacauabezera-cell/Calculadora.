const readline = require('readline');
const { avaliarFormula } = require('../core/calculadora');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`=== CALCULADORA ===
Digite uma fórmula matemática (ex: 5 + (3 * (2 + 1)) - 4 / 2)
Use +, -, *, / e parênteses ()
Digite 'sair' ou 'exit' para encerrar
`);

const processarEntrada = () => {
  rl.question('Digite a fórmula: ', (input) => {
    const trimmed = input.trim().toLowerCase();

    if (["sair", "exit"].includes(trimmed)) {
      console.log("Encerrando calculadora. Até logo!");
      rl.close();
      return;
    }

    if (!trimmed) {
      console.log("Por favor, digite uma fórmula válida.\n");
    } else {
      const resultado = avaliarFormula(input);
      console.log(typeof resultado === 'number'
        ? `Resultado: ${resultado}\n`
        : `Erro: ${resultado}\n`);
    }

    processarEntrada();
  });
};

processarEntrada();
