const productos = [
  { nombre: "Sopa de Puñetazos", precio: 18, emoji: "🍲" },
  { nombre: "Tortazos con jamón y tomate", precio: 24, emoji: "🍞" },
  { nombre: "Carrillada de espinillazos", precio: 46, emoji: "🍖" },
  { nombre: "Croquetas de Impacto", precio: 14, emoji: "🧆" },
  { nombre: "Gancho de buey al carbón", precio: 52, emoji: "🥩" },
  { nombre: "Bacalao al K.O.", precio: 26, emoji: "🐟" },
  { nombre: "Puñetazo de arroz con alga", precio: 11, emoji: "🍙" },
  { nombre: "Ramen-tazo limpio", precio: 31, emoji: "🍜" },
];

let carrito = JSON.parse(localStorage.getItem('savecarrito')) || [];

function guardarCarrito() {
  localStorage.setItem('savecarrito', JSON.stringify(carrito));
}

const divProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");
const textoTotal = document.getElementById("total");
const contador = document.getElementById("contador");
const alertaCompra = document.getElementById("estado-compra");

function mostrarProductos() {
  productos.forEach(function (producto, posicion) {
    const caja = document.createElement("div");
    caja.className = "producto";
    caja.innerHTML =
      "<div class='emoji'>" + producto.emoji + "</div>" +
      "<h3>" + producto.nombre + "</h3>" +
      "<p class='precio'>" + producto.precio + " €</p>" +
      "<button onclick='anadir(" + posicion + ")'>Añadir</button>";
    divProductos.appendChild(caja);
  });
}

function anadir(posicion) {
  const producto = productos[posicion];
  const existente = carrito.find(function (p) {
    return p.nombre === producto.nombre;
  });

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      nombre: producto.nombre,
      precio: producto.precio,
      emoji: producto.emoji,
      cantidad: 1
    });
  }

  alertaCompra.textContent = "Producto añadido.";
  guardarCarrito();
  mostrarCarrito();
}

function quitar(indice) {
  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad--;
  } else {
    carrito.splice(indice, 1);
  }

  alertaCompra.textContent = "Producto quitado.";
  guardarCarrito();
  mostrarCarrito();
}

function aumentar(indice) {
  carrito[indice].cantidad++;
  alertaCompra.textContent = "Producto añadido.";
  guardarCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  let unidades = 0;

  carrito.forEach(function (producto, indice) {
    const linea = document.createElement("li");
    const cantidad = " x" + producto.cantidad;
    linea.innerHTML = producto.nombre + "<strong>" + cantidad + "</strong> - " + (producto.precio * producto.cantidad) + " € ";

    const botonMas = document.createElement("button");
    botonMas.textContent = "+";
    botonMas.onclick = function () {
      aumentar(indice);
    };

    const botonQuitar = document.createElement("button");
    botonQuitar.textContent = "X";
    botonQuitar.onclick = function () {
      quitar(indice);
    };

    linea.appendChild(botonMas);
    linea.appendChild(botonQuitar);
    listaCarrito.appendChild(linea);

    total = total + producto.precio * producto.cantidad;
    unidades = unidades + producto.cantidad;
  });

  textoTotal.textContent = total + " €";
  contador.textContent = unidades;
}

function checkOut() {
  if (carrito.length != 0) {
    carrito = [];
    guardarCarrito();
    alertaCompra.textContent = "Compra realizada con éxito"
  } else {
    alertaCompra.textContent = "Añade productos para realizar la compra"
  }
  mostrarCarrito();
}

document.getElementById("checkout").onclick = checkOut;
mostrarProductos();
mostrarCarrito(); 