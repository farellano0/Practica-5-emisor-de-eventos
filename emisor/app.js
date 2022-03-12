var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
/* En la consola se muestra el mensaje de la línea 13 y se ejecutaron las funciones de la línea 5 y 9, 'Somewhere, someone said hello.' y 'A greeting occurred!'. El método emit permite llamar a las funciones que se encuentra en la variabñe 'emtr'.*/