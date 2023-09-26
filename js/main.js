let articulosCarrito = [];

const listaProductos = document.querySelector('#lista-productos');
console.log(listaProductos);

/* document.addEventListener('DOMContentLoaded', ()=>{

})
 */

listaProductos.addEventListener('click', agregarProducto)

function agregarProducto(evt){
    evt.preventDefault (); 
    console.log(evt.target.classList.contains('agregar-carrito'))


    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement.parentElement;
        leerDatosProducto (producto)
    } 
}



function leerDatosProducto(item){ 
    const infoProducto = { 
        modelo: item.querySelector('h2').textContent,  
        genre: item.querySelector('h3').textContent,  
        precio: item.querySelector('h4').textContent 
    } 
    console.log(infoProducto) 
}