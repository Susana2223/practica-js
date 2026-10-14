//Crear un objeto que contenga información 
//cadenas, valores enteros, decimales, lógicos, arreglos,nuevos objetos
const computadora = {
  marca: "Lenovo",
  procesador: "AMD Ryzen 5 5500U",
  ramGB: 8, 
  almacenamientoGB: 238,
  velocidadGHz: 2.10,
  almacenamientoUsadoGB: 190.5,
  encendida: true,
  pantallaTactil: false,
  puertos: ["USB", "HDMI", "Audio"],
  hardware: [
    {nombre: "Disco", detalle: "SSD"},
    {nombre: "Teclado", detalle: "Español"},
    {nombre: "Mouse", detalle: "Mouse compatible con HID"},
    {nombre: "Pantalla", detalle: "1920x1080, 60Hz"}
  ]
}

console.log("Marca: ", computadora.marca);
console.log("Puertos: ", computadora.puertos);
computadora.hardware.forEach(parte =>{
  console.log(parte.nombre, "-", parte.detalle )
}

)