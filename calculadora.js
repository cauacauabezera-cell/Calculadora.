// Objetos.
const operadores = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => {
    if (b === 0) return null;
    return a / b;
  }
};

const mensagens = {
  erroNumero1: "Erro: o primeiro número deve ser válido.",
  erroNumero2: "Erro: o segundo número deve ser válido.",
  erroOperador: "Erro: operador inválido. Use +, -, * ou /.",
  erroDivisaoPorZero: "Erro: divisão por zero não é permitida."
};

// Objeto com os números do usuário.
const numeros = {
  primeiro: 10,
  segundo: 2
};

// Operador escolhido pelo usuário.
let operadorEscolhido = '+';

// Validação dos números / operador.
if (isNaN(numeros.primeiro)) {
  console.log(mensagens.erroNumero1);

} else if (isNaN(numeros.segundo)) {
  console.log(mensagens.erroNumero2);

} else if (!operadores[operadorEscolhido]) {
  console.log(mensagens.erroOperador);
  
} else {
  // Calcula o resultado.
  const resultado = operadores[operadorEscolhido](numeros.primeiro, numeros.segundo);

  if (resultado === null) {
    console.log(mensagens.erroDivisaoPorZero);
  } else {
    console.log(`O resultado de ${numeros.primeiro} ${operadorEscolhido} ${numeros.segundo} é ${resultado}`);
  }
}