describe('Ingresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un ingreso', () => {
        cy.visit('/income');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '3');
        cy.get('input[name=category]').should('have.value', 'Sueldo');
        cy.get('input[name=amount]').should('have.value', '50000');
    });


    it('Deberian ser los 4 campos requeridos', () => {
        cy.visit('/income');
        cy.get('input[name=description]').should('have.attr', 'required');
        cy.get('input[name=date]').should('have.attr', 'required');
        cy.get('input[name=category]').should('have.attr', 'required');
        cy.get('input[name=amount]').should('have.attr', 'required');
       
        
    });

    it('Deberia poder crear un nuevo ingreso', () => {
        cy.visit('/income');

        cy.get('input[name=description]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.get('input[name=date]').type('2000-12-03');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });



    it('Deberia aparecer un alert luego de crear un movimiento', (done) => {
        cy.visit('/income');
        cy.get('input[name=description]').type('2020-03-14');
        cy.get('input[name=amount]').type('23000');
        cy.get('input[name=category]').type('Plazo Fijo');
        cy.get('input[name=date]').type('2000-12-03');
        

        cy.contains('Guardar').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Movimiento creado con éxito!!');
            done();
          })     
    });
});
