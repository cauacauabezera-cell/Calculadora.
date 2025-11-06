const { isNumber, hasNoCarachter } = require('./validation');

const avaliarFormula = (formula) => {
  try {
    const clean = formula.replace(/\s+/g, '').replace(/\^/g, '**');
    if (!isNumber.test(formula.replace(/\s+/g, '')))
      return "Fórmula inválida. Use apenas números, operadores (+, -, *, /, ^) e parênteses.";
    if (hasNoCarachter.test(clean))
      return "Não pode divisão por zero";

    const resultado = Function('"use strict"; return (' + clean + ')')();
    if (!isFinite(resultado)) {
      return resultado === Infinity || resultado === -Infinity 
        ? "Resultado muito grande"
        : "Resultado inválido";
    }
    return resultado;
  } catch {
    return "Erro ao processar a fórmula. Verifique a sintaxe.";
  }
};

module.exports = { avaliarFormula };
