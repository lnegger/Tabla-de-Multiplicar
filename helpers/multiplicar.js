const fs = require('fs');

// LA SENTENCIA ASYNC HACER QUE LA FUNCION SE RETORNE COMO UNA PROMESA.
const crearArchivo = async(base = 5, cual = 1, hasta = 10) =>{
    
    try {
        
        let salida = '';
        // const cual = 1;
        console.log(`TABLA DE MULTIPLICACION POR ${base}`);
        console.log('================================');
        for (let i = 1; i <= hasta; i++) {
        // ASI
            // resultado = 5 * i;
            // console.log(`5 x ${i} es igual a ${resultado}` );
        // O ASI
            salida += `El número ${base} multiplicado por ${i} = ${base * i}\n`;
            // console.log(`5 multiplicado por ${i} = ${5 * i}`);
            
        }
    
        if (cual == 1) {
            fs.writeFile(`./salida/tabla-${base}.txt`,salida,(err) =>{
                if (err) throw err;
    
            }) 
        } else {
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        }
 
        console.log(salida);
        return`Archivo ./salida/tabla-${base}, creado satisfactoriamente a través de ${(cual == 1 ? 'WriteFile' : 'WriteFileSync' )}.`;


    } catch (error) {
        throw(err)
        
    }
      

    
}
module.exports = {
    crearArchivo
}