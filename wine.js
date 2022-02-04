class Wine extends Beverage{
    constructor(brand, name, priceBeforeTax, grade, quantity, bottlingYear, grapeVariety){
        super (brand, name, priceBeforeTax, grade, quantity);
        this.bottlingYear = bottlingYear;
        this.grapeVariety = grapeVariety;
        this.tax = 22
    }

    calculateWineAge(){  //calculate wine Age
        const currentYear = (new Date()).getFullYear();
        const wineAge = currentYear - this.bottlingYear;
        return wineAge;
    }

    calculatePrice(){
        const priceWithTax = (this.priceBeforeTax + (this.priceBeforeTax * this.tax) / 100);
        const fullPriceWithIncrement = (priceWithTax * this.calculateWineAge()) / 100;
        const sum = priceWithTax + fullPriceWithIncrement;
        return sum.toFixed(2);
    }

    toString(){
        const code = super.toString() + 
                     "GRAPE VARIETY: " + this.grapeVariety + "\n" +
                     "BOTTLING YEAR: " + this.bottlingYear;
        return code; 
    }

}