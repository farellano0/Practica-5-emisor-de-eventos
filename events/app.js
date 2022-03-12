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
console.log(obj[myKey]()); //Se muestra la función del atributo 'keypress' ya que la variable myKey cambió su atributo 'nombre' por el atributo 'keypress'.
myKey = 'mouseOver';
console.log(obj[myKey]());

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('Hola desde el array');
});

console.log(myArray); //Se muestra el vector que se creo con los datos que se fueron ingresando de la linea 26 a la linea 29. Se observa el 4, una cadena, un objeto y una función, aunque esta última se presente como función anónima.


