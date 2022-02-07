class Cellar{
    constructor() {
        this.beers = []
        this.wines = []
        this.spirits = []
    }

    ///////////////////////////////////////////////////////////

    addBeers(beerToAdd) {
        for (const beer of this.beers) {
            if (beer === beerToAdd) {
                return "This item is already in Stock";
            }
        } 
        this.beers.push(beerToAdd)
    }

    addWines(wineToAdd) {
        for (const wine of this.wines) {
            if (wine === wineToAdd) {
                return "This item is already in Stock";
            }
        } 
        this.wines.push(wineToAdd)
    }

    addSpirits(spiritToAdd){
        for (const spirit of this.spirits) {
            if (spirit === spiritToAdd) {
                return "This item is already in Stock";
            }
        }
        this.spirits.push(spiritToAdd);
    }

    //////////////////////////////////////////////////////////////////////////
    
    findItemByName(nameToSearch) {
        let array = [...this.beers, ...this.wines, ...this.spirits];
        return array.filter(x => x.name.toLowerCase() === nameToSearch.toLowerCase());
    }

    findItemByCode(codeToSearch) {
        let array = [...this.beers, ...this.wines, ...this.spirits];
        return array.find(x => x.uniqueCode === codeToSearch);
    }

    findItemByGrape(variety) {
        let array = [...this.wines]
        return array.filter(x => x.grapeVariety.toLowerCase() === variety.toLowerCase())
    }


    ///////////////////////////////////////////////////////////////////////

    removeBottlesByCode(code){

        // //QUESTA VERSIONE RIMUOVE LE BOTTIGLIE MA NON LE RIMUOVE DAL CELLAR FINALE:
        // let array = [];
        // array = this.beers.concat(this.wines).concat(this.spirits);
        // let itemRemoved;
        // for (let i = 0; i < array.length; i++) {
        //     const item = array[i];
        //     if (item.uniqueCode === code) {
        //         itemRemoved = array.splice(i, 1);
        //     } 
        // }
        // console.log("This item has been removed from the list", itemRemoved);


        //QUESTA VERSIONE RIMUOVE LE BOTTIGLIE ANCHE DAL CELLAR FINALE:
        let itemRemoved;
        for (let i = 0; i < this.beers.length; i++) {
            const item = this.beers[i];
            if (item.uniqueCode === code) {
                itemRemoved = this.beers.splice(i, 1);
            } 
        }
        for (let i = 0; i < this.wines.length; i++) {
            const item = this.wines[i];
            if (item.uniqueCode === code) {
                itemRemoved = this.wines.splice(i, 1);
            } 
        }
        for (let i = 0; i < this.spirits.length; i++) {
            const item = this.spirits[i];
            if (item.uniqueCode === code) {
                itemRemoved = this.spirits.splice(i, 1);
            } 
        }
        console.log("This item has been removed from the list", itemRemoved);
        
        
        //QUESTA VERSIONE L'HO TROVATA SU INTERNET (NON FUNZIONA):
        // for (const item of array) {
        //     let itemToRemove = this.findItemByCode(code);
        //     if (item.uniqueCode === itemToRemove) {
        //         let index = array.indexOf(itemToRemove);
        //         array.splice(index);
        //     }
        // }
        // return array;
    }



    ////////////////////////////////////////////////////////////

    findQuantityByCode(code) {
        let array = [];
        array = this.beers.concat(this.wines).concat(this.spirits);
        for (const item of array) {
            if (item.uniqueCode === code) {
                return item.quantity;
            }
        }
    }


    findQuantityByGrapeVariety(variety) {
        for (const wine of this.wines) {
            if (wine.grapeVariety.toLowerCase() === variety.toLowerCase()) {
                return wine.quantity;
            }
        }
    }


    findQuantityByYear(year) {
        for (const wine of this.wines) {
            if (wine.bottlingYear === year) {
                return wine.quantity;
            }
        }
    }


    findQuantityByBeerType(type){
        for (const beer of this.beers) {
            if (beer.beerType.toLowerCase() === type.toLowerCase()) {
                return beer.quantity;
            }
        }
    }

    //////////////////////////////////////////////////////////////////

    findTotalNumberOfBeers(){
        let count = 0;
        for (const element of this.beers) {
            count += element.quantity;
        }
        return "Number of Beer Bottles: " + count + " Bottles";
    }


    findTotalNumberOfWines(){
        let count = 0;
        for (const element of this.wines) {
            count += element.quantity;
        }
        return "Number of Wine Bottles: " + count + " Bottles";
    }


    findTotalNumberOfSpirits(){
        let count = 0;
        for (const element of this.spirits) {
            count += element.quantity;
        }
        return "Number of Spirit Bottles: " + count + " Bottles";
    }



    findTotalNumberOfBottles(){
        let array = [];
        let count = 0;
        array = this.beers.concat(this.wines).concat(this.spirits);
        for (const element of array) {
            count += element.quantity;
        }
        return "Total number of bottles in stock: " + count + " Bottles";
    }








 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // IN CLASSE CON I FLAG TRUE E FALSE:

    // ///FUNZIONA CON LA SEARCH BY NAME OR CODE DI ANDREA IN QUESTO CASO!!!!:

    // addQuantityToCode(code, quantity){
    //     const searchResultArray = this.findItemByCode(code);
    //     if (searchResultArray.length === 1){
    //         const beverage = searchResultArray[0];
    //         beverage.addQuantity(quantity);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // removeQuantityToCode(code, quantity){
    //     const searchResultArray = this.findItemByCode(code);
    //     if (searchResultArray.length === 1){
    //         const beverage = searchResultArray[0];
    //         if (beverage.addQuantity(quantity)){
    //             return true;
    //         } else{
    //             return false;
    //         }
    //     } else {
    //         return false;
    //     }
    // }
}