/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let numeroIngresado = parseInt(prompt("Ingrese su edad a continuacion: "));

if (numeroIngresado >= 18) {
    document.write("<p>Usted ya puede conducir</p>");
} else{
    document.write("<p>Usted no tiene edad para poder conducir</p>");
}