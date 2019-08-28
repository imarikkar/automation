
describe('Noon Tests', function() {
  // Define what the test does.
    it('Visit Noon, select an item, add to cart and proceed to checkout', function() {
      // Visit Noon website
      cy.visit('https://www.gmail.com')
      // Click on sign in header
      cy.get ('#dd_header_signInOrUp').click()
      // Select the sign in button to navigate to sign in page 
      cy.get ('#btn_header_signin').click()
      
      // I had to stop the workflow here since an OTP is required to proceed. 
    })
  })