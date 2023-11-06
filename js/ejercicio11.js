/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let Nombre1 = prompt("Ingrese su Nombre: ");
let Edad1 = parseInt(prompt("Ingrese su edad: "));
let Nombre2 = prompt("Ingrese su Nombre: ");
let Edad2 = parseInt(prompt("Ingrese su edad: "));
let Nombre3 = prompt("Ingrese su Nombre: ");
let Edad3 = parseInt(prompt("Ingrese su edad: "));

let mayor = Math.max(Edad1,Edad2,Edad3);

switch (mayor) {
    case Edad1:
        document.write(`El nombre de la mayor edad es de ${Nombre1}`)
        break;
    case Edad2:
        document.write(`El nombre de la mayor edad es de ${Nombre2}`)
        break;
    case Edad2:
        document.write(`El nombre de la mayor edad es de ${Nombre2}`)
        break;
}