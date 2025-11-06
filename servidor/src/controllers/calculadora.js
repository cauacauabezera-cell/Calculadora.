function avaliarFormula(formula) {
  try {
    const result = Function(`"use strict"; return (${formula})`)();

    if (typeof result !== "number" || !isFinite(result)) {
      return "Fórmula inválida";
    }

    return result;
  } catch {
    return "Erro ao avaliar a fórmula";
  }
}

const calcular = (req, res) => {
  const { formula } = req.body;

  if (!formula) {
    return res.status(400).json({ message: "Fórmula é obrigatória" });
  }

  const resultado = avaliarFormula(formula);

  if (typeof resultado === "string") {
    return res.status(400).json({ message: resultado });
  }

  res.json({ resultado });
};

module.exports = { avaliarFormula, calcular };
