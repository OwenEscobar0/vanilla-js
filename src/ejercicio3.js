function clonarArreglo(arreglo) {
  return (lista = [...arreglo]);
}
let lista = [1,2,3,4];
clonarArreglo(lista);

// NO MODIFICAR

export { clonarArreglo, clonarObjeto, sumar, saludar };

let objeto = ["🐮", "🐺", "🦒,"];
let objeto2 = ["🐔"];

function clonarObjeto() {
  let lista = objeto + objeto2;
 
  return lista;
}
clonarObjeto();

let sumaTotal = (acumulador, valorActual) => {
  return acumulador + valorActual;
};
function sumar(...numeros) {
  return numeros.reduce(sumaTotal, 0);
}
const resultado = sumar(7, 5, 8, 22, 15);

console.log({ resultado });

let saludo = "Hola ";
function saludar(nombre) {
  nombre = "Desconocido";

  return saludo + nombre;
}
saludar();
