document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('menu-open');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu > li");

    for (let item of menuItems) {
        item.addEventListener("click", function(event) {
            if (this.querySelector(".submenu")) {
                event.preventDefault();
                const submenu = this.querySelector(".submenu");
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    }

    // Si se hace clic fuera de los menús desplegables, ocultarlos
    document.addEventListener("click", function (event) {
        menuItems.forEach(function (menuItem) {
            const submenu = menuItem.querySelector(".submenu");

            if (submenu && !menuItem.contains(event.target)) {
                submenu.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let lupa = document.querySelector('.icono-busqueda .lupa');
    let buscador = document.getElementById('buscador');

    lupa.addEventListener('click', function(event) {
      event.preventDefault();
      if (buscador.style.display === 'none' || buscador.style.display === '') {
        buscador.style.display = 'inline-block';
        buscador.focus();
      } else {
        buscador.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[data-url]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

function desplegarTexto(index) {
    const textosExplicativos = document.querySelectorAll('.texto-explicativo');
    const textoExplicativo = textosExplicativos[index];

    if (textoExplicativo.style.display === 'block') {
        textoExplicativo.style.display = 'none';
    } else {
        textosExplicativos.forEach(texto => texto.style.display = 'none');
        textoExplicativo.style.display = 'block';
    }
}   

//JS CARRITO

let carrito = [];

function agregarAlCarrito(button) {
    const idProducto = button.dataset.id;

    const producto = button.parentElement.parentElement;
    const imagen = producto.querySelector("img").src;
    const nombre = producto.querySelector("h2").innerText;
    const precio = parseFloat(producto.querySelector(".precio").innerText.replace("€", ""));
    const talla = producto.querySelector("#talla").value;
    const cantidad = parseInt(producto.querySelector("#cantidad").value);

    const itemCarrito = {
        id: idProducto,
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        talla: talla,
        cantidad: cantidad,
    };
    
    carrito.push(itemCarrito);

    console.log(carrito); // Esto es solo para verificar la información del carrito en la consola del navegador
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


function mostrarCarrito() {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoContenedor = document.getElementById("carrito-contenedor");
    const totalContenedor = document.getElementById("total");
    carritoContenedor.innerHTML = ""
    let total = 0;

    carrito.forEach(item => {
        const itemCarritoDiv = document.createElement("div");
        itemCarritoDiv.classList.add("item-carrito");

        const img = document.createElement("img");
        img.src = item.imagen;
        img.alt = item.nombre;
        img.style.width = "50px"; // Ajusta el tamaño de la imagen según tus preferencias
        img.style.height = "50px"; // Ajusta el tamaño de la imagen según tus preferencias
        itemCarritoDiv.appendChild(img);
        
        const nombre = document.createElement("h3");
        nombre.innerText = item.nombre + " (Talla: " + item.talla + ")";
        itemCarritoDiv.appendChild(nombre);

        const cantidad = document.createElement("span");
        cantidad.innerText = "Cantidad: " + item.cantidad;
        itemCarritoDiv.appendChild(cantidad);

        const precio = document.createElement("span");
        precio.innerText = "Precio: €" + (item.precio * item.cantidad).toFixed(2);
        itemCarritoDiv.appendChild(precio);

        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminarDelCarrito(item.id, item.talla));
        itemCarritoDiv.appendChild(btnEliminar);

        carritoContenedor.appendChild(itemCarritoDiv);

        total += item.precio * item.cantidad;
    });

    totalContenedor.innerText = "€" + total.toFixed(2);

    localStorage.setItem("carrito", JSON.stringify(carrito));

}



function eliminarDelCarrito(idProducto, talla) {
    carrito = carrito.filter(item => !(item.id === idProducto && item.talla === talla));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// cambio de catalogo

const productos = [
    {
        id: "producto1",
        nombre: "Nikes1",
        precio: 99.99,
        imagen: "imagenescatalogo/kisspng-air-force-1-nike-air-max-nike-free-jumpman-nike-mag-5b49f6a18eeee1.8806373115315739215855.png",
    },
    {
        id: "producto2",
        nombre: "Nikes2",
        precio: 89.99,
        imagen: "imagenescatalogo/kisspng-air-force-1-sneakers-basketball-shoe-nike-nike-air-force-5b3a880ad7fd64.8347431115305625708847.png",
    },
    {
        id: "producto3",
        nombre: "Nikes3",
        precio: 40.99,
        imagen: "imagenescatalogo/kisspng-nike-free-nike-air-max-air-force-1-sneakers-goods-5b3ea83621fa69.0454807315308329501392.png",
    },
    {
        id: "producto4",
        nombre: "Nikes4",
        precio: 50.99,
        imagen: "imagenescatalogo/kisspng-nike-free-shoe-air-jordan-sneakers-running-shoes-5a78590da2b558.9197713715178365576665.png",
    },
];

function seleccionarProducto(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    window.location.href = "pagina seleccion.html";
}

function cargarProductoSeleccionado() {
    const productoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado"));

    document.getElementById("imagenProducto").src = productoSeleccionado.imagen;
    document.getElementById("nombreProducto").innerText = productoSeleccionado.nombre;
    document.getElementById("precioProducto").innerText = "€" + productoSeleccionado.precio.toFixed(2);
    document.getElementById("btnAgregarCarrito").dataset.id = productoSeleccionado.id;
}

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//js PHP

document.getElementById('miFormulario').addEventListener('submit', function (event) {
    // Obtén la información del carrito desde el localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
     // Convierte el objeto del carrito en una cadena JSON y guárdalo en el campo oculto
     document.getElementById('carrito').value = JSON.stringify(carrito);
    });
    
