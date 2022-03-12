let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri'
}

console.log(obj.nombre); //Muestra en la consola el nombre del objeto, en este caso Carlos.
console.log(obj['nombre']); //Muestra en la consola el nombre del objeto.

let myKey = 'nombre'; //Se define una variable con el atribuno nombre del objeto creado.
console.log(obj[myKey]); //Se muestra el nombre dek objeto que se creo con anterioridad.

