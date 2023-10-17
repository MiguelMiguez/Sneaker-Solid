let articulosCarrito = [];

const listaProductos = document.querySelector('#lista-productos');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const carrito = document.querySelector('#carrito')

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito'))==null){
        articulosCarrito = []
    }else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
    }
    dibujarcarritoHTML();
})


listaProductos.addEventListener('click', agregarProducto)

vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

carrito.addEventListener('click', eliminarProducto)

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
    evt.preventDefault (); 
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement;
        leerDatosProducto (producto)
    } 
}



function leerDatosProducto(item){ 
    const infoProducto = { 
        imagen:(item.querySelector('img').src),
        modelo: item.querySelector('h2').textContent,  
        genre: item.querySelector('h3').textContent,  
        precio: item.querySelector('h4').textContent,
        id: item.querySelector('a').getAttribute('element-id'),
        cantidad: 1

    }
    
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
        const fila = document.createElement('tr')
        fila.innerHTML = `
        <td><img src="${producto.imagen}" width="100" /></td>
        <td>${producto.modelo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">❌</a>
        </td>
        `;
        contenedorCarrito.appendChild(fila)
    })
    sincronizarStorage();
}

function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
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


const touch1 = document.querySelector('#touch');
const opencarrito = document.querySelector('#clkCarrito');
const opencarrito2 = document.querySelector('#clkCarrito2');
  
touch1.addEventListener('click', despliegueCarrito, );
  
function despliegueCarrito() {
      if (clkCarrito.style.display === 'flex' && clkCarrito.style.flexDirection === 'row') {
        clkCarrito.style.display = 'none';
        clkCarrito.style.justifyContent = 'center';
      } else {
        clkCarrito.style.display = 'flex';
        clkCarrito.style.flexDirection = 'row';
        
      }
}

const compra = document.querySelector('#comprar');

compra.addEventListener('click', cartelSwap);

function cartelSwap (){
    Swal.fire('Compra Realizada')
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ordenarBoton").addEventListener("click", ordenarPorPrecio);
});

function ordenarPorPrecio() {
    var elementos = document.querySelectorAll(".cat-sneakers");
    var arregloElementos = Array.from(elementos);

    arregloElementos.sort(function(a, b) {
        var precioA = parseInt(a.querySelector(".precio").textContent);
        var precioB = parseInt(b.querySelector(".precio").textContent);
        return precioA - precioB;
    });

    var contenedor = document.body; // Cambia esto al contenedor específico donde se encuentran tus elementos

    arregloElementos.forEach(function(elemento) {
        contenedor.appendChild(elemento);
    });
}
