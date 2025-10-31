const { isNumber, hasNoCarachter } = require('./validation');

const avaliarFormula = (formula) => {
  try {
    const clean = formula.replace(/\s+/g, '');
    if (!isNumber.test(clean))
      return "Fórmula inválida. Use apenas números, operadores (+, -, *, /) e parênteses.";
    if (hasNoCarachter.test(clean))
      return "Não pode divisão por zero";

    const resultado = Function('"use strict"; return (' + clean + ')')();
    return isFinite(resultado) ? resultado : "Resultado inválido";
  } catch {
    return "Erro ao processar a fórmula. Verifique a sintaxe.";
  }
};

module.exports = { avaliarFormula };
