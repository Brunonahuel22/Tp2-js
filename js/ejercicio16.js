/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let frase = prompt("Ingrese una frase");

let longitudFrase = frase.length;
let nuevaFrase = "";

for (let i = longitudFrase; i >= 0 ; i--) {
    nuevaFrase = frase.charAt(i);
    document.write(nuevaFrase);
}

