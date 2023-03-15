import { InventoryPage } from "../page/index";
import { ShoppingCartPage } from "../page/index";

let inventoryPage:InventoryPage;
let shoppingCartPage:ShoppingCartPage;

describe("Verification of the addition of products in the shopping cart", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("[data-test='username']").type("standard_user");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("[data-test='login-button']").click();
        inventoryPage = new InventoryPage();
        shoppingCartPage = new ShoppingCartPage();
    });

    it("Two added products should be displayed in the shopping cart", () => {
        inventoryPage.addProductToCart("Sauce Labs Backpack");
        inventoryPage.getShopingCartNumItems().contains('1');
        inventoryPage.addProductToCart("Sauce Labs Onesie")
        inventoryPage.getShopingCartNumItems().contains('2');
        inventoryPage.goToShopingCart();
        shoppingCartPage.getListOfProducts().should('have.length', 2);
        shoppingCartPage.getNameOfItem("Sauce Labs Backpack").should('have.text', 'Sauce Labs Backpack');
        shoppingCartPage.getNameOfItem("Sauce Labs Onesie").should('have.text', 'Sauce Labs Onesie');
        shoppingCartPage.getQuantity().each(($el) => {
            expect($el.text()).to.equal('1')
        });
    })
})

