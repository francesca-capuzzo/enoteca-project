class Beverage{
    constructor(brand, name, priceBeforeTax, grade, quantity ){
        this.brand = brand;
        this.name = name;
        this.priceBeforeTax = priceBeforeTax;
        this.grade = grade;
        this.quantity = quantity;
        this.insertioDate = new Date().getFullYear();
    }

    static generatecode(name, brand){
        let code = name[0] + name[1] + brand[0] + brand[1] + (Math.random() * 100).toFixed(); 
        return code;
    }

    toString(){
        let itemDescription = "ITEM: \n" 
                            + "NAME: " + this.name + "\n"
                            + "BRAND: " + this.brand + "\n"
                            + "PRICE: " + this.calculatePrice() + "€" + "\n"
                            + "GRADE: " + this.grade + "%" + "\n" 
        return itemDescription;
    }

    addQuantity(number){
        return this.quantity += number;
    }

    removeQuantity(number){
        if (this.quantity >= number) {
            return this.quantity -= number;
        }
        return "Not enough bottles in stock"
    }
}