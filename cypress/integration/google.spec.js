
describe('Noon Tests', function() {
  // Define what the test does.
    it('Visit Noon, select an item, add to cart and proceed to checkout', function() {
      // Visit Noon website
      cy.visit('https://www.noon.com/uae-en/')
      // Click on sign in header
      cy.get ('#dd_header_signInOrUp').click()
      // Select the sign in button to navigate to sign in page 
      cy.get ('#btn_header_signin').click()
      // Type the email of the user account in Noon
      cy.get ('#tf_signin_email').type('Ifzm.test@gmail.com')
      // Type the password of the user account in Noon
      cy.get ('#tf_signin_password').type('noon.test')
      // Click on the Sign in button
      cy.get ('#btn_signin_signin').click()
      // Navigate to the first item in the product list
      cy.get (':nth-child(1) > .menuTrigger > a').click()
      // Click on the first item in the product list to open it
      cy.get ('div#content div.swiper-slide.productContainer.swiper-slide-active > div > a > div.imageContainer > div.container.undefined.loaded > div > img').first().click({force: true})
      // Add the item to the cart
      cy.get ('.addToCartLabel').click()
      // Proceed to check out and view items in the cart
      cy.get (':nth-child(1) > .addedToCartLabel > .jsx-1312260583').click()
      // Continue further to checkout now
      cy.get ('.cartItemsColumn > .cartCtaWrapper > .jsx-3223881857').click()
      // Type in a dummy address to find the address
      cy.get ('#searchBox').type('Boulevard Plaza Tower 2 - Emaar - Dubai - United Arab Emirates')
      // Allow 3 seconds for the dynamic search box load information
      cy.wait (3000)
      // Select the suggested address from the dynamic search box
      cy.get ('.active > .jsx-2777892782').click() 
      // Allow 3 seconds for the suggested address to be selected
      cy.wait (3000)
      // Click on confirm location to confirm the address
      cy.get ('.ripple > .jsx-3898435964').click () 
      // Type in the apartment details
      cy.get ('.formColRightMargin > :nth-child(3) > .jsx-2118253545 > .materialInput > .group > input.jsx-679755787').type('Test Apartment')
      // Type in the mobile phone number
      cy.get ('.phoneField > .materialInput > .group > input.jsx-679755787').type('1234567')
      // Type in the First Name
      cy.get ('.formColLeftMargin > :nth-child(3) > .jsx-2118253545 > .materialInput > .group > input.jsx-679755787').type('Ifzm')    
      // Type in the Last Name
      cy.get (':nth-child(4) > .jsx-2118253545 > .materialInput > .group > input.jsx-679755787').type('Test')  
      // Select the address label  
      cy.get (':nth-child(1) > .innerWrapper > .addressLabelRadioLabel > .addressLabelRadio').click()   
      // Click on Save Address
      cy.get ('.ripple > .jsx-3898435964').click() 
      // Click on Continue
      cy.get ('.ripple > .jsx-3898435964').click() 
      // I had to stop the workflow here since an OTP is required to proceed. 
    })
  })