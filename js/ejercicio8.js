/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)  */
let largoFilas = parseInt(prompt("Ingrese el largo de su cadena: "));
let numero = 1;


for (let f = 1; f <= largoFilas; f++) {
    for (let n = 1; n <= f; n++) {
        document.write(numero);
    }
    document.write("<br>");
    numero = numero + 1;
}