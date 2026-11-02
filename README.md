# 🥊 Ventas a golpetazos

Tienda online ficticia de **cocina de contacto**: platos que se piden con las manos y se comen con ganas. Todos los productos son platos de comida con juegos de palabras de golpes.

Proyecto de práctica de desarrollo web hecho con **HTML, CSS y JavaScript**.

🔗 [**Demo en vivo**](https://pablo-cortina.github.io/ventas-a-golpetazos/)

---

## ✨ Funcionalidades

- **Catálogo de productos** generado dinámicamente con JavaScript.
- **Carrito con cantidades**: si añades el mismo plato varias veces, sale en una sola línea (x1, x2, x3...).
- **Botones + y X** en cada línea del carrito para subir o bajar la cantidad.
- **Carrito lateral desplegable**, hecho con un `checkbox` y su `label` (sin JS para abrirlo y cerrarlo).
- **Diseño adaptable al abrir el carrito**: el contenido se desplaza en lugar de quedar tapado.
- **Contador de artículos** y **total en euros** que se actualizan solos.
- **Botón Check Out**, que guarda la compra en el historial y vacía el carrito.
- **Botón Vaciar cesta**, que quita todos los productos de golpe.
- **Historial de compras desplegable**: cada compra sale con su fecha y su total, y al pulsarla se ven sus productos.
- **Descarga de recibos** en archivo de texto (`.txt`).
- **Carrito e historial persistentes con `localStorage`**: se conservan aunque recargues o cierres la página.
- **Estética de cartel de boxeo**, con botones que se hunden al pulsarlos.

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML | Estructura de la página |
| CSS | Estilos, maquetación y carrito desplegable |
| JavaScript | Catálogo, carrito, historial y persistencia con `localStorage` |
| Google Fonts | Tipografía Anton para los títulos y precios |

## 🎯 Objetivo del proyecto

Practicar los fundamentos del desarrollo web frontend:

- Manipulación del DOM con JavaScript.
- Renderizado de listas de datos.
- Gestión del estado de un carrito de la compra.
- Guardado de datos con `localStorage`.
- Maquetación y diseño con CSS.

## 🔮 Mejoras pendientes

- Filtros para mostrar solo los productos que te interesan.
- Añadir imágenes a los productos.
- Mejorar la accesibilidad, como la navegación por teclado.
