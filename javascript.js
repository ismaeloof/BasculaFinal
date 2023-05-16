let arrayDatosFruta = [
  {
    nombre: "Manzana",
    precio: 1.6,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Naranja",
    precio: 1.8,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Cereza",
    precio: 2.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Cantaloup",
    precio: 1.9,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Ciruela",
    precio: 1.4,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Fresa",
    precio: 2.5,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Melocotón",
    precio: 2.1,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Mango",
    precio: 2.2,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Coco",
    precio: 3.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Sandia",
    precio: 3.2,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Melon",
    precio: 2.95,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Peras",
    precio: 3.1,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Piña",
    precio: 3.0,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Kiwi",
    precio: 2.4,
    peso: 0,
    importe: 0,
  },
  {
    nombre: "Platano",
    precio: 3.2,
    peso: 0,
    importe: 0,
  },
];

const dFruta = document.getElementById("fruta");
const dPrecio = document.getElementById("precio");
const dPeso = document.getElementById("peso");
const dResult = document.getElementById("precioFinal");

const tDisplay = document.getElementById("ticketDispaly")
const importeTotal = document.getElementById("importeTotal")

let frutaGuardada = "";
let pesoRandom = 0;
let sigo = true;
let noSigo = false;
let initialValue = 0;
let acumularImporte = 0;

//Ver datos de Frutas
function producto(fruta) {
  
  arrayDatosFruta.forEach((objeto) => {
    if (fruta == objeto.nombre) {
      frutaGuardada = objeto.nombre;
      dFruta.innerHTML = objeto.nombre;
      dPrecio.innerHTML = objeto.precio;
    }
  });
}

//Pesar
function pesar() {

  pesoRandom = (Math.random() * 8 + 0.4).toFixed(2);
  dPeso.innerHTML = pesoRandom;

  arrayDatosFruta.forEach((fruta) => {
    if (fruta.nombre == frutaGuardada) {
      fruta.peso = parseFloat(pesoRandom);
      fruta.importe = parseFloat((pesoRandom * fruta.precio).toFixed(2));
      dResult.innerHTML = fruta.importe;
    }
  });
  console.log(arrayDatosFruta);
}

// Limpiar
function limpiar(){

  arrayDatosFruta.forEach((fruta) => {

    fruta.peso = 0;
    fruta.importe = 0;
  
  });
  console.log(arrayDatosFruta)

  dFruta.innerHTML= "";
  dPrecio.innerHTML= "";
  dPeso.innerHTML= "";
  dResult.innerHTML= "";

  tDisplay.innerHTML = "";
  importeTotal.innerHTML = "";
}

//Exportar datos al ticket (Comprar) 
function comprar(){
  
  arrayDatosFruta.forEach((fruta) => {

    if (fruta.nombre == frutaGuardada) {
      tDisplay.innerHTML += `<tr><td>${fruta.nombre}</td><td>${fruta.precio}</td><td>${fruta.peso}</td><td>${fruta.importe}</td></tr>`

      acumularImporte = arrayDatosFruta.reduce(
        (accumulator, currentValue) => accumulator + currentValue.importe,
        initialValue
      );
      
      importeTotal.innerHTML = `<td colspan="4" class='importeTotalCompra'>TOTAL: ${parseFloat(acumularImporte).toFixed(2)}€</td>`
    }

    
  });
 

  




}