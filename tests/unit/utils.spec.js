const { formatDate, monefy } = require('../../client/js/utils.js');


describe('Método formatDate', () =>{

    const fecha = new Date('August 20, 2020 23:15:33');
    const fechaEsperada = '20/8/2020';
    it('Dada una fecha, debería devolverla en el formato correcto', () => {
        expect(formatDate(fecha)).toBe(fechaEsperada);
    });


});

describe('Método monefy', () => {

    it('Debería convertir 1000 en "1000,35"', async () => {
        expect(monefy(1000.35)).toBe('1000,35');
    });
    
    it('Debería convertir 100 en "100"', async () => {
        expect(monefy(100)).toBe('100');
    });
    
    it('Debería convertir undefined en ""', async () => {
        expect(monefy(undefined)).toBe('');
    });


});