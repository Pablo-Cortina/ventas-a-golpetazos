# 🥊 Ventas a golpetazos

Tienda online ficticia de **cocina de contacto**: platos que se piden con las manos y se comen con ganas. Todos los productos son platos de comida con juegos de palabras de golpes.

Proyecto de práctica de desarrollo web hecho con **HTML, CSS y JavaScript**.

🔗 [**Demo en vivo**](https://pablo-cortina.github.io/ventas-a-golpetazos/)

---

## ✨ Funcionalidades

- **Catálogo de productos** generado dinámicamente con JavaScript.
- **Carrito con cantidades**: si añades el mismo plato varias veces, aparece en una sola línea con su cantidad (x1, x2, x3...) y el precio calculado por unidades.
- **Botones en cada línea del carrito**: **+** para aumentar la cantidad y **X** para restarla.
- **Carrito lateral desplegable**, hecho con un `checkbox` y su `label` (sin JS para abrirlo y cerrarlo).
- **Diseño adaptable al abrir el carrito**: el contenido se desplaza y se reorganiza en lugar de quedar tapado por el panel.
- **Contador de unidades** y **total en euros** que se actualizan al añadir o quitar productos.
- **Botón Check Out**, que vacía el carrito y muestra un mensaje de estado.
- **Carrito persistente con `localStorage`**: los productos y sus cantidades se conservan aunque recargues o cierres la página.

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML | Estructura de la página |
| CSS | Estilos, maquetación (grid), carrito desplegable y adaptación del contenido con `:has()` |
| JavaScript | Catálogo, lógica del carrito (cantidades) y persistencia con `localStorage` |
| Google Fonts | Tipografía Anton para los títulos y precios |

## 🎯 Objetivo del proyecto

Practicar los fundamentos del desarrollo web frontend:

- Manipulación del DOM con JavaScript.
- Renderizado de listas de datos.
- Gestión del estado de un carrito de la compra, incluida la agrupación por cantidades.
- Uso de métodos de arrays como `find`, `forEach` y `splice`.
- Maquetación y diseño con CSS.

## 🔮 Mejoras pendientes

- Filtros para mostrar solo los productos que te interesan.
- Añadir imágenes a los productos.
- Mejorar la accesibilidad, como la navegación por teclado.
