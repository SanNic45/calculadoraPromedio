const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitar al usuario que ingrese su NOMBRE y MATERIA
var nombre;
var materia;

rl.question("Por favor, ingrese su nombre: ", function (respuesta) {
  nombre = respuesta.trim();
  solicitarMateria();
});
function solicitarMateria() {
  rl.question("Ingrese el nombre de la materia: ", function (respuesta) {
    materia = respuesta.trim();
    solicitarNotas();
  });
}
// Solicitar al usuario que ingrese las tres notas
function solicitarNotas() {
  rl.question("Ingrese la primera nota (0-10): ", function (nota1) {
    rl.question("Ingrese la segunda nota (0-10): ", function (nota2) {
      rl.question("Ingrese la tercera nota (0-10): ", function (nota3) {
        // Convertir las entradas a números
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        nota3 = parseFloat(nota3);

        // Verificar que las notas estén en el rango válido (0-10)
        if (isValidNota(nota1) && isValidNota(nota2) && isValidNota(nota3)) {
          
          var promedio = calcularPromedio(nota1, nota2, nota3);

          // Proporcionar mensajes personalizados dependiendo del resultado del promedio
          if (promedio >= 7) {
            console.log(
              nombre +
                ", ¡felicidades! Has aprobado con un promedio de " +
                promedio
            );
          } else if (promedio < 7) {
            console.log(
              nombre +
                ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " +
                promedio
            );
          }
          // Cerrar la interfaz de lectura
          rl.close();
        } else {
          // Mostrar un mensaje de error si alguna nota no está en el rango válido
          console.log(
            "Error: Por favor, ingrese notas válidas en el rango de 0 a 10."
          );
          // Cerrar la interfaz de lectura
          rl.close();
        }
      });
    });
  });
}

// Función para verificar si la nota está en el rango válido
function isValidNota(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

// Función para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
