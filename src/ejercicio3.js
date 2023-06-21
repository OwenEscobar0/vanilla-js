//let arreglo = [1,2,3,4];

//function clonarArreglo(arreglo){
//let lista = [...arreglo];
//console.log(lista);
//return lista;
//}

// NO MODIFICAR

export { clonarArreglo, clonarObjeto, sumar, saludar };

let objeto = ["🐮", "🐺", "🦒,"];
let objeto2 = ["🐔"];

function clonarObjeto() {
  let lista = objeto + objeto2;
  console.log(lista);
  return lista;
}
clonarObjeto();

let sumaTotal = (acumulador, valorActual) => {
  return acumulador + valorActual;
};
function sumar(...numeros) {
  return numeros.reduce(sumaTotal, 0);
}
const resultado = sumar(1, 2, 3, 4, 15);
console.log({ resultado });

let saludo = "Hola ";
function saludar(nombre) {
  nombre = "Desconocido";

  return saludo + nombre;
}
saludar();
