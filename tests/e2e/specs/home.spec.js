describe('Home Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia tener de titulo Gitapp', () => {
        cy.visit('/');
        cy.title().should('eq', 'Gitapp');
    });


    /* it('Checkea los ultimos movimientos', () => {
        cy.visit('/');

        cy.get('[data-testid=movement]').then( items => {

            expect(items[1]).to.contain.id('5')
            expect(items[2]).to.contain.id('4')
            expect(items[3]).to.contain.id('3')
            expect(items[4]).to.contain.id('2')
            expect(items[5]).to.contain.id('1')
        })
    });
 */



    it('Deberia mostrar los ultimos 5 movimientos', () => {
        cy.visit('/');
        cy.get('[data-testid=last-movements]').contains('Últimos movimientos');
        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia poder navegar a income', () => {
        cy.visit('/');

        cy.get('a[href*=income]')
            .contains('Ingresos')
            .click()
            .title()
            .should('eq', 'Gitapp - Ingresos')
    });
});
