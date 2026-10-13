const peliculas = [
  ["El conjuro","Hereditary","Scream: Grita antes de morir","El exorcista","Alien: Romulus"],
  ["Toy Story","Mi villano favorito","Intensa-Mente 2","Shrek","Coco"],
  ["Mad Max: Furia en la carretera","John Wick 4","Top Gun: Maverick","Misión Imposible: Sentencia Mortal","Gladiador 2"]
]

//mostrar las 15 peliculas en la consola


peliculas.forEach(generoPelicula => {
  generoPelicula.forEach(pelicula => {
    console.log(pelicula)
  })
});