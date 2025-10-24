const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;
const multiplicacao = (a, b) => a * b;

const validador = ({ primeiro, segundo, operacao }) => {
  const operadoresValidos = ["+", "-", "*", "/"];

  if (isNaN(primeiro) || isNaN(segundo)) {
    return "Valores precisam ser numéricos";
  }

  if (!operadoresValidos.includes(operacao)) {
    return "Operador inválido";
  }

  if (operacao === "/" && segundo === 0) {
    return "Não pode divisão por zero";
  }

  return true;
};

const calculadora = ({ primeiro, segundo, operacao }) => {
  const estaValidado = validador({ primeiro, segundo, operacao });
  if (estaValidado !== true) return estaValidado;

  switch (operacao) {
    case "+": return soma(primeiro, segundo);
    case "-": return subtracao(primeiro, segundo);
    case "*": return multiplicacao(primeiro, segundo);
    case "/": return divisao(primeiro, segundo);
  }
};

console.log(calculadora({ primeiro: 4, segundo: 6, operacao:"o"}));

console.log(calculadora({ primeiro: 7, segundo: 3, operacao:"+"}));
