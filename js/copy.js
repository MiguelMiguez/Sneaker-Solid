
/* -------------------------------------- */

/* Simulador */

const saldoTexto = prompt("Ingresa tu saldo disponible:");
const saldo = parseFloat(saldoTexto);
let puedepagar = false;

if (saldo >= zapatillas) {
    console.log("Puede pagar");
    puedepagar = true;
} else {
    console.log("No puede pagar");
}

if (puedepagar === true) {
    console.log("Felicitaciones tenes saldo suficiente");
} else {
    console.log("Por favor carga el saldo nuevamente");
}

/* ------------------------------------ */

function zapatillas(m,p,t){
    this.marca = m;
    this.precio = p;
    this.talle = t;
}

let zapatilla1 = new zapatillas("nike","23210","37")
let zapatilla2 = new zapatillas("adidas","20780","32")
let zapatilla3 = new zapatillas("topper","23230","35")
let zapatilla4 = new zapatillas("puma","20254","40")

console.log (zapatilla1)
console.log (zapatilla2)
console.log (zapatilla3)
console.log (zapatilla4)
/* -------------------------------------- */

const cantidad = Number(prompt("Ingresa cantidad que deseas comprar"));
const stock = 100;

function resultado(cantidad, stock) {
    if (cantidad <= stock) {
        console.log("Tenemos stock disponible");
        return true;
    } else {
        console.log("No tenemos suficiente stock disponible");
        return false;
    }
}

let contamosConStock = resultado(cantidad, stock);

if (contamosConStock) {
    console.log("Contamos con stock");
} else {
    console.log("No contamos con stock");
}
/* -------------------------------------- */

for(let i=1 ; i<=5 ; i+=1 ){
    if(i===5){
        console.log("No podes compar más de 5 pares")
        break;
    }
    console.log ("Compraste estos pares: " + i);
}

/* -------------------------------------- */

/* Simulador */

const zapatillas1 = [
    { id: 1, producto: "Zapatillas Nike", precio: 1000, stock: 3 },
    { id: 2, producto: "Zapatillas Puma", precio: 2000, stock: 1 },
    { id: 3, producto: "Zapatillas Adidas", precio: 5000, stock: 2 },
];

console.table(zapatillas1);

const saldoTexto = prompt("Ingresa tu saldo disponible:");
const saldo = parseFloat(saldoTexto);
let puedepagar = false;

for (let i = 0; i < zapatillas1.length; i++) {
    const zapatilla = zapatillas1[i];
    if (saldo >= zapatilla.precio && zapatilla.stock > 0) {
        console.log(`Puede pagar las ${zapatilla.producto}`);
        puedepagar = true;
    }
}

if (puedepagar) {
    console.log("Felicitaciones, tienes saldo suficiente para al menos una zapatilla.");
    const seleccion = prompt("Selecciona la zapatilla que deseas comprar (ejemplo: Zapatillas Nike):");
    const zapatillaSeleccionada = zapatillas1.find(zapatilla => zapatilla.producto === seleccion);

    if (zapatillaSeleccionada) {
        console.log(`Has seleccionado las ${zapatillaSeleccionada.producto} con un precio de ${zapatillaSeleccionada.precio}`);
    } else {
        console.log("La zapatilla seleccionada no está en el catálogo o no tienes saldo suficiente para comprarla.");
    }
} else {
    console.log("Lo siento, no puedes comprar ninguna zapatilla con tu saldo actual.");
}
