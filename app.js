const {crearTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

const {b, l, h} = argv; 
crearTabla( b, l, h )
.then(archivo => console.log(archivo, 'creado con exito'.green))
.catch(err => console.log(err+''.red));