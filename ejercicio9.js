let edades = [
  18, 21, 25, 28, 30,
  33, 35, 40, 42, 45,
  48, 50, 52, 55, 58
];

// Buscar el mayor
let mayor = 0, menor = edades[0], promedio = 0;

edades.forEach(edad => {
  if (edad > mayor) mayor = edad;
  if (edad < menor) menor = edad;
  promedio += edad;
});

promedio = (promedio / edades.length).toFixed(2);

console.log("Total de edades: ", edades.length);
console.log("La mayor edad es: ", mayor);
console.log("La menor edad es: ", menor);
console.log("El promedio: ", promedio);