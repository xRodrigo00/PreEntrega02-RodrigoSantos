let intereses = function (prestamo, meses) {
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
};

let montoTotal = function (monto) {
  monto = parseInt(prompt("ingrese el monto"));
  let meses = parseInt(prompt("ingrese los meses"));
  let montoFinal = monto + intereses(monto, meses);
  if (meses == 3 || meses == 6 || meses == 12) {
    alert(`monto final es de ${montoFinal}`);
  } else {
    alert("no contamos con esos meses");
  }
  return montoFinal;
};

let nombre = function () {
  let cliente = prompt("ingrese su nombre");
  while (cliente != "salir") {
    montoTotal();
    cliente = prompt("ingrese su nombre");
    let newCliente = new Clientes(nombre, montoTotal, intereses)
    clientes.push(newCliente)
  }
  return cliente;
};

let clientes = [];
 
class Clientes{
    constructor(nombre, monto, interes){
        this.nombre = nombre
        this.monto = monto
        this.interes = interes
    }
}

nombre()
console.log(clientes)