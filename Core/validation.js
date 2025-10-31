const isNumber = /^[0-9+\-*/().]+$/;

const hasNoCarachter = /\/\s*0(?!\d)/;

module.exports = { isNumber, hasNoCarachter };
