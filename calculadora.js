let x = 10;
let y = 2;
let operador = '+';

// Verifica x
if (typeof x !== 'number') {
  console.log("Erro: x deve ser um número válido.");
} 
else if (isNaN(x)) {
  console.log("Erro: x deve ser um número válido.");
} 

// Verifica y
else if (typeof y !== 'number') {
  console.log("Erro: y deve ser um número válido.");
} 
else if (isNaN(y)) {
  console.log("Erro: y deve ser um número válido.");
} 

// Operações
else if (operador === '+') {
  console.log(`A soma de ${x} e ${y} é ${x + y}`);
} 
else if (operador === '-') {
  console.log(`A subtração de ${x} e ${y} é ${x - y}`);
} 
else if (operador === '*') {
  console.log(`A multiplicação de ${x} e ${y} é ${x * y}`);
} 
else if (operador === '/') {
  if (y === 0) {
    console.log("Erro: divisão por zero não é permitida.");
  } else {
    console.log(`A divisão de ${x} e ${y} é ${x / y}`);
  }
} 

// Caso o operador não seja válido
else {
  console.log("Erro: operador inválido. Use +, -, * ou /.");
}