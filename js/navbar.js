const open = document.querySelector('#open');
const nuevoContenedor = document.querySelector('#nuevoContenedor');
let menuDerecha = true;

open.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    if(menuDerecha){
      nuevoContenedor.style.right = '0';
      nuevoContenedor.style.transition ='1.5s';
      menuDerecha = false;
    } else{
      nuevoContenedor.style.right = '-800px';
      nuevoContenedor.style.transition ='1.5s';
      menuDerecha = true;
    }
}


const touch1 = document.querySelector('#touch');
const opencarrito = document.querySelector('#clkCarrito');
const opencarrito2 = document.querySelector('#clkCarrito2');

touch1.addEventListener('click', despliegueCarrito, );

function despliegueCarrito() {
    if (clkCarrito.style.display === 'flex' && clkCarrito.style.flexDirection === 'row') {
      clkCarrito.style.display = 'none';
    } else {
      clkCarrito.style.display = 'flex';
      clkCarrito.style.flexDirection = 'row';
    }
  }




