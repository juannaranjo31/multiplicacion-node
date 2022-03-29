const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 5, listar = false, h = 10) => {

    try {

        let salida = '', consola = '';

        for (let i = 1; i <= h; i++) {
            consola += `${base} ${'x'.cyan} ${i} ${'='.yellow} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if (listar) {
            console.log('==================================='.rainbow);
            console.log('         Tabla del', base);
            console.log('==================================='.rainbow);
            console.log(consola);
        }

        fs.writeFileSync(`./uploads/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearTabla
}