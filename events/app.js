let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        console.log('Se ha prresionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre); //Muestra en la consola el nombre del objeto, en este caso Carlos.
console.log(obj['nombre']); //Muestra en la consola el nombre del objeto.

let myKey = 'nombre'; //Se define una variable con el atribuno nombre del objeto creado.
console.log(obj[myKey]); //Se muestra el nombre dek objeto que se creo con anterioridad. 

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
