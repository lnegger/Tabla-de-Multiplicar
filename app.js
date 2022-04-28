// 
// TABLA DE LA MULTIPLICACION POR 5
// 

//const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//const base = 7;
const cual = 1;

// console.log(argv);
// console.log('base yargs ',argv.b);
//
// Las siguientes dos líneas son para extraer los argumentos de manera algo arcaica sin usar yargs
//
// const [,,arg3 = 'base = 1'] = process.argv;  // Desestructura a process.argv y coloca sus argumentos en un arreglo.
// const [, base = 1] = arg3.split("=");  // Crea un arreglo que separará por el caracter "=" al argumento arg3

//console.log(process.argv);
// console.log(base);

// let salida = '';
// console.log(`TABLA DE LA MULTIPLICACION POR ${base}`);
// for (let i = 1; i <= 10; i++) {
// // ASI
//     // resultado = 5 * i;
//     // console.log(`5 x ${i} es igual a ${resultado}` );
// // O ASI
//     salida += `El número ${base} multiplicado por ${i} = ${base * i}\n`;
//     // console.log(`5 multiplicado por ${i} = ${5 * i}`);
    
//  }

//  if (cual == 1) {
//     fs.writeFile(`tabla-${base}.txt`,salida,(err) =>{
//         if (err) throw err;

//     }) 
//  } else {
//     fs.writeFileSync(`tabla-${base}.txt`,salida);
//  }

//  console.log(`Archivo tabla-${base}, creado satisfactoriamente a través de ${(cual == 1 ? 'WriteFile' : 'WriteFileSync' )}.`);
//  console.log(salida);

crearArchivo(argv.b,cual, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creadao'))
    .catch(err => console.log(err));
