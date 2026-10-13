const paises = [
  ["México","Argentina","Estados Unidos"],//america
  ["España","Francia","Italia"],//europa
  ["Japón","Corea del Sur","China"],//asia
  ["Egipto","Sudáfrica","Marruecos"],//africa
]

//Mostrar los paises de Asia (unicamente) utilizando foreach

paises[2].forEach(pais => {
    console.log(pais)
  })

  //Agregar 2 paises en la lista de América

  paises[0].push("Bolivia")
  paises[0].push("Ecuador")

  console.log("- ---- - --- - --- -")

  //Mostrar los paises de América
  paises[0].forEach(pais => {
    console.log(pais)
  })

