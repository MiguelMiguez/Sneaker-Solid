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


const mostrarProductos = (data) => {
    data.forEach (producto =>{
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('id','cat-sneakers');
        cardProducto.innerHTML = `
                                    <div class="cat-sneakers">
                                        <img class="img-snakers-cat" src="${producto.img}" alt="${producto.modelo}">
                                        <h2 class="modelo">${producto.modelo}</h2>
                                        <h3 class="genero">${producto.genre}</h3>
                                        <h4 class="precio" >${producto.precio}</h4>
                                        <a href="#" class="agregar-carrito"  element-id="${producto.id}">AGREGAR AL CARRITO</a>
                                    </div>
                                 `;
                                 listaProductos.appendChild(cardProducto);
    })
}


const orderBtnMenor = document.querySelector('#orderBtnMenor');
const orderBtnMayor = document.querySelector('#orderBtnMayor');

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