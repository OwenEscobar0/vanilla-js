//let arreglo = [1,2,3,4];

//function clonarArreglo(arreglo){
//let lista = [...arreglo];
//console.log(lista);
//return lista;
//}

// NO MODIFICAR

export { clonarArreglo, clonarObjeto, sumar, saludar };

let objeto = ["🐮", "-🐺", "🦒",];
let objeto2 = ["🐔"];

function clonarObjeto() {
  let lista = objeto + objeto2;
  console.log(lista);
  return lista;
}
clonarObjeto();
