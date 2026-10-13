let frutas = ["Manzana","Plátano","Naranja","Fresa","Uva","Mango","Piña","Sandía","Limón","Arándano"]
//Mostrar la lista invertida
for (let i = (frutas.length - 1); i >= 0; i--){
  console.log(frutas[i])
}

//Verificar si existe un elemento = "fresa"
let frutaBuscada= "lima"
const resultado = frutas.find(fruta => fruta == frutaBuscada)
const encontrado = frutas.includes(frutaBuscada)
console.log(resultado, encontrado)

