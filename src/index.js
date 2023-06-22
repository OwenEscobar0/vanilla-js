// Inserte el código aquí

function mueveReloj() {
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();

  horaImprimible = hora + " : " + minuto + " : " + segundo;

  document.form_reloj.reloj.value = horaImprimible;

  setTimeout("mueveReloj()", 1000);
}

//
//
//FORMA 1
function ObtenerApi() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}

ObtenerApi();
//
//FORMA 2

function ObtenerUsuariosApi() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    });
}

function apiLink() {
  return new Promise(ObtenerUsuariosApi);
}
ObtenerUsuariosApi(apiLink);

//
//ASYNC

const datos = [
  {
    id: 1,
    title: "Owen Escobar",
    year: 2000,
  },
];
const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 2500);
  });
};
async function dataF() {
  const datosF = await getDatos();
  console.log(datosF);
}
dataF();
