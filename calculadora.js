const readline = require('readline');

// Avaliação fórmula
const avaliarFormula = (formula) => {
  try {
    const clean = formula.replace(/\s+/g, '');
    if (!/^[0-9+\-*/().]+$/.test(clean))
      return "Fórmula inválida. Use apenas números e operadores (+, -, *, /)";
    if (/\/\s*0(?!\d)/g.test(clean))
      return "Não pode divisão por zero";

    const resultado = Function('"use strict"; return (' + clean + ')')();
    return isFinite(resultado) ? resultado : "Resultado inválido";
  } catch {
    return "Erro ao processar a fórmula. Verifique a sintaxe.";
  }
};

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// introdução
console.log(`=== CALCULADORA ===
Digite uma fórmula matemática (ex: 5 + 3 * 2 - 8 / 4)
Use +, -, *, / para operações
Digite 'sair' ou 'exit' para encerrar
`);

// Processa entrada do usuário
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
