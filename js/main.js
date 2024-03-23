let articulosCarrito = [];

const listaProductos = document.querySelector('#lista-productos');

document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la información de productos');
            }
            return response.json();
        })
        .then(data => {
            mostrarProductos(data);
        })
        .catch(error => {
            console.error(error);
        });
});

const mostrarProductos = (data) => {
    data.forEach (producto =>{
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('id','cat-sneakers');
        cardProducto.innerHTML = `
                                    <div class="sneakers-dest">
                                        <img class="img-snakers-cat" src="${producto.img}" alt="${producto.modelo}">
                                        <h2 class="modelo">${producto.modelo}</h2>
                                        <h3 class="genero">${producto.genre}</h3>
                                        <h4 class="precio" > ${producto.precio}</h4>
                                        <div class="ContainerAddToCart">
                                            <a href="#" class="agregar-carrito"  element-id="${producto.id}">ADD TO CART</a>
                                        </div>
                                    </div>
                                 `;
                                 listaProductos.appendChild(cardProducto);
    })
}



const orderBtnMenor = document.querySelector('#orderBtnMenor');
const orderBtnMayor = document.querySelector('#orderBtnMayor');
orderBtnMenor.addEventListener('click', ordenarProductosMenor);
orderBtnMayor.addEventListener('click', ordenarProductosMayor);


function ordenarProductosMenor() {
    const productos = Array.from(listaProductos.children);
    productos.sort((a, b) => {
        const precioA = parseFloat(a.querySelector('.precio').textContent);
        const precioB = parseFloat(b.querySelector('.precio').textContent);
        return precioA - precioB;
    });
    
    listaProductos.innerHTML = '';
    productos.forEach(producto => {
        listaProductos.appendChild(producto);
    });
}

function ordenarProductosMayor() {
    
    const productos = Array.from(listaProductos.children);
    productos.sort((a, b) => {
        const precioA = parseFloat(a.querySelector('.precio').textContent);
        const precioB = parseFloat(b.querySelector('.precio').textContent);
        return precioB - precioA;
    });

    listaProductos.innerHTML = '';
    productos.forEach(producto => {
        listaProductos.appendChild(producto);
    });
}


/* ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
    let cartIcon = document.querySelector(".cart");
    let carrito = document.getElementById("clkCarrito");
  
    cartIcon.addEventListener("click", function() {
      carrito.style.display = (carrito.style.display === "flex") ? "none" : "flex";
    });
    
    console.log("click")

  });

