import { numerosP, suma } from "../src/calculadora.js";

describe("suma", () => {
  test("suma 4 + 4 es 8", () => {
    expect(suma(4, 4)).toBe(8);
  });
});

import { resta } from "../src/calculadora.js";

describe("resta", () => {
  test("resta 6 - 2 es 4", () => {
    expect(resta(6, 2)).toBe(4);
  });
});

import { dividir } from "../src/calculadora.js";

describe("dividir", () => {
  test("divir 6 / 2 es 3", () => {
    expect(dividir(6, 2)).toBe(3);
  });
});

import { multiplicar } from "../src/calculadora.js";

describe("multiplicar", () => {
  test("multiplicar 2 * 2 es 4 ", () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
});

//import { numerosPares } from "../src/calculadora.js";
//describe("numerosPares", () => {
//test("numeros pares es 0 ", () => {
//expect(numerosPares (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(0);
//});
//});

import { Pares } from "../src/calculadora.js";
let listaNumeros = [2, 6,  4, 8].filter(Pares);
describe("par", () => {
  test("lista de numeros es par", () => {
    expect(Pares(listaNumeros)).toBe(0);
  });
});

import { numerosDivisibles } from "../src/calculadora.js";
describe("numerosDivisibles", () => {
  test("lista de numeros es divisibles", () => {
    expect(numerosDivisibles(numeros)).toStrictEqual(0, 5);
  });
});

import { numeros } from "../src/calculadora.js";
