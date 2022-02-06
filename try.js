class Cellar{
    constructor() {
        this.beers = [];
        this.wines = [];
        this.spirits = [];
        this.array = [this.beers, this.wines, this.spirits];
    }

    addBeers(beerToAdd) {
        for (const beer of this.array[0]) {
            if (beer === beerToAdd) {
                return "This item is already in the database";
            }
        } 
        this.array[0].push(beerToAdd)
    }

    addWines(wineToAdd) {
        for (const wine of this.array[1]) {
            if (wine === wineToAdd) {
                return "This item is already in the database";
            }
        } 
        this.array[1].push(wineToAdd)
    }

    addSpirits(spiritToAdd){
        for (const spirit of this.array[2]) {
            if (spirit === spiritToAdd) {
                return "This item is already in the database";
            }
        }
        this.array[2].push(spiritToAdd);
    }


    findItemByName(nameToSearch) {
        let spreadArray = [...this.array];
        return spreadArray.filter(x => x.name.toLowerCase() === nameToSearch.toLowerCase());
    }

    findItemByCode(codeToSearch) {
        let spreadArray = [...this.array];
        return spreadArray.find(x => x.uniqueCode === codeToSearch);
    }

    findItemByGrape(variety) {
        let array = [...this.array[1]];
        return array.filter(x => x.grapeVariety.toLowerCase() === variety.toLowerCase())
    }

    removeBottlesByCode(code){

        let itemRemoved;
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];
            for (let j = 0; j < element.length; j++) {
                const element2 = element[j];
                if (element2.uniqueCode == code) {
                    itemRemoved = element.splice(j, 1);
                }   
            } 
        }
        console.log("This item has been removed from the list", itemRemoved);
    }

   
        

}