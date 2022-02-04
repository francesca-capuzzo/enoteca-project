class Spirit extends Beverage{
    constructor(brand, name, priceBeforeTax, grade, quantity){
        super (brand, name, priceBeforeTax, grade, quantity);
        this.tax = 30;
    }

    calculatePrice(){
        const priceWithTax = this.priceBeforeTax + ((this.priceBeforeTax * this.tax) / 100);
        return (priceWithTax).toFixed(2);
    }
}