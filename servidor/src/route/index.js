const { Router } = require("express");
const { avaliarFormula } = require("../controllers/calculadora");

const routes = Router();
let history = [];

// POST /calcular
routes.post("/calcular", (req, res) => {
  const { formula } = req.body;

  if (!formula) {
    return res.status(400).json({ error: "Fórmula ausente." });
  }

  const result = avaliarFormula(formula);
  history.push({ formula, result, time: new Date() });

  res.json({ result });
});

// GET /historico
routes.get("/historico", (req, res) => {
  res.json(history);
});

module.exports = { routes };
