function horaactual() {
    let date = new Date();
    let hora = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let horaActual = hora + ":" + minutes + ":" + seconds;
  
    let eti =document.getElementById("time")
  
  
  
  
    eti.innerHTML = horaActual;
  }
  
  horaactual()
  setInterval(horaactual, 1000);