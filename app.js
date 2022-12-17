class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
  }
  get_datos() {
    console.log("Datos del producto:");
    console.log(`nombre: ${this.nombre}`);
    console.log(`precio: ${this.precio}`);
    console.log(`stock: ${this.stock}`);
  }
  get_stock() {
    if (this.stock <= 0) {
      return false;
    } else {
      return true;
    }
  }
  vender_productos(cantidad) {
    if (this.stock >= cantidad) {
      this.stock = this.stock - cantidad;
      console.log(`Compraste ${cantidad} productos.`);
      alert("El precio a pagar es de: " + this.precio * cantidad);
      alert("Gracias por su compra.");
    } else {
      alert("No tenemos suficientes productos");
    }
  }
  comprar_productos(compra) {
    this.stock = this.stock + compra;
  }
}

//Creamos el array donde se almacenaran nuestros productos
let lista_productos = [];

//CARGA DE PRODUCTOS
function ingresarProducto() {
  let nombre = prompt("Ingresa el nombre del producto").toLowerCase();
  let precio = parseFloat(prompt("Ingresa el precio del producto"));
  let stock = parseInt(prompt("Ingresa el stock del producto"));

  let nuevo_producto = new Producto(nombre, precio, stock);
  lista_productos.push(nuevo_producto);
}
let salir;
alert('Carga de productos')
while(salir != 'salir'){
    ingresarProducto()
    salir = prompt('Escriba salir para terminar.')
    if(salir != 'salir'){
        alert('siga cargando productos ')
    }
}

//Carga de productos
/* alert('Carga de productos!')
for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ingresa el nombre del producto").toLowerCase();
  let precio = parseFloat(prompt("Ingresa el precio del producto"));
  let stock = parseInt(prompt("Ingresa el stock del producto"));

  let nuevo_producto = new Producto(nombre, precio, stock);
  lista_productos.push(nuevo_producto);
}
console.log(lista_productos); */

//Recorremos la lista de productos
for (let producto of lista_productos) {
  producto.get_datos();
}

//Simulamos una compra
alert('Compra de usuario')
let compra_usuario = prompt("Ingrese el nombre del producto que deseas comprar.").toLowerCase();
//Buscamos el producto dentro de nuestro array 'lista_productos'
let producto_disponible = lista_productos.find(
  (compra) => compra.nombre == compra_usuario
);
console.log(producto_disponible); //Nos devuelve si el producto existe

//EJECUTAMOS SI EL PRODUCTO EXISTE
if (producto_disponible != undefined) {
  //EJECUTAMOS SI CONTAMOS CON STOCK DISPONIBLE
  if (producto_disponible.get_stock()) {
    let cantidad = parseInt(prompt("Cuantas unidades desea?"));
    producto_disponible.vender_productos(cantidad);
  } else {
    alert("No tenemos ese producto");
  }
} else {
  alert("No contamos con ese producto. Vuelva Pronto");
}

//RECORREMOS EL PRODUCTO PARA VER EN CUALES TENEMOS POCO STOCK
for (let producto of lista_productos) {
  if (producto.stock <= 2) {
    alert("Stock bajo, por favor recargar.");
    let compra = parseInt(prompt("ingrese cantidad para recargar stock"));
    producto.comprar_productos(compra);
    producto.get_datos();
  }
}
