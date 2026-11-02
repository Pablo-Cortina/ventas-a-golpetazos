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

    const texto = document.createElement("span");
    texto.innerHTML = producto.nombre + "<strong> x" + producto.cantidad + "</strong> - " + (producto.precio * producto.cantidad) + " €";

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

    const botones = document.createElement("div");
    botones.className = "botones-linea";
    botones.appendChild(botonMas);
    botones.appendChild(botonQuitar);

    linea.appendChild(texto);
    linea.appendChild(botones);
    listaCarrito.appendChild(linea);

    total = total + producto.precio * producto.cantidad;
    unidades = unidades + producto.cantidad;
  });

  textoTotal.textContent = total + " €";
  contador.textContent = unidades;
}

function vaciarCesta() {
  if (carrito.length != 0) {
    carrito = [];
    guardarCarrito();
    alertaCompra.textContent = "Cesta vaciada";
    mostrarCarrito();
  } else {
    alertaCompra.textContent = "La cesta ya está vacía";
  }
}

document.getElementById("vaciar-cesta").onclick = vaciarCesta;

function checkOut() {
  if (carrito.length != 0) {
    let totalCompra = 0;
    carrito.forEach(function (producto) {
      totalCompra = totalCompra + producto.precio * producto.cantidad;
    });

    historial.push({
      fecha: new Date().toLocaleString(),
      productos: carrito,
      total: totalCompra
    });
    guardarHistorial();
    mostrarHistorial();

    carrito = [];
    guardarCarrito();
    alertaCompra.textContent = "Compra realizada con éxito";
  } else {
    alertaCompra.textContent = "Añade productos para realizar la compra";
  }
  mostrarCarrito();
}

let historial = JSON.parse(localStorage.getItem('savehistorial')) || [];
const desplegable = document.getElementById("desplegable-previas");
const listaPrevias = document.getElementById("lista-previas");

function guardarHistorial() {
  localStorage.setItem('savehistorial', JSON.stringify(historial));
}

function mostrarHistorial() {
  listaPrevias.innerHTML = "";

  for (let i = 0; i < historial.length; i++) {
    const compra = historial[i];
    const textoCabecera = compra.fecha + " - total " + compra.total + " €";

    const recibo = document.createElement("li");

    const cabecera = document.createElement("p");
    cabecera.textContent = "▶ " + textoCabecera;

    const detalle = document.createElement("ul");
    detalle.hidden = true;

    for (let j = 0; j < compra.productos.length; j++) {
      const producto = compra.productos[j];
      const lineaProducto = document.createElement("li");
      lineaProducto.textContent = producto.nombre + " x" + producto.cantidad + " - " + (producto.precio * producto.cantidad) + " €";
      detalle.appendChild(lineaProducto);
    }

    cabecera.onclick = function () {
      if (detalle.hidden == true) {
        detalle.hidden = false;
        cabecera.textContent = "▼ " + textoCabecera;
      } else {
        detalle.hidden = true;
        cabecera.textContent = "▶ " + textoCabecera;
      }
    };

    const fila = document.createElement("div");
    fila.className = "fila-recibo";

    const botonDescargar = document.createElement("button");
    botonDescargar.textContent = "⬇";
    botonDescargar.title = "Descargar recibo";
    botonDescargar.onclick = function () {
      descargarRecibo(compra, i + 1);
      
    };

    fila.appendChild(cabecera);
    fila.appendChild(botonDescargar);

    recibo.appendChild(fila);;
    recibo.appendChild(detalle);
    listaPrevias.appendChild(recibo);
  }
}
let desplegado = false;

function historialCompra() {
  if (desplegado == false) {
    desplegado = true;
    desplegable.textContent = "▼ Historial de compras";
    listaPrevias.hidden = false;
  } else {
    desplegado = false;
    desplegable.textContent = "▶ Historial de compras";
    listaPrevias.hidden = true;
  }
}

function descargarRecibo(compra, numero) {
  let texto = "RECIBO - Ventas a golpetazos\n";
  texto = texto + "Fecha: " + compra.fecha + "\n\n";

  for (let i = 0; i < compra.productos.length; i++) {
    const producto = compra.productos[i];
    texto = texto + producto.nombre + " x" + producto.cantidad + " - " + (producto.precio * producto.cantidad) + " €\n";
  }

  texto = texto + "\nTOTAL: " + compra.total + " €\n";

  const archivo = new Blob([texto], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = "recibo-" + numero + ".txt";
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}

desplegable.onclick = historialCompra;
document.getElementById("checkout").onclick = checkOut;
mostrarProductos();
mostrarCarrito();
mostrarHistorial();