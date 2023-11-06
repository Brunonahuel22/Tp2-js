/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’
 */

let letraCorrespondiente = "";
let estado;

do {
  let dni = parseFloat(prompt("Ingrese su DNI:"));

  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Número fuera del rango o no válido. Por favor, ingrese un número válido.");
  }

  let resultadoDivicion = dni % 23;

  switch (resultadoDivicion) {
    case 0:
      letraCorrespondiente = "T";
      break;
    case 1:
      letraCorrespondiente = "R";
      break;
    case 2:
      letraCorrespondiente = "W";
      break;
    case 3:
      letraCorrespondiente = "A";
      break;
    case 4:
      letraCorrespondiente = "G";
      break;
    case 5:
      letraCorrespondiente = "M";
      break;
    case 6:
      letraCorrespondiente = "Y";
      break;
    case 7:
      letraCorrespondiente = "F";
      break;
    case 8:
      letraCorrespondiente = "P";
      break;
    case 9:
      letraCorrespondiente = "D";
      break;
    case 10:
      letraCorrespondiente = "X";
      break;
    case 11:
      letraCorrespondiente = "B";
      break;
    case 12:
      letraCorrespondiente = "N";
      break;
    case 13:
      letraCorrespondiente = "J";
      break;
    case 14:
      letraCorrespondiente = "Z";
      break;
    case 15:
      letraCorrespondiente = "S";
      break;
    case 16:
      letraCorrespondiente = "Q";
      break;
    case 17:
      letraCorrespondiente = "V";
      break;
    case 18:
      letraCorrespondiente = "H";
      break;
    case 19:
      letraCorrespondiente = "L";
      break;
    case 20:
      letraCorrespondiente = "C";
      break;
    case 21:
      letraCorrespondiente = "K";
      break;
    case 22:
      letraCorrespondiente = "E";
      break;
    default:
      letraCorrespondiente = "Valor fuera de rango";
      break;
  }

  alert(`Para el valor ${dni}, la letra correspondiente es: ${letraCorrespondiente}`);

  estado = confirm("¿Quiere ingresar otro número?");
} while (estado);
