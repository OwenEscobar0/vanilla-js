export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function dividir(a, b) {
  return a / b;
}

export function multiplicar(a, b) {
  return a * b;
}

//export function numerosPares() {
//return numerosPares % 2 == 0;
//}
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(numerosPares);

//let pares = numeros.filter(function(numero) {
//return numero % 2 == 0;
//});
//export { numeros }

export function Pares(n1) {
  if (n1 % 2 == 0) {
    return 0;
  } else {
    return 1;
  }
}

export function numerosDivisibles(n1) {
  if (n1 % 5 === 0) {
    return 0;
  } else if (n1 % 5 === 5) {
    return 5;
  }
  return 1;
}
export let numeros = [40, 10, 15].filter(numerosDivisibles);
