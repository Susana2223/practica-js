const alimentos = [
  ["Manzana", "Plátano", "Naranja", "Fresa", "Uva"],//5 
  ["Zanahoria", "Espinaca", "Brócoli"], //3
  ["Pollo", "Pescado"], //2
  ["Arroz","Cereal","Avena","Maiz", "Trigo", "Centeno", "Cebada"]//
];

//¿Cuántos elementos tiene la matriz?
console.log("Total elementos matriz: ", alimentos.length)

//¿Cuál es el array de la matriz que tiene más datos? la ultima
let mayor= 0
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
})
console.log("Array más grande contiene: ", mayor)

//¿Cuál es el array de la matriz que tiene menos datos?


let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length < menor){
    menor= categoriaAlimentos.length
  }
})
console.log("Array más pequeño contiene: ", menor)

//¿Cuántos elementos en total tiene la matriz? considerando todos sus arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos =>{
  sumatoria += categoriaAlimentos.length
})
console.log("En total tenemos: ", sumatoria, "alimentos")

