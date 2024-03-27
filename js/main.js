let articulosCarrito = [];

const listaProductos = document.querySelector('#lista-productos');
const listaProductosDest = document.querySelector('#lista-productos-dest');
const contenedorCarrito = document.querySelector('#dibujar-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const orderBtnMenor = document.querySelector('#orderBtnMenor');
const orderBtnMayor = document.querySelector('#orderBtnMayor');

listaProductos.addEventListener('click', agregarProducto)
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
carrito.addEventListener('click', eliminarProducto)
orderBtnMenor.addEventListener('click', ordenarProductosMenor);
orderBtnMayor.addEventListener('click', ordenarProductosMayor);



document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito'))==null){
        articulosCarrito = []
    }else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
    }
    dibujarcarritoHTML();
})





function eliminarProducto(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('borrar-producto')){
        const producto = evt.target.parentElement.parentElement;
        const productoId = producto.querySelector('a').getAttribute('element-id')
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)
        dibujarcarritoHTML();
    }
}

function agregarProducto(evt){
    evt.preventDefault(); 
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.closest('.sneakers-dest');
        leerDatosProducto(producto);
    } 
}
function leerDatosProducto(item){ 
    const infoProducto = { 
        imagen: item.querySelector('img').src,
        modelo: item.querySelector('h2').textContent,  
        genre: item.querySelector('h3').textContent,  
        precio: item.querySelector('h4').textContent,
        id: item.querySelector('a').getAttribute('element-id'), // Corrección aquí
        cantidad: 1
    };

    
   if(articulosCarrito.some(prod => prod.id === infoProducto.id)){
        const productos = articulosCarrito.map (producto => {
            if(producto.id === infoProducto.id){
                let cantidad = parseInt(producto.cantidad);
                cantidad += 1;
                producto.cantidad=cantidad;
                return producto
            }else{
                return producto;
            }
        })
        articulosCarrito = productos.slice();
    } else{
        articulosCarrito.push(infoProducto)
    }
    
    dibujarcarritoHTML()
}

function dibujarcarritoHTML(){
    limpiarCarrito();
    articulosCarrito.forEach(producto => {
        const fila = document.createElement('div')
        fila.innerHTML = `
        <div class="CartElements">
            <img src="${producto.imagen}"/>
            <p class="CartText">${producto.modelo}</p>
            <p class="CartText">$${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <a href="#" class="borrar-producto" data-id="${producto.id}">❌</a>
        </div>
        `;
        contenedorCarrito.appendChild(fila)
    })
    sincronizarStorage();
}

function limpiarCarrito(){
    if (contenedorCarrito !== null) {
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }
}

function vaciarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    articulosCarrito=[];
    sincronizarStorage();
}


function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}


/* ---------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    fetch('../json/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la información de productos');
            }
            return response.json();
        })
        .then(data => {
            mostrarProductos(data);
            mostrarProductosDestacados(data);
        })
        .catch(error => {
            console.error(error);
        });
});

const mostrarProductos = (data) => {
    const listaProductos = document.querySelector('#lista-productos');
    data.forEach(producto => {
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('id', 'cat-sneakers');
        cardProducto.innerHTML = `
            <div class="sneakers-dest">
                <img class="img-snakers-cat" src="${producto.img}" alt="${producto.modelo}">
                <h2 class="modelo">${producto.modelo}</h2>
                <h3 class="genero">${producto.genre}</h3>
                <h4 class="precio">${producto.precio}</h4>
                <div class="ContainerAddToCart">
                    <a href="#" class="agregar-carrito" element-id="${producto.id}">ADD TO CART</a>
                </div>
            </div>
        `;
        listaProductos.appendChild(cardProducto);
    });
}

const mostrarProductosDestacados = (data) => {
    const listaProductosDest = document.querySelector('#lista-productos-dest');
    const productosDestacados = data.filter(producto => producto.dest);
    productosDestacados.forEach(producto => {
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('class', 'sneakers-dest');
        cardProducto.innerHTML = `
            <img class="img-snakers-cat" src="${producto.img}" alt="${producto.modelo}">
            <h2 class="modelo">${producto.modelo}</h2>
            <h3 class="genero">${producto.genre}</h3>
            <h4 class="precio">${producto.precio}</h4>
            <div class="ContainerAddToCart">
                <a href="#" class="agregar-carrito" element-id="${producto.id}">ADD TO CART</a>
            </div>
        `;
        listaProductosDest.appendChild(cardProducto);
    });
}

/* ------------------------------------------------------------- */

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
    const touchElement = document.getElementById("touch");
    const carritoElement = document.getElementById("clkCarrito");

    touchElement.addEventListener("click", function() {
        if (carritoElement.style.display === "none" || carritoElement.style.display === "") {
            carritoElement.style.display = "block";
        } else {
            carritoElement.style.display = "none";
        }
    });
});
