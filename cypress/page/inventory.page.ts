class InventoryPage {
    private products: {
        sauceLabsBackpack: string,
        sauceLabsBikeLight: string,
        sauceLabsBoltTshirt: string,
        sauceLabsFleeceJacket: string,
        sauceLabsOnesie: string,
        testAllThingsTshirtRed: string
    };
    private shoppingCart: {
        link: string,
        numOfItems: string
    };
    private secondaryTitle: string;
    private filterBy: {
        nameAsc: string,
        nameDes: string,
        priceAsc: string,
        priceDes: string
    };
    private addToCartButton: {
        sauceLabsBackpack: string,
        sauceLabsBikeLight: string,
        sauceLabsBoltTshirt: string,
        sauceLabsFleeceJacket: string,
        sauceLabsOnesie: string,
        testAllThingsTshirtRed: string
    };
    private removeFromCartButton: {
        sauceLabsBackpack: string,
        sauceLabsBikeLight: string,
        sauceLabsBoltTshirt: string,
        sauceLabsFleeceJacket: string,
        sauceLabsOnesie: string,
        testAllThingsTshirtRed: string
    }


    constructor(){
        this.products = {
            sauceLabsBackpack: "#item_4_title_link",
            sauceLabsBikeLight: "item_0_title_link",
            sauceLabsBoltTshirt: "#item_1_title_link",
            sauceLabsFleeceJacket: "#item_5_title_link", 
            sauceLabsOnesie: "item_2_title_link",
            testAllThingsTshirtRed: "#item_3_title_link"
        }
        this.shoppingCart = {
            link: '#shopping_cart_container .shopping_cart_link',
            numOfItems: '#shopping_cart_container .shopping_cart_link .shopping_cart_badge'
        }
        this.secondaryTitle = ".header_secondary_container .title"
        this.filterBy = {
            nameAsc: "[data-test='product_sort_container'] [value='az']",
            nameDes: "[data-test='product_sort_container'] [value='za']",
            priceAsc: "[data-test='product_sort_container'] [value='lohi']",
            priceDes: "[data-test='product_sort_container'] [value='hilo']"
        }
        this.addToCartButton = {
            sauceLabsBackpack: "[data-test='add-to-cart-sauce-labs-backpack']",
            sauceLabsBikeLight: "[data-test='add-to-cart-sauce-labs-bike-light']",
            sauceLabsBoltTshirt: "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']",
            sauceLabsFleeceJacket: "[data-test='add-to-cart-sauce-labs-fleece-jacket']",
            sauceLabsOnesie: "[data-test='add-to-cart-sauce-labs-onesie']",
            testAllThingsTshirtRed: "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"
        }
        this.removeFromCartButton = {
            sauceLabsBackpack: "[data-test='remove-sauce-labs-backpack']",
            sauceLabsBikeLight: "[data-test='remove-sauce-labs-bike-light']",
            sauceLabsBoltTshirt: "[data-test='remove-sauce-labs-bolt-t-shirt']",
            sauceLabsFleeceJacket: "[data-test='remove-sauce-labs-fleece-jacket']",
            sauceLabsOnesie: "[data-test='remove-sauce-labs-onesie']",
            testAllThingsTshirtRed: "[data-test='remove-test.allthethings()-t-shirt-(red)']"
        }
    }

    public addProductToCart(product: string){
        let itemName = this.getItemNameByName(product);
        cy.get((this.addToCartButton as any)[itemName]).click();
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

    public orderBy(filter: string){
        let itemName = this.getFilterByName(filter);
        cy.get((this.filterBy as any)[itemName]).click();
    }

    private getFilterByName(name: string): string {
        let itemName: string = "";
        switch(name){
            case 'Name Ascending':
                itemName = "nameAsc";
                break;
            case 'Name Descending':
                itemName = "nameDes";
                break;
            case 'Price Ascending':
                itemName = "priceAsc";
                break;
            case 'Price Descending':
                itemName = "priceDes";
                break;
        }
        return itemName;
    }

    public getSecondaryTitle() {
        return cy.get(this.secondaryTitle);
    }

    public goToShopingCart() {
        cy.get(this.shoppingCart.link).click()
    }

    public getShopingCartNumItems(){
        return cy.get(this.shoppingCart.numOfItems);
    }
}

export {InventoryPage}