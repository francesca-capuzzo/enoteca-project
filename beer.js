class Beer extends Beverage{
    constructor(brand, name, priceBeforeTax, grade, quantity, beerType){
        super (brand, name, priceBeforeTax, grade, quantity)
        this.beerType = beerType
        this.tax = 22
    }

    calculatePrice(){
        let priceWithTax = (this.priceBeforeTax + (this.priceBeforeTax * this.tax) / 100).toFixed(2);
        return priceWithTax + "€";
    }

    toString(){
        const code = super.toString() +
                     "BEER TYPE: " + this.beerType + "\n";
        return code; 
    }


}