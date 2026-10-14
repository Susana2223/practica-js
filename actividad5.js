//funcion 5:
//Crear una función autoejecutable, que imprima cuántas horas, minutos y segundos
//faltan para terminar el día

(function(){
    const ahora = new Date()
    const segundosPasados = ahora.getHours() * 3600 + ahora.getMinutes() * 60 + ahora.getSeconds()
    const faltan = 86400 - segundosPasados
    const horas = Math.floor(faltan/3600)
    const minutos = Math.floor((faltan % 3600)/ 60)
    const segundos = faltan % 60
   console.log("Faltan", horas, "horas,", minutos, "minutos y", segundos, "segundos para terminar el día") 
})();

//funcion 6:
//Crear una función autoejecutable que solicite un número(expresado en segundos) y nos 
//devuelva un saludo, después del tiempo indicado

(function(segundos = 0){
    setTimeout(function(){
        console.log("Hola, ya pasaron", segundos, "segundos. ¡Bienvenido!")
    }, segundos * 1000)
})(3);