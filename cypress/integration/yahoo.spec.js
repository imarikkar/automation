
describe('Yahoo find', function() {
    // Define what the test does.
      it('Yahoo', function() {
        // Visit Yahoo website
        cy.visit ('wwww.yahoo.com')
        cy.get ('body').type('testing 123')
        
  
      })
    })