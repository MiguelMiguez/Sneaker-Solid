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
