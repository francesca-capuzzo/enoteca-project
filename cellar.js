class Cellar{
    constructor() {
        this.beers = []
        this.wines = []
        this.superalcs = []
    }

    addbeers(beertoadd) {
        for (const beer of this.beers) {
            if (beer === beertoadd) {
                console.log("This item is already in the database");
                return
            }
        } this.beers.push(beertoadd)
    }

    addwines(winetoadd) {
        for (const wine of this.wines) {
            if (wine === winetoadd) {
                console.log("This item is already in the database");
                return
            }
        } this.wines.push(winetoadd)
    }

    // addsuperalcs(superalctoadd) {
    //     for (const superalc of this.superalcs) {
    //         if (superalc === superalctoadd) {
    //             console.log("This item is already in the database");
    //             return
    //         }
    //     } this.superalcs.push(superalctoadd)
    // }

    finditembyname(nametosearch) {
        let array = [...this.beers, ...this.wines, ...this.superalcs]
        return array.filter(x => x.name.toLowerCase() === nametosearch.toLowerCase()) 
    }

    finditembycode(codetosearch) {
        let array = [...this.beers, ...this.wines, ...this.superalcs]
        return array.find(x => x.uniqueCode === codetosearch) 
    }

    finditembygrape(variety) {
        let array = [...this.wines]
        return array.filter(x => x.grapeVariety.toLowerCase() === variety.toLowerCase())
    }


}