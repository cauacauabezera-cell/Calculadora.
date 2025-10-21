const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;
const multiplicacao = (a, b) => a * b;

const validador = ({ primeiro, segundo, operacao }) => {
  const operadoresValidos = ["+", "-", "*", "/"];

  if (isNaN(primeiro) || isNaN(segundo)) {
    console.log("Valores precisam ser numéricos");
    return false;
  }

  if (!operadoresValidos.includes(operacao)) {
    console.log("Operador inválido");
    return false;
  }

  if (operacao === "/" && segundo === 0) {
    console.log("Não pode divisão por zero");
    return false;
  }

  return true;
};

const calculadora = ({ primeiro, segundo, operacao }) => {
  if (!validador({ primeiro, segundo, operacao })) return;

  switch (operacao) {
    case "+": return soma(primeiro, segundo);
    case "-": return subtracao(primeiro, segundo);
    case "*": return multiplicacao(primeiro, segundo);
    case "/": return divisao(primeiro, segundo);
  }
};

const resultado1 = calculadora({ primeiro: 5, segundo: 10, operacao: "7" });
if (resultado1 !== undefined) console.log(resultado1);

const resultado2 = calculadora({ primeiro: 3, segundo: 5, operacao: "+" });
if (resultado2 !== undefined) console.log(resultado2);