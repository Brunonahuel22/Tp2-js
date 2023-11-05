/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : */

let numero = 1;
let cadena ="";

for (let f = 1; f <= 30; f++) {
    for (let n = 1; n <= f; n++) {
        document.write(numero);
    }
    document.write("<br>");
    numero = numero + 1;
}