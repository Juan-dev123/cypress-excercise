class ShoppingCartPage {
    private itemList: string;
    private buyProductsButton: string;
    private keepWatchingProductsButton: string;
    private removeFromCartButton: {
        sauceLabsBackpack: string,
        sauceLabsBikeLight: string,
        sauceLabsBoltTshirt: string,
        sauceLabsFleeceJacket: string,
        sauceLabsOnesie: string,
        testAllThingsTshirtRed: string
    };
    private item: {
        name: string,
        quantity: string,
        description: string,
        price: string
    };
    private products: {
        sauceLabsBackpack: string,
        sauceLabsBikeLight: string,
        sauceLabsBoltTshirt: string,
        sauceLabsFleeceJacket: string,
        sauceLabsOnesie: string,
        testAllThingsTshirtRed: string
    };

    constructor(){
        this.itemList = ".cart_list .cart_item";
        this.buyProductsButton = "[data-test='checkout']";
        this.keepWatchingProductsButton = "[data-test='continue-shopping']";
        this.removeFromCartButton = {
            sauceLabsBackpack: "[data-test='remove-sauce-labs-backpack']",
            sauceLabsBikeLight: "[data-test='remove-sauce-labs-bike-light']",
            sauceLabsBoltTshirt: "[data-test='remove-sauce-labs-bolt-t-shirt']",
            sauceLabsFleeceJacket: "[data-test='remove-sauce-labs-fleece-jacket']",
            sauceLabsOnesie: "[data-test='remove-sauce-labs-onesie']",
            testAllThingsTshirtRed: "[data-test='remove-test.allthethings()-t-shirt-(red)']"
        }
        this.item = {
            name: ".inventory_item_name",
            quantity: this.itemList + " .cart_quantity",
            description: ".inventory_item_desc",
            price: ".item_pricebar .inventory_item_price"
        };
        this.products = {
            sauceLabsBackpack: "#item_4_title_link",
            sauceLabsBikeLight: "item_0_title_link",
            sauceLabsBoltTshirt: "#item_1_title_link",
            sauceLabsFleeceJacket: "#item_5_title_link", 
            sauceLabsOnesie: "#item_2_title_link",
            testAllThingsTshirtRed: "#item_3_title_link"
        }
    }

    public goToAProduct(productName: string){
        let itemName = this.getItemNameByName(productName);
        cy.get((this.products as any)[itemName]).click();
    }


    public removeProductFromCart(product: string){
        let itemName = this.getItemNameByName(product);
        cy.get((this.removeFromCartButton as any)[itemName]).click();
    }

    private getItemNameByName(name: string): string {
        let itemName: string = "";
        switch(name){
            case 'Sauce Labs Backpack':
                itemName = "sauceLabsBackpack";
                break;
            case 'Sauce Labs Bike Light':
                itemName = "sauceLabsBikeLight";
                break;
            case 'Sauce Labs Bolt T-Shirt':
                itemName = "sauceLabsBoltTshirt";
                break;
            case 'Sauce Labs Fleece Jacket':
                itemName = "sauceLabsFleeceJacket";
                break;
            case 'Sauce Labs Onesie':
                itemName = "sauceLabsOnesie";
                break;
            case 'Test.allTheThings() T-Shirt (Red)':
                itemName = "testAllThingsTshirtRed";
                break;
        }
        return itemName;
    }

    public buyProducts(){
        cy.get(this.buyProductsButton).click()
    }

    public keepWatchingProducts(){
        cy.get(this.keepWatchingProductsButton).click()
    }

    public getListOfProducts(){
        return cy.get(this.itemList)
    }

    public getNameOfItem(name: string){
        let itemName = this.getItemNameByName(name);
        itemName = (this.products as any)[itemName];
        cy.log(itemName + " " + this.item.name);
        return cy.get(itemName + " " + this.item.name)
    }

    public getQuantity(){
        return cy.get(this.item.quantity)
    }
}

export {ShoppingCartPage}