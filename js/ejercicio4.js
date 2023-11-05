/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */
sumaDeNumero = 0;
do {
        numeroIngresado = parseFloat(prompt("Ingrese un Numero:"));
        
       

        if (!isNaN(numeroIngresado)) {
            sumaDeNumero = sumaDeNumero + numeroIngresado;
        }else{
            alert("No es un número válido. Por favor, ingrese un número.");
        }

        resultado = confirm("Quiere ingresar un nuevo numero?");
  
} while (resultado == true);

document.write("La suma de numero es: " + sumaDeNumero);

