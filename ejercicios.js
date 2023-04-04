const personajesSimpsons = [
{ nombre: "Homero", edad: 39, rol: "Padre" },
{ nombre: "Marge", edad: 36, rol: "Madre" },
{ nombre: "Bart", edad: 10, rol: "Hijo" },
{ nombre: "Lisa", edad: 8, rol: "Hija" },
{ nombre: "Maggie", edad: 1, rol: "Hija" },
{ nombre: "Ned", edad: 35, rol: "Vecino" },
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
{ nombre: "Milhouse", edad: 10, rol: "Amigo" },
{ nombre: "Nelson", edad: 12, rol: "Bravucón" },
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" }
]

//EJERCICIO 1
console.log ("Ejercicio 1")
console.table(personajesSimpsons)
const personajesMenores= personajesSimpsons.filter(function(esMenor) {
    return esMenor.edad<18
}
)
console.table (personajesMenores)
//EJERCICIO 2
console.log ("Ejercicio 2")
const edadTotal=personajesMenores.reduce((accumulator, personaje)=> accumulator + personaje.edad,0)
console.table (edadTotal)
//EJERCICIO 3
console.log ("Ejercicio 3")
const nombrePersonajes=personajesMenores.map((personaje)=> personaje.nombre)
console.table (nombrePersonajes)