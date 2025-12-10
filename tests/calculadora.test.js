const calculadora = require("../models/calculadora");

test("espero que 1 + 1 seja igual a 2", () => {
  expect(calculadora.somar(1, 1)).toBe(2);
});
