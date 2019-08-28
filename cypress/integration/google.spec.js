
describe('Google find', function() {
  // Define what the test does.
    it('Google', function() {
      // Visit Noon website
      cy.visit ('https://www.google.com')
      cy.get ('.gLFyf').type('flowers')
      cy.get ('.aajZCb > .VlcLAe > center > .gNO89b').click()

    })
  })