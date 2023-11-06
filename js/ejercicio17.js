/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 */

let fraseIngresada = prompt("Ingrese su texto: ");
let longitudFrase = fraseIngresada.length;


for (let i = 0; i < longitudFrase; i++) {
    if (  fraseIngresada.charAt(i) == "a" ||  fraseIngresada.charAt(i) == "e" || fraseIngresada.charAt(i) == "i" || fraseIngresada.charAt(i) == "o" || fraseIngresada.charAt(i) == "u" ||fraseIngresada.charAt(i) == "A" || fraseIngresada.charAt(i) == "E" || fraseIngresada.charAt(i) == "I" ||  fraseIngresada.charAt(i) == "O" ||fraseIngresada.charAt(i) == "U" ) {
        document.write(`La frase: '${fraseIngresada}' su primera vocal es "${fraseIngresada.charAt(i)}" en la posicion ${i}`);
        i = longitudFrase;
    }
    
}