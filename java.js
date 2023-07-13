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
    const producto = button.parentElement.parentElement;
    const imagen = producto.querySelector("#imagenProducto").src;
    const nombre = producto.querySelector("#nombreProducto").innerText;
    const precio = parseFloat(producto.querySelector("#precioProducto").innerText.replace("€", ""));
    const talla = producto.querySelector("#talla").value;
    const cantidad = parseInt(producto.querySelector("#cantidad").value);

    const itemCarrito = {
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        talla: talla,
        cantidad: cantidad,
    };

    carrito.push(itemCarrito);
    
    window.location.href = "carrito de compras.html";

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
        img.style.width = "80px"; // Ajusta el tamaño de la imagen según tus preferencias
        img.style.height = "80px"; // Ajusta el tamaño de la imagen según tus preferencias
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
    let eliminado = false;
    carrito = carrito.filter(item => {
      if (item.id === idProducto && item.talla === talla && !eliminado) {
        eliminado = true;
        return false; // No incluir el producto en el nuevo carrito
      }
      return true; // Incluir todos los demás productos en el nuevo carrito
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }



const productos = [

    //Productos Liga Española


    {
        id: "Primera Equipacion Real Madrid 22/23",
        nombre: "Primera Equipacion Real Madrid 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/madrid.png",
    },

    {
        id: "Primera Equipacion Real Betis 22/23",
        nombre: "Primera Equipacion Real Betis 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/betis.png",
    },

    {
        id: "Primera Equipacion Barca 22/23",
        nombre: "Primera Equipacion Barca 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/barca.png",
    },

    {
        id: "Segunda Equipacion Barca 22/23",
        nombre: "Segunda Equipacion Barca 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/segundabarca.png",
    },

    {
        id: "Primera Equipacion Atleti 22/23",
        nombre: "Primera Equipacion Atleti 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Atleti.png",
    },

    {
        id: "Segunda Equipacion Atleti 22/23",
        nombre: "Segunda Equipacion Atleti 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/SegundaAtleti.png",
    },

    {
        id: "Primera Equipacion Celta 22/23",
        nombre: "Primera Equipacion Celta 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/celta.png",
    },

    {
        id: "Segunda Equipacion Celta 22/23",
        nombre: "Segunda Equipacion Celta 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundacelta.png",
    },

    {
        id: "Primera Equipacion Elche 22/23",
        nombre: "Primera Equipacion Elche 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/elche.png",
    },

    {
        id: "Segunda Equipacion Elche 22/23",
        nombre: "Segunda Equipacion Elche 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundaelche.png",
    },

    {
        id: "Primera Equipacion Español 22/23",
        nombre: "Primera Equipacion Español 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/español.png",
    },

    {
        id: "Segunda Equipacion Español 22/23",
        nombre: "Segunda Equipacion Español 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundaespañol.png",
    },

    {
        id: "Primera Equipacion Osasuna 22/23",
        nombre: "Primera Equipacion Osasuna 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/osasuna.png",
    },

    {
        id: "Segunda Equipacion Osasuna 22/23",
        nombre: "Segunda Equipacion Osasuna 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundaosasuna.png",
    },

    {
        id: "Primera Equipacion Valencia 22/23",
        nombre: "Primera Equipacion Valencia 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/valencia.png",
    },

    {
        id: "Segunda Equipacion Valencia 22/23",
        nombre: "Segunda Equipacion Valencia 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundavalencia.png",
    },

    {
        id: "Primera Equipacion Bilbao 22/23",
        nombre: "Primera Equipacion Bilbao 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/atletic.png",
    },

    {
        id: "Segunda Equipacion Bilbao 22/23",
        nombre: "Segunda Equipacion Bilbao 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundaatletic.png",
    },

    {
        id: "Primera Equipacion Sevilla 22/23",
        nombre: "Primera Equipacion Sevilla 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/sevilla.png",
    },

    {
        id: "Segunda Equipacion Sevilla 22/23",
        nombre: "Segunda Equipacion Sevilla 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundasevilla.png",
    },

    {
        id: "Primera Equipacion Real Sociedad 22/23",
        nombre: "Primera Equipacion Real Sociedad 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/realsociedad.png",
    },

    {
        id: "Segunda Equipacion Real Sociedad 22/23",
        nombre: "Segunda Equipacion Real Sociedad 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Segundarealsociedad.png",
    },

    {
        id: "Primera Equipacion Valladolid 22/23",
        nombre: "Primera Equipacion Valladolid 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/Valladolid.png",
    },

    {
        id: "Segunda Equipacion Valladolid 22/23",
        nombre: "Segunda Equipacion Valladolid 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/SegundaValladolid.png",
    },

    {
        id: "Segunda Equipacion Real Madrid 22/23",
        nombre: "Segunda Equipacion Real Madrid 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/segundamadrid.png",
    },

    {
        id: "Segunda Equipacion Real Betis 22/23",
        nombre: "Segunda Equipacion Real Betis 22/23",
        precio: 24.99,
        imagen: "imagenescatalogofutbol/segundabetis.png",
    },

    //Productos Liga Inglesa

    {
        id: "Primera Equipacion Arsenal 22/23",
        nombre: "Primera Equipacion Arsenal 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/arsenal.png",
    },

    {
        id: "Primera Equipacion Chelsea 22/23",
        nombre: "Primera Equipacion Chelsea 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/chelsea.png",
    },

    {
        id: "Primera Equipacion Manchester City 22/23",
        nombre: "Primera Equipacion Manchester City 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/city.png",
    },

    {
        id: "Primera Equipacion Manchester United 22/23",
        nombre: "Primera Equipacion Manchester United 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/united.png",
    },

    {
        id: "Primera Equipacion Everton 22/23",
        nombre: "Primera Equipacion Everton 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/everton.png",
    },

    {
        id: "Primera Equipacion Westham 22/23",
        nombre: "Primera Equipacion Westham 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/westham.png",
    },

    {
        id: "Primera Equipacion Wolves 22/23",
        nombre: "Primera Equipacion Wolves 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/wolves.png",
    },

    {
        id: "Primera Equipacion Leeds 22/23",
        nombre: "Primera Equipacion Leeds 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/leeds.png",
    },

    {
        id: "Primera Equipacion Leicester 22/23",
        nombre: "Primera Equipacion Leicester 22/23",
        precio: 24.99,
        imagen: "imagenesPremier/leicester.png",
    },

    //Productos Liga Francesa

    {
        id: "Primera Equipacion PSG 22/23",
        nombre: "Primera Equipacion PSG 22/23",
        precio: 24.99,
        imagen: "imagenesLigaFrancesa/camisetaPSG.png",
    },

    {
        id: "Chandal Strike PSG 22/23",
        nombre: "Chandal Strike PSG 22/23",
        precio: 39.99,
        imagen: "ImagenesLigaFrancesa/ChandalNegroPSG.png",
    },

    {
        id: "Chandal Azul Manga Larga PSG 22/23",
        nombre: "Chandal Azul Manga Larga PSG 22/23",
        precio: 39.99,
        imagen: "ImagenesLigaFrancesa/ChandalAzulMangaLarga.png",
    },

    {
        id: "Chandal Negro Cuello Amarillo PSG 22/23",
        nombre: "Chandal Negro Cuello Amarillo PSG 22/23",
        precio: 39.99,
        imagen: "ImagenesLigaFrancesa/ChandalNegroCuelloAmarillo.png",
    },

    {
        id: "Chandal Negro y Rojo PSG 22/23",
        nombre: "Chandal Negro y Rojo PSG 22/23",
        precio: 55.99,
        imagen: "ImagenesLigaFrancesa/ChandalNegroYRojo.png",
    },

    {
        id: "Chandal Gris PSG 23/24",
        nombre: "Chandal Gris PSG 23/24",
        precio: 35.99,
        imagen: "ImagenesLigaFrancesa/chandalgrisPSG.png",
    },

    {
        id: "Camiseta Monaco 22/23",
        nombre: "Camiseta Monaco 22/23",
        precio: 24.99,
        imagen: "ImagenesLigaFrancesa/CamisetaMonaco.png",
    },

    {
        id: "Chandal Blanco Marsella 23/24",
        nombre: "Chandal Blanco Marsella 23/24",
        precio: 35.99,
        imagen: "ImagenesLigaFrancesa/ChandalBlancoMarsella.png",
    },

    {
        id: "Chandal Azul Claro Marsella 23/24",
        nombre: "Chandal Azul Claro Marsella 23/24",
        precio: 35.99,
        imagen: "ImagenesLigaFrancesa/ChandalAzulClaroMarsella.png",
    },

    {
        id: "Primera Equipacion Marsella 23/24",
        nombre: "Primera Equipacion Marsella 23/24",
        precio: 24.99,
        imagen: "ImagenesLigaFrancesa/PrimeraEquipacionMarsella.png",
    },

    {
        id: "Chandal Marsella 22/23",
        nombre: "Chandal Marsella 22/23",
        precio: 35.99,
        imagen: "ImagenesLigaFrancesa/ChandalMarsella2223.png",
    },

    {
        id: "Sudadera Roja + Pantalones PSG 23/24",
        nombre: "Sudadera Roja + Pantalones PSG 23/24",
        precio: 39.99,
        imagen: "ImagenesLigaFrancesa/SudaderaRojaPSG.png",
    },

    {
        id: "Sudadera Negra + Pantalones PSG 23/24",
        nombre: "Sudadera Negra + Pantalones PSG 23/24",
        precio: 39.99,
        imagen: "ImagenesLigaFrancesa/SudaderaNegraPSG.png",
    },

    //Productos Liga Italiana

    {
        id: "Chandal Negro Milan 23-24",
        nombre: "Chandal Negro Milan 23-24",
        precio: 54.99,
        imagen: "imagenes liga italiana/Chandal Negro Milan 23-24.png",
    },

    {
        id: "Chandal Rojo Milan 23-24",
        nombre: "Chandal Rojo Milan 23-24",
        precio: 54.99,
        imagen: "imagenes liga italiana/Chandal Rojo Milan 23-24.png",
    },

    {
        id: "Equipacion Milan 23-24",
        nombre: "Equipacion Milan 23-24",
        precio: 24.99,
        imagen: "imagenes liga italiana/Camiseta Jugador Milan 23-24.png",
    },

    {
        id: "Equipacion Retro Milan 88-89",
        nombre: "Equipacion Retro Milan 88-89",
        precio: 29.99,
        imagen: "imagenes liga italiana/Camiseta Retro Milan.png",
    },

    {
        id: "Equipacion Fiorentina 22-23",
        nombre: "Equipacion Fiorentina 22-23",
        precio: 24.99,
        imagen: "imagenes liga italiana/Equipacion Fiorentina 22-23.png",
    },

    {
        id: "Chandal Azul Claro Inter 23-24",
        nombre: "Chandal Azul Claro Inter 23-24",
        precio: 44.99,
        imagen: "imagenes liga italiana/Chandal Inter 23-24.png",
    },

    {
        id: "Primera Equipacion Inter 23-24",
        nombre: "Primera Equipacion Inter 23-24",
        precio: 24.99,
        imagen: "imagenes liga italiana/Chandal Inter 23-24.png",
    },

    {
        id: "Corta Vientos Inter",
        nombre: "Corta Vientos Inter",
        precio: 49.99,
        imagen: "imagenes liga italiana/CortaVientosInter.png",
    },

    {
        id: "Corta Vientos Milan",
        nombre: "Corta Vientos Milan",
        precio: 49.99,
        imagen: "imagenes liga italiana/Corta Vientos Milan.png",
    },

    {
        id: "Primera Equipacion Roma 22-23",
        nombre: "Primera Equipacion Roma 22-23",
        precio: 24.99,
        imagen: "imagenes liga italiana/Primera Equipacion Roma 22-23.png",
    },

    {
        id: "Chandal Napoli 22-23",
        nombre: "Chandal Napoli 22-23",
        precio: 49.99,
        imagen: "imagenes liga italiana/Chandal Napoli 22-23.png",
    },

    {
        id: "Equipacion Napoli 23-24",
        nombre: "Equipacion Napoli 23-24",
        precio: 24.99,
        imagen: "imagenes liga italiana/Equipacion Napoli 23-24.png",
    },

    //Productos Lacoste

    {
        id: "Polo Amarillo Lacoste",
        nombre: "Polo Amarillo Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste Liso Amarrilo.png",
    },

    {
        id: "Polo Rojo Lacoste",
        nombre: "Polo Rojo Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste liso Rojo.png",
    },

    {
        id: "Polo Negro Lacoste",
        nombre: "Polo Negro Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste liso Negro.png",
    },

    {
        id: "Polo Blanco Lacoste",
        nombre: "Polo Blanco Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste liso Blanco.png",
    },

    {
        id: "Polo Marino Lacoste",
        nombre: "Polo Marino Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste liso Marino.png",
    },

    {
        id: "Polo Azul Lacoste",
        nombre: "Polo Azul Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Lacoste liso Azul.png",
    },

    {
        id: "Cortavientos Pistacho Lacoste",
        nombre: "Cortavientos Pistacho Lacoste",
        precio: 55,
        imagen: "Lacoste/Cortavientos Pistacho Lacoste.png",
    },

    {
        id: "Cortavientos Azul Lacoste",
        nombre: "Cortavientos Azul Lacoste",
        precio: 55,
        imagen: "Lacoste/Cortavientos Azul Lacoste.png",
    },

    {
        id: "Chaqueta Invierno Negra Lacoste",
        nombre: "Chaqueta Invierno Negra Lacoste",
        precio: 55,
        imagen: "Lacoste/Chaqueta Invierno Negra Lacoste.png",
    },

    {
        id: "Chaqueta Invierno Blanca Lacoste",
        nombre: "Chaqueta Invierno Blanca Lacoste",
        precio: 55,
        imagen: "Lacoste/Chaqueta Invierno Blanca Lacoste.png",
    },

    {
        id: "Chaqueta Azul Y Negra Lacoste",
        nombre: "Chaqueta Azul Y Negra Lacoste",
        precio: 55,
        imagen: "Lacoste/Chaqueta Azul Y Negra Lacoste.png",
    },

    {
        id: "Chaqueta Verde Y Negra Lacoste",
        nombre: "Chaqueta Verde Y Negra Lacoste",
        precio: 55,
        imagen: "Lacoste/Chaqueta Verde Y Negra Lacoste.png",
    },

   

    {
        id: "Polo Manga Larga Blanco Lacoste",
        nombre: "Polo Manga Larga Blanco Lacoste",
        precio: 55,
        imagen: "Lacoste/Polo Manga Larga Blanco Lacoste.png",
    },

    {
        id: "Sudadera Gris Lacoste",
        nombre: "Sudadera Gris Lacoste",
        precio: 55,
        imagen: "Lacoste/Sudadera Gris Lacoste.png",
    },

    {
        id: "Sudadera Azul Lacoste",
        nombre: "Sudadera Azul Lacoste",
        precio: 55,
        imagen: "Lacoste/Sudadera Azul Lacoste.png",
    },

    {
        id: "Sudadera Negra Lacoste",
        nombre: "Sudadera Negra Lacoste",
        precio: 55,
        imagen: "Lacoste/Sudadera Negra Lacoste.png",
    },

    {
        id: "Sudadera Azul Con Cremallera Lacoste",
        nombre: "Sudadera Azul Con Cremallera Lacoste",
        precio: 55,
        imagen: "Lacoste/Sudadera Azul Con Cremallera Lacoste.png",
    },

    {
        id: "Sudadera Verde Con Cremallera Lacoste",
        nombre: "Sudadera Verde Con Cremallera Lacoste",
        precio: 55,
        imagen: "Lacoste/Sudadera Verde Con Cremallera Lacoste.png",
    },


    //Productos Kenzo

    {
        id: "Lote 3 camisetas Kenzo",
        nombre: "Lote 3 camisetas Kenzo",
        precio: 99.99,
        imagen: "Kenzo/Lote3camisetas.jpeg",
    },

    {
        id: "Camiseta Kenzo Negra",
        nombre: "Camiseta Kenzo Negra",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Negra.png",
    },

    {
        id: "Camiseta Kenzo Blanca",
        nombre: "Camiseta Kenzo Blanca",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Blanca.png",
    },

    {
        id: "Camiseta Kenzo Negra Basica",
        nombre: "Camiseta Kenzo Negra Basica",
        precio: 39.99,
        imagen: "Kenzo/Camiseta Kenzo Negra Basica.png",
    },

    {
        id: "Camiseta Kenzo Negra Reborde Verde",
        nombre: "Camiseta Kenzo Negra Reborde Verde",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo NegraReborde Berde.png",
    },

    {
        id: "Camiseta Kenzo Blanca Reborde Plata",
        nombre: "Camiseta Kenzo Blanca Reborde Plata",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Blanca Reborde Plata.png",
    },

    {
        id: "Camiseta Kenzo Negra Reborde Dorado",
        nombre: "Camiseta Kenzo Negra Reborde Dorado",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Negra Reborde Dorado.png",
    },

    {
        id: "Camiseta Kenzo Tigre Plateado",
        nombre: "Camiseta Kenzo Tigre Plateado",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Tigre Plateado.png",
    },

    {
        id: "Camiseta Kenzo Azul Reborde Cielo 865",
        nombre: "Camiseta Kenzo Azul Reborde Cielo",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Azul Reborde Cielo.png",
    },

    {
        id: "Camiseta Kenzo Blanca Reborde Negro 865",
        nombre: "Camiseta Kenzo Blanca Reborde Negro",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Blanca Reborde Negro.png",
    },

    {
        id: "Camiseta Kenzo Negra Con Logo 9045",
        nombre: "Camiseta Kenzo Negra Con Logo",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Negra Con Logo.png",
    },

    {
        id: "Camiseta Kenzo Negra Con Reborde Azul 865",
        nombre: "Camiseta Kenzo Negra Con Reborde Azul",
        precio: 44.99,
        imagen: "Kenzo/Camiseta Kenzo Negra Reborde Azul.png",
    },

    {
        id: "Sudadera Kenzo Negra Reborde Dorado 4147",
        nombre: "Sudadera Kenzo Negra Reborde Dorado",
        precio: 54.99,
        imagen: "Kenzo/Sudadera Kenzo Reborde Dorado.png",
    },
    
    {
        id: "Sudadera Kenzo Blanca 4641",
        nombre: "Sudadera Kenzo Blanca",
        precio: 54.99,
        imagen: "Kenzo/Sudadera Blanca Kenzo 4641.png",
    },

    {
        id: "Sudadera Kenzo Negra Reborde Azul Cielo 3796",
        nombre: "Sudadera Kenzo Negra Reborde Azul Cielo",
        precio: 54.99,
        imagen: "Kenzo/Sudadera Kenzo Negra Reborde Azul Cielo 3796.png",
    },

    {
        id: "Sudadera Negra Kenzo Multicolor 3318",
        nombre: "Sudadera Negra Kenzo Multicolor",
        precio: 54.99,
        imagen: "Kenzo/Sudadera Negra Kenzo Multicolor.png",
    },

    {
        id: "Sudadera Kenzo Negra Reborde Rojo 2830",
        nombre: "Sudadera Kenzo Negra Reborde Rojo",
        precio: 54.99,
        imagen: "Kenzo/Sudadera Kenzo Negra Reborde Rojo.png",
    },

    {
        id: "Polo Kenzo Blanco",
        nombre: "Polo Kenzo Blanco",
        precio: 49.99,
        imagen: "Kenzo/Polo Kenzo Blanco.png",
    },

    {
        id: "Polo Kenzo Negro",
        nombre: "Polo Kenzo Negro",
        precio: 49.99,
        imagen: "Kenzo/Polo Kenzo Negro.png",
    },

    {
        id: "Polo Kenzo Verde",
        nombre: "Polo Kenzo Verde",
        precio: 49.99,
        imagen: "Kenzo/Polo Kenzo Verde.png",
    },

    {
        id: "Pantalón Chandal Kenzo Negro",
        nombre: "Pantalón Chandal Kenzo Negro",
        precio: 39.99,
        imagen: "Kenzo/Pantalón Chandal Kenzo Negro.png",
    },

     //Productos Dior

     {
        id: "Camiseta Blanca Dior clip 850",
        nombre: "Camiseta Blanca Dior Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Blanca Dior clip 850.png",
    },

    {
        id: "Camiseta Blanca Dior Logo Dorado 857",
        nombre: "Camiseta Blanca Dior Logo Dorado",
        precio: 39.99,
        imagen: "Dior/Camiseta Blanca Dior Logo Dorado 857.png",
    },

    {
        id: "Camiseta Blanca Dior Logo negro clip 820",
        nombre: "Camiseta Blanca Dior Logo Negro Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Blanca Dior Logo negro clip 820.png",
    },

    {
        id: "Camiseta Blanca Dior Logo Rosa Clip 671",
        nombre: "Camiseta Blanca Dior Logo Rosa Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Blanca Dior Logo Rosa Clip 671.png",
    },

    {
        id: "Camiseta Negra Dior Aureola L007",
        nombre: "Camiseta Negra Dior Aureola",
        precio: 39.99,
        imagen: "Dior/Camiseta Negra Dior Aureola L007.png",
    },

    {
        id: "Camiseta Negra Dior clip 850",
        nombre: "Camiseta Negra Dior Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Negra Dior clip 850.png",
    },

    {
        id: "Camiseta Negra Dior Logo Blanco Clip 820",
        nombre: "Camiseta Negra Dior Logo Blanco Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Negra Dior Logo Blanco Clip 820.png",
    },

    {
        id: "Camiseta Negra Dior Logo Rosa Clip 671",
        nombre: "Camiseta Negra Dior Logo Rosa Clip",
        precio: 39.99,
        imagen: "Dior/Camiseta Negra Dior Logo Rosa Clip 671.png",
    },

    {
        id: "Camiseta Negra Logo Dior blanco 857",
        nombre: "Camiseta Negra Logo Dior Blanco",
        precio: 39.99,
        imagen: "Dior/Camiseta Negra Logo Dior blanco 857.png",
    },

    {
        id: "Sudadera Blanca Christian Dior 750",
        nombre: "Sudadera Blanca Christian Dior",
        precio: 49.99,
        imagen: "Dior/Sudadera Blanca Christian Dior 750.png",
    },

    {
        id: "Sudadera Blanca Dior Logo Clip 811",
        nombre: "Sudadera Negra Christian Dior",
        precio: 49.99,
        imagen: "Dior/Sudadera Negra Christian Dior 750.png",
    },

    {
        id: "Sudadera Blanca Dior Logo Clip 811",
        nombre: "Sudadera Blanca Dior Logo Clip",
        precio: 49.99,
        imagen: "Dior/Sudadera Blanca Dior Logo Clip 811.png",
    },

    {
        id: "Sudadera Negra Dior Logo Clip 811",
        nombre: "Sudadera Negra Dior Logo Clip",
        precio: 49.99,
        imagen: "Dior/Sudadera Negra Dior Logo Clip 811.png",
    },

    {
        id: "Sudadera Dior Logo Azul 761",
        nombre: "Sudadera Dior Logo Azul",
        precio: 49.99,
        imagen: "Dior/Sudadera Dior Logo Azul 761.png",
    },

    {
        id: "Sudadera Negra Christian Dior Capucha 726",
        nombre: "Sudadera Negra Christian Dior Capucha",
        precio: 49.99,
        imagen: "Dior/Sudadera Negra Christian Dior Capucha 726.png",
    },

    {
        id: "Sudadera Blanca Christian Dior Capucha 726",
        nombre: "Sudadera Blanca Christian Dior Capucha",
        precio: 49.99,
        imagen: "Dior/Sudadera Blanca Christian Dior Capucha 726.png",
    },

    {
        id: "Sudadera Negra Dior Banda Blanca Mangas 711",
        nombre: "Sudadera Negra Dior Banda Blanca Mangas",
        precio: 49.99,
        imagen: "Dior/Sudadera Negra Dior Banda Blanca Mangas 711.png",
    },

    {
        id: "Sudadera Blanca Dior Banda Negra Mangas 711",
        nombre: "Sudadera Blanca Dior Banda Negra Mangas",
        precio: 49.99,
        imagen: "Dior/Sudadera Blanca Dior Banda Negra Mangas 711.png",
    },

    {
        id: "Pantalón Gris Dior 2023S",
        nombre: "Pantalón Gris Dior",
        precio: 39.99,
        imagen: "Dior/Pantalón Gris Dior 2023S.png",
    },

    {
        id: "Pantalón Negro Dior 2023S",
        nombre: "Pantalón Negro Dior",
        precio: 39.99,
        imagen: "Dior/Pantalón Negro Dior 2023S.png",
    },

    {
        id: "Pantalón Beis Dior 2023S",
        nombre: "Pantalón Beige Dior",
        precio: 39.99,
        imagen: "Dior/Pantalón Beis Dior 2023S.png",
    },

    {
        id: "Pantalón Blanco Dior Logo Azul 2023SS",
        nombre: "Pantalón Blanco Dior Logo Azul",
        precio: 37.99,
        imagen: "Dior/Pantalón Blanco Dior Logo Azul 2023SS.png",
    },

    {
        id: "Pantalón Negro Dior Banda Lateral Estamp 9",
        nombre: "Pantalón Negro Dior Banda Lateral Estampado",
        precio: 39.99,
        imagen: "Dior/Pantalón Negro Dior Banda Lateral Estamp 9.png",
    },
    
    {
        id: "Bañador Blanco y Negro Logo Dior G69",
        nombre: "Bañador Blanco y Negro Logo Dior",
        precio: 35.99,
        imagen: "Dior/Bañador Blanco y Negro Logo Dior G69.png",
    },

    {
        id: "Bañador Dior Blanco y Azul Marino 9",
        nombre: "Bañador Dior Blanco y Azul Marino",
        precio: 35.99,
        imagen: "Dior/Bañador Dior Blanco y Azul Marino 9.png",
    },

    {
        id: "Bañador Morado Dior Degradado 1318",
        nombre: "Bañador Morado Dior Degradado",
        precio: 35.99,
        imagen: "Dior/Bañador Morado Dior Degradado 1318.png",
    },

//Productos Gucci

{
    id: "Camiseta Blanca 1921 Gucci 825",
    nombre: "Camiseta Blanca 1921 Gucci",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca 1921 Gucci 825.png",
},

{
    id: "Camiseta Negra Gucci Banda Dorada Manga 838",
    nombre: "Camiseta Negra Gucci Banda Dorada Manga",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Gucci Banda Dorada Manga 838.png",
},

{
    id: "Camiseta Blanca con Mangas Azules Gucci 840",
    nombre: "Camiseta Blanca con Mangas Azules Gucci",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca con Mangas Azules Gucci 840.png",
},

{
    id: "Camiseta Negra Gucci Conejos Multicolor 842",
    nombre: "Camiseta Negra Gucci Conejos Multicolor",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Gucci Conejos Multicolor 842.png",
},

{
    id: "Camiseta Blanca Gucci con Banda Dorada Mangas 838",
    nombre: "Camiseta Blanca Gucci con Banda Dorada Mangas",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Gucci con Banda Dorada Mangas 838.png",
},

{
    id: "Camiseta Negra Gucci Labial Verde 863",
    nombre: "Camiseta Negra Gucci Labial Verde",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Gucci Labial Verde 863.png",
},

{
    id: "Camiseta Blanca Gucci Logo Negro Básica 821",
    nombre: "Camiseta Blanca Gucci Logo Negro Básica",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Gucci Logo Negro Básica 821.png",
},

{
    id: "Camiseta Negra Gucci Logo Blanco Básica 821",
    nombre: "Camiseta Negra Gucci Logo Blanco Básica",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Gucci Logo Blanco Básica 821.png",
},

{
    id: "Camiseta Blanca Gucci Logo Rosa y Verde 836",
    nombre: "Camiseta Blanca Gucci Logo Rosa y Verde 836",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Gucci Logo Rosa y Verde 836.png",
},

{
    id: "Camiseta Negra Gucci Logo Verde Oso",
    nombre: "Camiseta Negra Gucci Logo Verde Oso",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Gucci Logo Verde Oso.png",
},

{
    id: "Camiseta Blanca Gucci Logo Verde Oso",
    nombre: "Camiseta Blanca Gucci Logo Verde Oso",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Gucci Logo Verde Oso.png",
},

{
    id: "Camiseta Negra Logo Verde 822",
    nombre: "Camiseta Negra Logo Verde",
    precio: 39.99,
    imagen: "Gucci/Camiseta Negra Logo Verde 822.png",
},

{
    id: "Camiseta Blanca Logo Gucci Verde 822",
    nombre: "Camiseta Blanca Logo Gucci Verde",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Logo Gucci Verde 822.png",
},

{
    id: "Camiseta Blanca Logo Rojo Con Bandas Roja y Azul Gucci 839",
    nombre: "Camiseta Blanca Logo Rojo Con Bandas Roja y Azul Gucci",
    precio: 39.99,
    imagen: "Gucci/Camiseta Blanca Logo Rojo Con Bandas Roja y Azul Gucci 839.png",
},

{
    id: "Polo Rojo Gucci Logo Azul 8",
    nombre: "Polo Rojo Gucci Logo Azul",
    precio: 39.99,
    imagen: "Gucci/Polo Rojo Gucci Logo Azul 8.png",
},

{
    id: "Polo Negro Gucci",
    nombre: "Polo Negro Gucci",
    precio: 39.99,
    imagen: "Gucci/Polo Negro Gucci.png",
},

{
    id: "Polo Blanco Gucci",
    nombre: "Polo Blanco Gucci",
    precio: 39.99,
    imagen: "Gucci/Polo Blanco Gucci.png",
},

{
    id: "Pantalón Negro Gucci Banda Roja y Verde",
    nombre: "Pantalón Negro Gucci Banda Roja y Verde",
    precio: 35.99,
    imagen: "Gucci/Pantalón Negro Gucci Banda Roja y Verde.png",
},

{
    id: "Pantalón Marrón Gucci",
    nombre: "Pantalón Marrón Gucci",
    precio: 35.99,
    imagen: "Gucci/Pantalón Marrón Gucci.png",
},

{
    id: "Pantalón Negro Gucci Banda Gris",
    nombre: "Pantalón Negro Gucci Banda Gris",
    precio: 35.99,
    imagen: "Gucci/Pantalón Negro Gucci Banda Gris.png",
},

{
    id: "Sudadera Blanca Gucci Banda Verde y Roja 704",
    nombre: "Sudadera Blanca Gucci Banda Verde y Roja",
    precio: 49.99,
    imagen: "Gucci/Pantalón Negro Gucci Banda Gris.png",
},

{
    id: "Sudadera Negra Gucci Banda Verde y Roja 709",
    nombre: "Sudadera Negra Gucci Banda Verde y Roja",
    precio: 49.99,
    imagen: "Gucci/Pantalón Negro Gucci Banda GriSudadera Negra Gucci Banda Verde y Roja 709s.png",
},

//Productos Adidas

{
    id: "Camiseta Blanca Adidas Logo Peq Negro AB6",
    nombre: "Camiseta Blanca Adidas Logo Peq Negro",
    precio: 34.99,
    imagen: "Adidas/Camiseta Blanca Adidas Logo Peq Negro AB6.png",
},

{
    id: "Camiseta Negra Adidas Logo Peq Blanco AB6",
    nombre: "Camiseta Negra Adidas Logo Peq Blanco",
    precio: 34.99,
    imagen: "Adidas/Camiseta Negra Adidas Logo Peq Blanco AB6.png",
},

{
    id: "Camiseta Gris Adidas Logo Peq Negro AB6",
    nombre: "Camiseta Gris Adidas Logo Peq Negro",
    precio: 34.99,
    imagen: "Adidas/Camiseta Gris Adidas Logo Peq Negro AB6.png",
},

{
    id: "Camiseta Negra Adidas Logo Basketball",
    nombre: "Camiseta Negra Adidas Logo Basketball",
    precio: 34.99,
    imagen: "Adidas/Camiseta Negra Adidas Logo Basketball.png",
},

{
    id: "Camiseta Blanca Logo Negro Adidas X Balenciaga Q019",
    nombre: "Camiseta Blanca Logo Negro Adidas X Balenciaga",
    precio: 39.99,
    imagen: "Adidas/Camiseta Blanca Logo Negro Adidas X Balenciaga Q019.png",
},

{
    id: "Camiseta Negra Logo Blanco Adidas X Balenciaga Q020",
    nombre: "Camiseta Negra Logo Blanco Adidas X Balenciaga",
    precio: 39.99,
    imagen: "Adidas/Camiseta Negra Logo Blanco Adidas X Balenciaga Q020.png",
},

{
    id: "Camiseta Blanca Logo Azul Adidas X Gucci 30",
    nombre: "Camiseta Blanca Logo Azul Adidas X Gucci",
    precio: 39.99,
    imagen: "Adidas/Camiseta Blanca Logo Azul Adidas X Gucci 30.png",
},

{
    id: "Camiseta Negra Logo Azul Adidas X Gucci 30",
    nombre: "Camiseta Negra Logo Azul Adidas X Gucci",
    precio: 39.99,
    imagen: "Adidas/Camiseta Negra Logo Azul Adidas X Gucci 30.png",
},

{
    id: "Pantalón Gris Adidas Básico",
    nombre: "Pantalón Gris Adidas Básico",
    precio: 39.99,
    imagen: "Adidas/Pantalón Gris Adidas Básico.png",
},

{
    id: "Pantalón Adidas Negro Básico",
    nombre: "Pantalón Adidas Negro Básico",
    precio: 35.99,
    imagen: "Adidas/Pantalón Adidas Negro Básico.png",
},

{
    id: "Chaqueta Adidas Negra",
    nombre: "Chaqueta Adidas Negra",
    precio: 45.99,
    imagen: "Adidas/Chaqueta Adidas Negra.png",
},

{
    id: "Chaqueta Adidas Azul Marino",
    nombre: "Chaqueta Adidas Azul Marino",
    precio: 45.99,
    imagen: "Adidas/Chaqueta Adidas Azul Marino.png",
},

{
    id: "Chaqueta Adidas Negra Logo Grande",
    nombre: "Chaqueta Adidas Negra Logo Grande",
    precio: 45.99,
    imagen: "Adidas/Chaqueta Adidas Negra Logo Grande.png",
},

//Productos Louis Vuitton

{
    id: "Camiseta Blanca LV Logo Negro 9",
    nombre: "Camiseta Blanca Louis Vuitton Logo Negro",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Blanca LV Logo Negro 9.png",
},

{
    id: "Camiseta Negra LV Logo Blanco 9145",
    nombre: "Camiseta Negra Louis Vuitton Logo Blanco",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Negra LV Logo Blanco 9145.png",
},

{
    id: "Camiseta LV Beig 8221",
    nombre: "Camiseta Louis Vuitton Beige",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta LV Beig 8221.png",
},

{
    id: "Camiseta LV Morada 8221",
    nombre: "Camiseta Louis Vuitton Morada",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta LV Morada 8221.png",
},

{
    id: "Camiseta Negra LV Bugs Bunny",
    nombre: "Camiseta Negra LV Bugs Bunny",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Negra LV Bugs Bunny.png",
},

{
    id: "Camiseta Blanca LV Letra Rosa",
    nombre: "Camiseta Blanca LV Letra Rosa",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Blanca LV Letra Rosa.png",
},

{
    id: "Camiseta Negra LV Logo Grande",
    nombre: "Camiseta Negra LV Logo Grande",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Negra LV Logo Grande.png",
},

{
    id: "Camiseta Blanca LV Logo Grande",
    nombre: "Camiseta Blanca LV Logo Grande",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Blanca LV Logo Grande.png",
},

{
    id: "Camiseta Negra LV Bolsillo Estamp",
    nombre: "Camiseta Negra Louis Vuitton Bolsillo Estampado",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Negra LV Bolsillo Estamp.png",
},

{
    id: "Camiseta Blanca LV Banda Cuadros 8848",
    nombre: "Camiseta Blanca Louis Vuitton Banda Cuadros",
    precio: 39.99,
    imagen: "Louis Vuitton/Camiseta Blanca LV Banda Cuadros 8848.png",
},

{
    id: "Pantalón Negro LV 12",
    nombre: "Pantalón Negro Louis Vuitton",
    precio: 35.99,
    imagen: "Louis Vuitton/Pantalón Negro LV 12.png",
},

{
    id: "Short Estampado Geométrico B&W LV",
    nombre: "Short Estampado Geométrico B&W LV",
    precio: 35.99,
    imagen: "Louis Vuitton/Short Estampado Geométrico B&W LV.png",
},

{
    id: "Camiseta Blanca Prada Nudo",
    nombre: "Camiseta Blanca Prada Nudo",
    precio: 39.99,
    imagen: "Prada/Camiseta Blanca Prada Nudo.png",
},

{
    id: "Camiseta Negra Prada Nudo",
    nombre: "Camiseta Negra Prada Nudo",
    precio: 39.99,
    imagen: "Prada/Camiseta Negra Prada Nudo.png",
},

{
    id: "Camiseta Blanca Logo Prada Negro",
    nombre: "Camiseta Blanca Logo Prada Negro",
    precio: 39.99,
    imagen: "Prada/Camiseta Blanca Logo Prada Negro.png",
},

{
    id: "Camiseta Negra Logo Prada Blanco",
    nombre: "Camiseta Negra Logo Prada Blanco",
    precio: 39.99,
    imagen: "Prada/Camiseta Negra Logo Prada Blanco.png",
},

{
    id: "Camiseta Blanca Prada Logo Azul",
    nombre: "Camiseta Blanca Prada Logo Azul",
    precio: 39.99,
    imagen: "Prada/Camiseta Blanca Prada Logo Azul.png",
},

{
    id: "Camiseta Negra Prada Logo Azul",
    nombre: "Camiseta Negra Prada Logo Azul",
    precio: 39.99,
    imagen: "Prada/Camiseta Negra Prada Logo Azul.png",
},

{
    id: "Camiseta Blanca Prada Logo Negro Centro",
    nombre: "Camiseta Blanca Prada Logo Negro Centro",
    precio: 39.99,
    imagen: "Prada/Camiseta Blanca Prada Logo Negro Centro.png",
},

{
    id: "Camiseta Negra Prada Logo Blanco Centro",
    nombre: "Camiseta Negra Prada Logo Blanco Centro",
    precio: 39.99,
    imagen: "Prada/Camiseta Negra Prada Logo Blanco Centro.png",
},

{
    id: "Camiseta Gris Prada",
    nombre: "Camiseta Gris Prada",
    precio: 39.99,
    imagen: "Prada/Camiseta Gris Prada.png",
},

{
    id: "Camiseta Blanca Tirantes Prada",
    nombre: "Camiseta Blanca Tirantes Prada",
    precio: 37.99,
    imagen: "Prada/Camiseta Blanca Tirantes Prada.png",
},

{
    id: "Polo Blanco Borde Negro Prada",
    nombre: "Polo Blanco Borde Negro Prada",
    precio: 49.99,
    imagen: "Prada/Polo Blanco Borde Negro Prada.png",
},

{
    id: "Polo Negro Borde Blanco Prada",
    nombre: "Polo Negro Borde Blanco Prada",
    precio: 49.99,
    imagen: "Prada/Polo Negro Borde Blanco Prada.png",
},

{
    id: "Pantalon Negro Banda Prada",
    nombre: "Pantalon Negro Banda Prada",
    precio: 34.99,
    imagen: "Prada/Pantalon Negro Banda Prada.png",
},

//Productos The North Face

{
    id: "Camiseta Blanca The North Face",
    nombre: "Camiseta Blanca The North Face",
    precio: 39.99,
    imagen: "The North Face/Camiseta Blanca The North Face.png",
},

{
    id: "Camiseta Crema The North Face",
    nombre: "Camiseta Crema The North Face",
    precio: 39.99,
    imagen: "The North Face/Camiseta Crema The North Face.png",
},

{
    id: "Camiseta Negra The North Face",
    nombre: "Camiseta Negra The North Face",
    precio: 39.99,
    imagen: "The North Face/Camiseta Negra The North Face.png",
},

{
    id: "Camiseta Blanca Logo Rojo TNF X Gucci",
    nombre: "Camiseta Blanca Logo Rojo TNF X Gucci",
    precio: 39.99,
    imagen: "The North Face/Camiseta Blanca Logo Rojo TNF X Gucci.png",
},

{
    id: "Camiseta Marrón TNF X Gucci",
    nombre: "Camiseta Marrón TNF X Gucci",
    precio: 39.99,
    imagen: "The North Face/Camiseta Marrón  TNF X Gucci.png",
},

{
    id: "Camiseta Negra Logo Amarillo TNF X Gucci",
    nombre: "Camiseta Negra Logo Amarillo TNF X Gucci",
    precio: 39.99,
    imagen: "The North Face/Camiseta Negra Logo Amarillo TNF X Gucci.png",
},

{
    id: "Camiseta Negra Logo Blanco TNF X Gucci",
    nombre: "Camiseta Negra Logo Blanco TNF X Gucci",
    precio: 39.99,
    imagen: "The North Face/Camiseta Negra Logo Blanco TNF X Gucci.png",
},

{
    id: "Camiseta Negra TNF X Gucci Multicolor",
    nombre: "Camiseta Negra TNF X Gucci Multicolor",
    precio: 39.99,
    imagen: "The North Face/Camiseta Negra TNF X Gucci Multicolor.png",
},

{
    id: "Chaquetón Negro-Azul The North Face",
    nombre: "Chaquetón Negro-Azul The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Azul The North Face.png",
},

{
    id: "Chaquetón Negro-Verde The North Face",
    nombre: "Chaquetón Negro-Verde The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Verde The North Face.png",
},

{
    id: "Chaquetón Negro-Morado The North Face",
    nombre: "Chaquetón Negro-Morado The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Morado The North Face.png",
},

{
    id: "Chaquetón Negro-Gris The North Face",
    nombre: "Chaquetón Negro-Gris The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Gris The North Face.png",
},

{
    id: "Chaquetón Negro-Amarillo The North Face",
    nombre: "Chaquetón Negro-Amarillo The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Amarillo The North Face.png",
},

{
    id: "Chaquetón Negro-Rojo The North Face",
    nombre: "Chaquetón Negro-Rojo The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Rojo The North Face.png",
},

{
    id: "Chaquetón Negro-Azul Marino The North Face",
    nombre: "Chaquetón Negro-Azul Marino The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro-Azul Marino The North Face.png",
},

{
    id: "Chaquetón Negro The North Face",
    nombre: "Chaquetón Negro The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Negro The North Face.png",
},

{
    id: "Chaquetón Granate-Rosa The North Face",
    nombre: "Chaquetón Granate-Rosa The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Granate-Rosa The North Face.png",
},

{
    id: "Chaquetón Verde The North Face",
    nombre: "Chaquetón Verde The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Verde The North Face.png",
},

{
    id: "Chaquetón Beige The North Face",
    nombre: "Chaquetón Beige The North Face",
    precio: 55,
    imagen: "The North Face/Chaquetón Beige The North Face.png",
},

{
    id: "Chaqueta Blanca y Negro Botones The North Face",
    nombre: "Chaqueta Blanca y Negro Botones The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Blanca y Negro Botones The North Face.png",
},

{
    id: "Chaqueta Verde y Negro Botones The North Face",
    nombre: "Chaqueta Verde y Negro Botones The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Verde y Negro Botones The North Face.png",
},

{
    id: "Chaqueta Mostaza y Negro Botones The North Face",
    nombre: "Chaqueta Mostaza y Negro Botones The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Mostaza y Negro Botones The North Face.png",
},

{
    id: "Chaqueta Rosa y Negro Botones The North Face",
    nombre: "Chaqueta Rosa y Negro Botones The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Rosa y Negro Botones The North Face.png",
},

{
    id: "Chaqueta Verde Capucha The North Face",
    nombre: "Chaqueta Verde Capucha The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Verde Capucha The North Face.png",
},

{
    id: "Chaqueta Blanca Capucha The North Face",
    nombre: "Chaqueta Blanca Capucha The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Blanca Capucha The North Face.png",
},

{
    id: "Chaqueta Gris Capucha The North Face",
    nombre: "Chaqueta Gris Capucha The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Gris Capucha The North Face.png",
},

{
    id: "Chaqueta Marrón Capucha The North Face",
    nombre: "Chaqueta Marrón Capucha The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Marrón Capucha The North Face.png",
},

{
    id: "Chaqueta Marrón Capucha The North Face",
    nombre: "Chaqueta Marrón Capucha The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Negra Capucha The North Face.png",
},

{
    id: "Chaqueta Gris Estampada The North Face",
    nombre: "Chaqueta Gris Estampada The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Gris Estampada The North Face.png",
},

{
    id: "Chaqueta Marrón Estampada The North Face",
    nombre: "Chaqueta Marrón Estampada The North Face",
    precio: 55,
    imagen: "The North Face/Chaqueta Marrón Estampada The North Face.png",
},

//Productos Nike

{
    id: "Camiseta Blanca Nike Grafitti Logo Negro y Rojo Centro",
    nombre: "Camiseta Blanca Nike Grafitti Logo Negro y Rojo Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Blanca Nike Grafitti Logo Negro y Rojo Centro.png",
},

{
    id: "Camiseta Negra Nike Grafitti Logo Negro y Rojo Centro",
    nombre: "Camiseta Negra Nike Grafitti Logo Negro y Rojo Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Negra Nike Grafitti Logo Negro y Rojo Centro.png",
},

{
    id: "Camiseta Gris Nike Grafitti Logo Negro y Rojo Centro",
    nombre: "Camiseta Gris Nike Grafitti Logo Negro y Rojo Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Gris Nike Grafitti Logo Negro y Rojo Centro.png",
},

{
    id: "Camiseta Blanca Nike Logo Naranja",
    nombre: "Camiseta Blanca Nike Logo Naranja",
    precio: 39.99,
    imagen: "Nike/Camiseta Blanca Nike Logo Naranja.png",
},

{
    id: "Camiseta Negra Nike Logo Naranja",
    nombre: "Camiseta Negra Nike Logo Naranja",
    precio: 39.99,
    imagen: "Nike/Camiseta Negra Nike Logo Naranja.png",
},

{
    id: "Camiseta Blanca Nike Logo Mariposas",
    nombre: "Camiseta Blanca Nike Logo Mariposas",
    precio: 39.99,
    imagen: "Nike/Camiseta Blanca Nike Logo Mariposas.png",
},

{
    id: "Camiseta Negra Nike Logo Mariposas",
    nombre: "Camiseta Negra Nike Logo Mariposas",
    precio: 39.99,
    imagen: "Nike/Camiseta Negra Nike Logo Mariposas.png",
},

{
    id: "Camiseta Negra Nike Logo Blanco y Granate",
    nombre: "Camiseta Negra Nike Logo Blanco y Granate",
    precio: 39.99,
    imagen: "Nike/Camiseta Negra Nike Logo Blanco y Granate.png",
},

{
    id: "Camiseta Blanca Nike Logo Negro Centro",
    nombre: "Camiseta Blanca Nike Logo Negro Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Blanca Nike Logo Negro Centro.png",
},

{
    id: "Camiseta Gris Nike Logo Negro Centro",
    nombre: "Camiseta Gris Nike Logo Negro Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Gris Nike Logo Negro Centro.png",
},

{
    id: "Camiseta Negra Nike Logo Blanco Centro",
    nombre: "Camiseta Negra Nike Logo Blanco Centro",
    precio: 39.99,
    imagen: "Nike/Camiseta Negra Nike Logo Blanco Centro.png",
},

{
    id: "Shorts Beige Nike Just Do It",
    nombre: "Shorts Beige Nike Just Do It",
    precio: 39.99,
    imagen: "Nike/Shorts Beige Nike Just Do It.png",
},

{
    id: "Shorts Negro Nike Just Do It",
    nombre: "Shorts Negro Nike Just Do It",
    precio: 39.99,
    imagen: "Nike/Shorts Negro Nike Just Do It.png",
},

{
    id: "Shorts Verde Nike Just Do It",
    nombre: "Shorts Verde Nike Just Do It",
    precio: 39.99,
    imagen: "Nike/Shorts Verde Nike Just Do It.png",
},

{
    id: "Short Azul Marino Nike Con Cuerda",
    nombre: "Short Azul Marino Nike Con Cuerda",
    precio: 39.99,
    imagen: "Nike/Short Azul Marino Nike Con Cuerda.png",
},

{
    id: "Short Marrón Nike Con Cuerda",
    nombre: "Short Marrón Nike Con Cuerda",
    precio: 39.99,
    imagen: "Nike/Short Marrón Nike Con Cuerda.png",
},

{
    id: "Short Negro Nike Con Cuerda",
    nombre: "Short Negro Nike Con Cuerda",
    precio: 39.99,
    imagen: "Nike/Short Negro Nike Con Cuerda.png",
},

{
    id: "Short Gris Nike Logo Blanco",
    nombre: "Short Gris Nike Logo Blanco",
    precio: 39.99,
    imagen: "Nike/Short Gris Nike Logo Blanco.png",
},

{
    id: "Short Negro Nike Logo Blanco",
    nombre: "Short Negro Nike Logo Blanco",
    precio: 39.99,
    imagen: "Nike/Short Negro Nike Logo Negro.png",
},

{
    id: "Short Blanco Nike Logo Negro",
    nombre: "Short Blanco Nike Logo Negro",
    precio: 39.99,
    imagen: "Nike/Short Blanco Nike Logo Negro.png",
},

{
    id: "Pantalón Beige Logo Nike",
    nombre: "Pantalón Beige Logo Nike",
    precio: 39.99,
    imagen: "Nike/Pantalón Beige Logo Nike.png",
},

{
    id: "Pantalón Gris Logo Nike",
    nombre: "Pantalón Gris Logo Nike",
    precio: 39.99,
    imagen: "Nike/Pantalón Gris Logo Nike.png",
},

{
    id: "Pantalón Negro Logo Nike",
    nombre: "Pantalón Negro Logo Nike",
    precio: 39.99,
    imagen: "Nike/Pantalón Negro Logo Nike.png",
},

//Productos Zapatillas Nike Jordan

{
    id: "Jordan 1 Air High Blanco y Negro",
    nombre: "Jordan 1 Air High Blanco y Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Blanco y Negro.png",
},

{
    id: "Jordan 1 Air High Granate- Amarillo- Blanco",
    nombre: "Jordan 1 Air High Granate- Amarillo- Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Granate- Amarillo- Blanco.png",
},

{
    id: "Jordan 1 Air High Azul- Blanco- Negro",
    nombre: "Jordan 1 Air High Azul- Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Azul- Blanco- Negro.png",
},

{
    id: "Jordan 1 Air High Rojo-Negro",
    nombre: "Jordan 1 Air High Rojo-Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Rojo-Negro.png",
},

{
    id: "Jordan 1 Air High Total White",
    nombre: "Jordan 1 Air High Total White",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Total White.png",
},

{
    id: "Jordan 1 Air High Violeta- Rosa- Blanco",
    nombre: "Jordan 1 Air High Violeta- Rosa- Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Violeta- Rosa- Blanco.png",
},

{
    id: "Total Black Suela Blanca",
    nombre: "Jordan 1 Air High Total Black Suela Blanca",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Total Black Suela Blanca.png",
},

{
    id: "Jordan 1 Air High Azul Cielo- Blanco- Negro",
    nombre: "Jordan 1 Air High Azul Cielo- Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Azul Cielo- Blanco- Negro.png",
},

{
    id: "Jordan 1 Air High Blanco Reborde Negro",
    nombre: "Jordan 1 Air High Blanco Reborde Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Blanco Reborde Negro.png",
},

{
    id: "Jordan 1 Air High Negro Logo Gris",
    nombre: "Jordan 1 Air High Negro Logo Gris",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Negro Logo Gris.png",
},

{
    id: "Jordan 1 Air High Total Red",
    nombre: "Jordan 1 Air High Total Red",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Total Red.png",
},

{
    id: "Jordan 1 Air High Rosa-Marron",
    nombre: "Jordan 1 Air High Rosa-Marron",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Rosa-Marron.png",
},

{
    id: "Jordan 1 Air High Blanco- Gris",
    nombre: "Jordan 1 Air High Blanco- Gris",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Blanco- Gris.png",
},

{
    id: "Jordan 1 Air High Amarillo- Blanco- Negro",
    nombre: "Jordan 1 Air High Amarillo- Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Amarillo- Blanco- Negro.png",
},

{
    id: "Jordan 1 Air High Blanco- Morado",
    nombre: "Jordan 1 Air High Blanco- Morado",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air High Blanco- Morado.png",
},

{
    id: "Jordan 1 Air Low Tonos Verdes",
    nombre: "Jordan 1 Air Low Tonos Verdes",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Tonos Verdes.png",
},

{
    id: "Jordan 1 Air Low Blanco y Negro",
    nombre: "Jordan 1 Air Low Blanco y Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Blanco y Negro.png",
},

{
    id: "Jordan 1 Air Low Rojo- Negro Logo Blanco",
    nombre: "Jordan 1 Air Low Rojo- Negro Logo Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Rojo- Negro Logo Blanco.png",
},

{
    id: "Jordan 1 Air Low Negro y Azul Marino",
    nombre: "Jordan 1 Air Low Negro y Azul Marino",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Negro y Azul Marino.png",
},

{
    id: "Jordan 1 Air Low Amarillo- Blanco- Negro",
    nombre: "Jordan 1 Air Low Amarillo- Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Amarillo- Blanco- Negro.png",
},

{
    id: "Jordan 1 Air Low Azul Cielo y Blanco",
    nombre: "Jordan 1 Air Low Azul Cielo y Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Azul Cielo y Blanco.png",
},

{
    id: "Jordan 1 Air Low Verde Agua - Blanco Logo Gris",
    nombre: "Jordan 1 Air Low Verde Agua - Blanco Logo Gris",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Verde Agua - Blanco Logo Gris.png",
},

{
    id: "Jordan 1 Air Low Blanco- Logo Negro Suela Roja",
    nombre: "Jordan 1 Air Low Blanco- Logo Negro Suela Roja",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Blanco- Logo Negro Suela Roja.png",
},

{
    id: "Jordan 1 Air Low Marron- Blanco- Negro",
    nombre: "Jordan 1 Air Low Marron- Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Marron- Blanco- Negro.png",
},

{
    id: "Jordan 1 Air Low Amarillo Pastel",
    nombre: "Jordan 1 Air Low Amarillo Pastel",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Amarillo Pastel.png",
},

{
    id: "Jordan 1 Air Low Azul Marino y Blanco",
    nombre: "Jordan 1 Air Low Azul Marino y Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Azul Marino y Blanco.png",
},

{
    id: "Jordan 1 Air Low Tonos Rosas",
    nombre: "Jordan 1 Air Low Tonos Rosas",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Tonos Rosas.png",
},

{
    id: "Jordan 1 Air Low Granate y Negro",
    nombre: "Jordan 1 Air Low Granate y Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Granate y Negro.png",
},

{
    id: "Jordan 1 Air Low Verde Agua",
    nombre: "Jordan 1 Air Low Verde Agua",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Verde Agua.png",
},

{
    id: "Jordan 1 Air Low Mostaza y Blanco",
    nombre: "Jordan 1 Air Low Mostaza y Blanco",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan 1 Air Low Mostaza y Blanco.png",
},

{
    id: "Jordan Air 3 Blanco Borde Negro",
    nombre: "Jordan Air 3 Blanco Borde Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco Borde Negro.png",
},

{
    id: "Jordan Air 3 Blanco Estampado Gris- Azul",
    nombre: "Jordan Air 3 Blanco Estampado Gris- Azul",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco Estampado Gris- Azul.png",
},

{
    id: "Jordan Air 3 Blanco- Negro",
    nombre: "Jordan Air 3 Blanco- Negro",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco- Negro.png",
},

{
    id: "Jordan Air 3 Blanco Estampado Gris",
    nombre: "Jordan Air 3 Blanco Estampado Gris",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco Estampado Gris.png",
},

{
    id: "Jordan Air 3 Blanco- Rosa",
    nombre: "Jordan Air 3 Blanco- Rosa",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco- Rosa.png",
},

{
    id: "Jordan Air 3 Blanco-Rojo",
    nombre: "Jordan Air 3 Blanco-Rojo",
    precio: 69.99,
    imagen: "Zapatillas Jordan/Jordan Air 3 Blanco-Rojo.png",
},

//Productos Moncler

{
    id: "Camiseta Blanca Moncler Logo Amarillo",
    nombre: "Camiseta Blanca Moncler Logo Amarillo",
    precio: 39.99,
    imagen: "Moncler/Camiseta Blanca Moncler Logo Amarillo.png",
},

{
    id: "Camiseta Negra Moncler Logo Amarillo",
    nombre: "Camiseta Negra Moncler Logo Amarillo",
    precio: 39.99,
    imagen: "Moncler/Camiseta Negra Moncler Logo Amarillo.png",
},

{
    id: "Camiseta Blanca Moncler Logo",
    nombre: "Camiseta Blanca Moncler Logo",
    precio: 39.99,
    imagen: "Moncler/Camiseta Blanca Moncler Logo.png",
},

{
    id: "Camiseta Verde Moncler Logo Cuello",
    nombre: "Camiseta Verde Moncler Logo Cuello",
    precio: 39.99,
    imagen: "Moncler/Camiseta Verde Moncler Logo Cuello.png",
},

{
    id: "Camiseta Roja Moncler Logo Cuello",
    nombre: "Camiseta Roja Moncler Logo Cuello",
    precio: 39.99,
    imagen: "Moncler/Camiseta Roja Moncler Logo Cuello.png",
},

{
    id: "Camiseta Blanca Moncler Logo Cuello",
    nombre: "Camiseta Blanca Moncler Logo Cuello",
    precio: 39.99,
    imagen: "Moncler/Camiseta Blanca Moncler Logo Cuello.png",
},

{
    id: "Camiseta Negra Bugs Bunny Moncler",
    nombre: "Camiseta Negra Bugs Bunny Moncler",
    precio: 39.99,
    imagen: "Moncler/Camiseta Negra Bugs Bunny Moncler.png",
},

{
    id: "Camiseta Blanca Moncler Logo Cohete",
    nombre: "Camiseta Blanca Moncler Logo Cohete",
    precio: 39.99,
    imagen: "Moncler/Camiseta Blanca Moncler Logo Cohete.png",
},

{
    id: "Camiseta Negra Moncler Logo Cohete",
    nombre: "Camiseta Negra Moncler Logo Cohete",
    precio: 39.99,
    imagen: "Moncler/Camiseta Negra Moncler Logo Cohete.png",
},

{
    id: "Camiseta Azul Moncler",
    nombre: "Camiseta Azul Moncler",
    precio: 39.99,
    imagen: "Moncler/Camiseta Azul Moncler.png",
},

{
    id: "Polo Blanco Moncler",
    nombre: "Polo Blanco Moncler",
    precio: 49.99,
    imagen: "Moncler/Polo Blanco Moncler.png",
},

{
    id: "Polo Negro Moncler",
    nombre: "Polo Negro Moncler",
    precio: 49.99,
    imagen: "Moncler/Polo Negro Moncler.png",
},

{
    id: "Polo Rojo Moncler",
    nombre: "Polo Rojo Moncler",
    precio: 49.99,
    imagen: "Moncler/Polo Rojo Moncler.png",
},

{
    id: "Polo Azul Marino Moncler",
    nombre: "Polo Azul Marino Moncler",
    precio: 49.99,
    imagen: "Moncler/Polo Azul Marino Moncler.png",
},

{
    id: "Polo Blanco Moncler Con Banda",
    nombre: "Polo Blanco Moncler Con Banda",
    precio: 49.99,
    imagen: "Moncler/Polo Blanco Moncler Con Banda.png",
},

{
    id: "Polo Negro Moncler Con Banda",
    nombre: "Polo Negro Moncler Con Banda",
    precio: 49.99,
    imagen: "Moncler/Polo Negro Moncler Con Banda.png",
},

{
    id: "Short Negro Moncler",
    nombre: "Short Negro Moncler",
    precio: 39.99,
    imagen: "Moncler/Short Negro Moncler.png",
},

{
    id: "Short Gris Moncler",
    nombre: "Short Gris Moncler",
    precio: 39.99,
    imagen: "Moncler/Short Gris Moncler.png",
},

{
    id: "Short Gris Moncler Con Banda",
    nombre: "Short Gris Moncler Con Banda",
    precio: 39.99,
    imagen: "Moncler/Short Gris Moncler Con Banda.png",
},

{
    id: "Short Negro Moncler Con Banda",
    nombre: "Short Negro Moncler Con Banda",
    precio: 39.99,
    imagen: "Moncler/Short Negro Moncler Con Banda.png",
},

{
    id: "Short Beige Logo Moncler",
    nombre: "Short Beige Logo Moncler",
    precio: 39.99,
    imagen: "Moncler/Short Beige Logo Moncler.png",
},

{
    id: "Short Azul Vaquero Logo Moncler",
    nombre: "Short Azul Vaquero Logo Moncler",
    precio: 39.99,
    imagen: "Moncler/Short Azul Vaquero Logo Moncler.png",
},

//Productos Zapatillas Vapormax

{
    id: "Vapormax Blancas",
    nombre: "Vapormax Blancas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blancas 2018.png",
},

{
    id: "Vapormax Rosa- Morado Suela Blanca",
    nombre: "Vapormax Rosa- Morado Suela Blanca",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rosa- Morado Suela Blanca 2018.png",
},

{
    id: "Vapormax Degradado Azul",
    nombre: "Vapormax Degradado Azul",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Degradado Azul 2018.png",
},

{
    id: "Vapormax Moradas",
    nombre: "Vapormax Moradas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Moradas 2018.png",
},

{
    id: "Vapormax Blancas Suela Amarilla",
    nombre: "Vapormax Blancas Suela Amarilla",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blancas Suela Amarilla 2018.png",
},

{
    id: "Vapormax Negras Suela Azul",
    nombre: "Vapormax Negras Suela Azul",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Negras Suela Azul 2018.png",
},

{
    id: "Vapormax Doradas",
    nombre: "Vapormax Doradas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Doradas 2018.png",
},

{
    id: "Vapormax Negras Logo Dorado",
    nombre: "Vapormax Negras Logo Dorado",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Negras  Logo Dorado 2018.png",
},

{
    id: "Vapormax Blanco- Azul",
    nombre: "Vapormax Blanco- Azul",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blanco- Azul 2018.png",
},

{
    id: "Vapormax Verde-Negro",
    nombre: "Vapormax Verde-Negro",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Verde-Negro 2018.png",
},

{
    id: "Vapormax Rosas",
    nombre: "Vapormax Rosas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rosas 2018.png",
},

{
    id: "Vapormax Blancas Suela Azul",
    nombre: "Vapormax Blancas Suela Azul",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blancas Suela Azul 2018.png",
},

{
    id: "Vapormax Amarillas",
    nombre: "Vapormax Amarillas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Amarillas 2018.png",
},

{
    id: "Vapormax Negras Suela Naranja",
    nombre: "Vapormax Negras Suela Naranja",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Negras Suela Naranja 2018.png",
},

{
    id: "Vapormax Rojas",
    nombre: "Vapormax Rojas",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rojas 2018.png",
},

{
    id: "Vapormax Blanco-Negro",
    nombre: "Vapormax Blanco-Negro",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blanco-Negro 2018.png",
},

{
    id: "Vapormax Fucsias",
    nombre: "Vapormax Fucsias",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Fucsias 2018.png",
},

{
    id: "Vapormax Azul Marino Suela Negra",
    nombre: "Vapormax Azul Marino Suela Negra",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Azul Marino Suela Negra 2018.png",
},

{
    id: "Vapormax Gris Flyknit",
    nombre: "Vapormax Gris Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Gris Flyknit.png",
},

{
    id: "Vapormax Morada Flyknit",
    nombre: "Vapormax Morada Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Morada Flyknit.png",
},

{
    id: "Vapormax Verde Flyknit",
    nombre: "Vapormax Verde Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Verde Flyknit.png",
},

{
    id: "Vapormax Blanca Flyknit",
    nombre: "Vapormax Blanca Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blanca Flyknit.png",
},

{
    id: "Vapormax Rosa Flyknit",
    nombre: "Vapormax Rosa Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rosa Flyknit.png",
},

{
    id: "Vapormax Negra Flyknit",
    nombre: "Vapormax Negra Flyknit",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Negra Flyknit.png",
},

{
    id: "Vapormax Amarillo Flyknit 2.0",
    nombre: "Vapormax Amarillo Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Amarillo Flyknit 2.0.png",
},

{
    id: "Vapormax Negro Flyknit 2.0",
    nombre: "Vapormax Negro Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Negro Flyknit 2.0.png",
},

{
    id: "Vapormax Rosa Flyknit 2.0",
    nombre: "Vapormax Rosa Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rosa Flyknit 2.0.png",
},

{
    id: "Vapormax Gris Flyknit 2.0",
    nombre: "Vapormax Gris Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Gris Flyknit 2.0.png",
},

{
    id: "Vapormax Rosa Pastel Flyknit 2.0",
    nombre: "Vapormax Rosa Pastel Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Rosa Pastel Flyknit 2.0.png",
},

{
    id: "Vapormax Blanca Flyknit 2.0",
    nombre: "Vapormax Blanca Flyknit 2.0",
    precio: 69.99,
    imagen: "Zapatillas Vapormax/Vapormax Blanca Flyknit 2.0.png",
},

//Productos Zapatillas Balenciaga

{
    id: "Zapatillas Blanco Suela Multicolor Balenciaga",
    nombre: "Zapatillas Blanco Suela Multicolor Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Blanco Suela Multicolor Balenciaga.png",
},

{
    id: "Zapatillas Granate Balenciaga",
    nombre: "Zapatillas Granate Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Granate Balenciaga.png",
},

{
    id: "Zapatillas Negra Balenciaga",
    nombre: "Zapatillas Negra Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Negra Balenciaga.png",
},

{
    id: "Zapatillas Rosa-Blanco Balenciaga",
    nombre: "Zapatillas Rosa-Blanco Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Rosa-Blanco Balenciaga.png",
},

{
    id: "Zapatillas Multicolor Balenciaga",
    nombre: "Zapatillas Multicolor Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Multicolor Balenciaga.png",
},

{
    id: "Zapatillas Amarilla Balenciaga",
    nombre: "Zapatillas Amarilla Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Amarilla Balenciaga.png",
},

{
    id: "Zapatillas Roja Balenciaga",
    nombre: "Zapatillas Roja Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Roja Balenciaga.png",
},

{
    id: "Zapatillas Gris Balenciaga",
    nombre: "Zapatillas Gris Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Gris Balenciaga.png",
},

{
    id: "Zapatillas Blanco-Azul Balenciaga",
    nombre: "Zapatillas Blanco-Azul Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Blanco-Azul Balenciaga.png",
},

{
    id: "Zapatillas Blanco Balenciaga",
    nombre: "Zapatillas Blanco Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Blanco Balenciaga.png",
},

{
    id: "Zapatillas Gris-Amarillo Balenciaga",
    nombre: "Zapatillas Gris-Amarillo Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Gris-Amarillo Balenciaga.png",
},

{
    id: "Zapatillas Tonos Marrones Balenciaga",
    nombre: "Zapatillas Tonos Marrones Balenciaga",
    precio: 69.99,
    imagen: "Zapatillas Balenciaga/Zapatillas Tonos Marrones Balenciaga.png",
},

//Productos Zapatillas Adidas

{
    id: "Zapatillas Adidas Blanca L.Azul-Naranja Ultra Boost",
    nombre: "Zapatillas Adidas Blanca L.Azul-Naranja Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Blanca L.  Azul-Naranja Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro L.Gris Ultra Boost",
    nombre: "Zapatillas Adidas Negro L.Gris Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro L.  Gris Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Azul Ultra Boost",
    nombre: "Zapatillas Adidas Azul Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Azul Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Gris L.Negro Ultra Boost",
    nombre: "Zapatillas Adidas Gris L.Negro Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Gris L. Negro Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro L.Azul Ultra Boost",
    nombre: "Zapatillas Adidas Negro L.Azul Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro L.  Azul Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro L.Dorado Ultra Boost",
    nombre: "Zapatillas Adidas Negro L.Dorado Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro L. Dorado Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Rosa Ultra Boost",
    nombre: "Zapatillas Adidas Rosa Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Rosa Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Gris L.Negro Suela Azul Ultra Boost",
    nombre: "Zapatillas Adidas Gris L.Negro Suela Azul Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Gris L. Negro Suela Azul  Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro-Azul Ultra Boost",
    nombre: "Zapatillas Adidas Negro-Azul Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro-Azul Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro L.Negro-Dorado Ultra Boost",
    nombre: "Zapatillas Adidas Negro L.Negro-Dorado Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro L.  Negro-Dorado Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Gris Ultra Boost",
    nombre: "Zapatillas Adidas Gris Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Gris Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Blanca Ultra Boost",
    nombre: "Zapatillas Adidas Blanca Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Blanca Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Negro L.Blanco Ultra Boost",
    nombre: "Zapatillas Adidas Negro L.Blanco Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Negro L.  Blanco Ultra Boost.png",
},

{
    id: "Zapatillas Adidas Blanca L.Rosa Ultra Boost",
    nombre: "Zapatillas Adidas Blanca L.Rosa Ultra Boost",
    precio: 69.99,
    imagen: "Zapatillas Adidas/Adidas Blanca L. Rosa Ultra Boost.png",
},

//Productos Zapatillas Vans

{
    id: "Vans Azules Básicas",
    nombre: "Vans Azules Básicas",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Azules Básicas.png",
},

{
    id: "Vans Negras Sk-8 Low",
    nombre: "Vans Negras Sk-8 Low",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Negras Sk-8 Low.png",
},

{
    id: "Vans Cuadros Low Basicas",
    nombre: "Vans Cuadros Low Basicas",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Cuadros Low Basicas.png",
},

{
    id: "Vans Rojas Básicas",
    nombre: "Vans Rojas Básicas",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Rojas Básicas.png",
},

{
    id: "Vans Negras Básicas",
    nombre: "Vans Negras Básicas",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Negras Básicas.png",
},

{
    id: "Vans Verdes Básicas",
    nombre: "Vans Verdes Básicas",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Verdes Básicas.png",
},

{
    id: "Zapatillas Vans Negras S. Blanca Old School",
    nombre: "Zapatillas Vans Negras S. Blanca Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Negras S. Blanca Old School.png",
},

{
    id: "Zapatillas Vans Rojas Old School",
    nombre: "Zapatillas Vans Rojas Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Rojas Old School.png",
},

{
    id: "Zapatillas Vans Azul- Negro Old School",
    nombre: "Zapatillas Vans Azul- Negro Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Azul- Negro Old School.png",
},

{
    id: "Zapatillas Vans Negras S. Negra Old School",
    nombre: "Zapatillas Vans Negras S. Negra Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Negras S. Negra Old School.png",
},

{
    id: "Zapatillas Negras Vans High Old School",
    nombre: "Zapatillas Negras Vans High Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Negras High Old School.png",
},

{
    id: "Zapatillas Vans Rojas High Old School",
    nombre: "Zapatillas Vans Rojas High Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Rojas High Old School.png",
},

{
    id: "Zapatillas Vans Azul- Negro High Old School",
    nombre: "Zapatillas Vans Azul- Negro High Old School",
    precio: 69.99,
    imagen: "Zapatillas Vans/Vans Azul- Negro High Old School.png",
},

//Productos Givenchy

{
    id: "Camiseta Gris Givenchy",
    nombre: "Camiseta Gris Givenchy",
    precio: 39.99,
    imagen: "Givenchy/Camiseta Gris Givenchy.png",
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
    document.getElementById("btnAgregarCarrito").dataset.idOculto = productoSeleccionado.idOculto;
}

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//js PHP

document.getElementById('miFormulario').addEventListener('submit', function (event) {
    // Obtén la información del carrito desde el localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
     // Convierte el objeto del carrito en una cadena JSON y guárdalo en el campo oculto
     document.getElementById('carrito').value = JSON.stringify(carrito);
    });
    
