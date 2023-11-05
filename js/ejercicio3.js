/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let cadena = "";

let estado = true;

while ( estado == true) {
    let resultadoConfirm = confirm("Precione aceptar confirmar para true, de lo contrario ingrese cancelar");

    if (resultadoConfirm == true) {
        cadena = cadena + '-';
    } else{
        estado = false;
    }
}

alert(cadena);