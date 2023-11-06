/*15- Realiza un script que cuente el número de vocales que tiene un texto. */

const texto = prompt("Ingrese texto: ");

let cantidadDeVocales = 0;

let longitudTexto = texto.length;

for (let i = 0; i < longitudTexto; i++) {
    switch (texto[i]) {
        case 'a':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'e':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'i':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'o':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'u':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'A':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'E':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'I':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'O':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
        case 'U':
            cantidadDeVocales = cantidadDeVocales + 1;
            break;
    }
}
document.write(`La cantidad de vocales que tiene la frase es: ${cantidadDeVocales}`);

