/* Simulador */



/* const saldo = 0;

if( saldo <= zapatillasDestacadas){
    console.log ("puede pagar")
}else{
    console.log ("no puede pagar")
}
     */

/* -------------------------------------- */
/* 
const saldoefectivo = 10000
const saldocredito = 90000

if( zapatillasDestacadas + zapatillasDestacadas2 <= saldoefectivo ){
    console.log ("no puede pagar")
}else if (saldoefectivo + saldocredito >= zapatillasDestacadas ){
    console.log ("puede pagar")
} if ("puede pagar"){
    console.log ("felicitaciones por la compra")
} */
   


/* -------------------------------------- */

let zapatillasDestacadas = 80000;
let zapatillasDestacadas2 = 80000;
let zapatillasDestacadas3 = 80000;
let zapatillasDestacadas4 = 80000;

const saldoTexto = prompt("Ingresa tu saldo disponible:");
const saldo = parseFloat(saldoTexto);
let puedepagar = false;

if (saldo >= zapatillasDestacadas) {
    console.log("Puede pagar");
    puedepagar = true;
} else {
    console.log("No puede pagar");
}

if (puedepagar === true) {
    console.log("Felicitaciones por la compra");
} else {
    console.log("Por favor carga el saldo nuevamente");
}

/* -------------------------------------- */



