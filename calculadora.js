function calcular(numero1, numero2, operador) {
  // Verifica numero1
  if (typeof numero1 !== 'number' || isNaN(numero1)) {
    console.log("Erro: o primeiro número deve ser válido.");
    return;
  }

  // Verifica numero2
  if (typeof numero2 !== 'number' || isNaN(numero2)) {
    console.log("Erro: o segundo número deve ser válido.");
    return;
  }

  // Operações
  if (operador === '+') {
    console.log(`A soma de ${numero1} e ${numero2} é ${numero1 + numero2}`);
  } 
  else if (operador === '-') {
    console.log(`A subtração de ${numero1} e ${numero2} é ${numero1 - numero2}`);
  } 
  else if (operador === '*') {
    console.log(`A multiplicação de ${numero1} e ${numero2} é ${numero1 * numero2}`);
  } 
  else if (operador === '/') {
    if (numero2 === 0) {
      console.log("Erro: divisão por zero não é permitida.");
    } else {
      console.log(`A divisão de ${numero1} e ${numero2} é ${numero1 / numero2}`);
    }
  } 
  else {
    console.log("Erro: operador inválido. Use +, -, * ou /.");
  }
}