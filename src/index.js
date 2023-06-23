import { calculadora } from "./calculadora.js";
let Sumar = calculadora.Sumar;
let restar = calculadora.restar;
let mulplicar = calculadora.mulplicar;
let division = calculadora.division;

function calcular(operacion, numero1, numero2) {
  let resultado;
  if (operacion == "sumar") {
    resultado = Sumar(numero1, numero2);
  } else if (operacion == "dividir") {
    resultado = division(numero1, numero2);
  } else if (operacion == "restar") {
    resultado = restar(numero1, numero2);
  }
  return resultado;
}
