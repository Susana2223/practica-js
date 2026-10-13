//Construir un objeto con los datos una película

const pelicula={
  titulo: "El conjuro 2",
  anio: 2016,
  idiomas: ["Inglés", "Español"],
  generos: ["Terror", "Misterio", "Sobrenatural"],
  presupuesto: 40000000 ,
  recaudacion: 320392818,
  elenco: [

     { nombre: "Vera Farmiga", personajes: "Lorraine Warren", rol: "Protagonista"},
     { nombre: "Patrick Wilson", personajes: "Ed Warren", rol: "Protagonista"},
     { nombre: "Madison Wolfe", personajes: "Janet Hodgson", rol: "Secundario"},
     { nombre: "Frances O´Connor", personajes: "Peggy Hodgson", rol: "Secundario"},
     { nombre: "Simon McBurney", personajes: "Maurice Grosse", rol: "Secundario"},
     { nombre: "Bonnie Aarona", personajes: "Valak (la monja demoníaca)", rol: "Antagonista"},
  
    ],

  sinopsis: "Ed y Lorraine Warren investigan un caso paranormal en una casa de Londres",
  
  direccion: ["James Wan"],

  escritores: ["Chad Hayes","Carey W. Hayes", "James Wan", "David Leslie Johnson"]
};

console.log("Título: ", pelicula.titulo);
console.log("sinopsis: ", pelicula.sinopsis);
console.log("Año: ", pelicula.anio);
console.log("Dirección: ", pelicula.direccion[0]);
console.log("Primer actor: ", pelicula.elenco[0].nombre);
