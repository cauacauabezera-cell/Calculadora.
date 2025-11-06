const isNumber = /^[0-9+\-*/().^]+$/;
const hasNoCarachter = /\/\s*0(?!\d)/;
const whiteSpace = /\s+/g;

module.exports = { isNumber, hasNoCarachter, whiteSpace };
