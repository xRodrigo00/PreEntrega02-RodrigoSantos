function calcularIntereses(prestamo, meses) {
  let intereses;
  if (meses == 3) {
    intereses = (prestamo * 20) / 100;
    alert(`el interes es de ${intereses} por ${meses} meses.`);
  } else if (meses == 6) {
    intereses = (prestamo * 50) / 100;
    alert(`el interes es de ${intereses} por ${meses} meses.`);
  } else if (meses == 12) {
    intereses = (prestamo * 70) / 100;
    alert(`el interes es de ${intereses} por ${meses} meses.`);
  }
  return intereses;
}

function calcularMonto(monto) {
  monto = parseInt(prompt("ingrese el monto"));
  let meses = parseInt(prompt("ingrese los meses"));
  let montoFinal = monto + calcularIntereses(monto, meses);
  if (meses == 3 || meses == 6 || meses == 12) {
    alert(`monto final es de ${montoFinal}`);
  } else {
    alert("no contamos con esos meses");
  }
  return montoFinal;
}

function nombre() {
  let nombre = prompt("ingrese su nombre");
  while (nombre != "salir") {
    calcularMonto();
    nombre = prompt("ingrese su nombre");
  }
  return nombre;
}

calcularMonto()

let clientes = []

class Cliente {
  constructor(nombre, monto, intereses) {
    this.nombre = nombre;
    this.monto = monto;
    this.interes = intereses;
  }
}
console.log(clientes)


