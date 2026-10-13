//Formas de crear una función
// F1: Por declaración
function hacerAlgo() {
  return "resultado";
}

console.log(hacerAlgo());

// F2: Por expresión
const saludo = function saludar() {
  return "Hola qué tal";
};

console.log(saludo());

const suma = function sumar(num1, num2) {
  return num1 + num2;
};

console.log(suma(17, 20));

// Tipos de funciones: ANÓNIMA (funciones por expresión)
const mensaje = function () {
    return "Ingeniería de Software";
}

console.log(mensaje)  // Tipo de dato => function
console.log(mensaje()) // Ejecuta la función

//Para aplicar este tipo de funciones, se requiere ; antes del llamado
// AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar ;

/* (declaración de la función)(ejecución de la función); */
(function (){
  console.log("Hola que tal");
}) ();

(
  function(nombre = ''){
    console.log('Bienvenido;', nombre)
  }
)('Katherine');

//Crea una función autoejecutable que calcule el promedio de 3 notas
(function (nota1, nota2, nota3){
  console.log((nota1 + nota2 + nota3) / 3)
}
)(14,12,20);


