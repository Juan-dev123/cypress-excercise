describe("Verification of the addition of products in the shopping cart", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("[data-test='username']").type("standard_user");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("[data-test='login-button']").click();
    });

    it("Two added products should be displayed in the shopping cart", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('#shopping_cart_container .shopping_cart_link .shopping_cart_badge').contains('1');
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('#shopping_cart_container .shopping_cart_link .shopping_cart_badge').contains('2');
        cy.get('#shopping_cart_container .shopping_cart_link').click();
        cy.get('.cart_list .cart_item').should('have.length', 2);
        cy.get('#item_4_title_link .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
        cy.get('#item_2_title_link .inventory_item_name').should('have.text', 'Sauce Labs Onesie');
        cy.get('.cart_item .cart_quantity').each(($el) => {
            expect($el.text()).to.equal('1')
        });
    })
})

