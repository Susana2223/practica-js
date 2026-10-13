const persona = {
  apellidos: "Atuncar",
  nombres: "Susana",

  hablar: function() {
    return "Hola que tal";
  },

  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Pueblo Nuevo",
    direccion: "Av. 13 de octubre",

    mostrar: function() {
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`;
    }
  }
}

console.log(persona.hablar());
console.log(persona.locacion["departamento"]);
console.log(persona.locacion.mostrar());