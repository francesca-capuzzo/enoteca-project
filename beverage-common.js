class Beverage{
    constructor(brand, name, priceBeforeTax, grade, quantity ){
        this.brand = brand;
        this.name = name;
        this.priceBeforeTax = priceBeforeTax;
        this.grade = grade;
        this.quantity = quantity;
        this.insertioDate = new Date().getFullYear();
        this.uniqueCode = this.generatecode;
    }

    get generatecode(){
        let code = this.name[0] + this.name[1] + this.brand[0] + this.brand[1] + (new Date).getTime(); 
        return code;
    }

    toString(){
        let itemDescription = "ITEM: \n" 
                            + "NAME: " + this.name + "\n"
                            + "BRAND: " + this.brand + "\n"
                            + "PRICE: " + this.calculatePrice() + "\n"
                            + "GRADE: " + this.grade + "%" + "\n" 
                            + "UNICODE: " + this.uniqueCode + "\n"
                            + "ADDED TO LIST: " + this.insertioDate + "\n";
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


    addBottlesQuantityByCode(code, number){
        if (this.uniqueCode === code) {
            return this.quantity += number;
        }
    }
    

    removeBottlesQuantityByCode (code, number){
        if (this.uniqueCode === code) {
            if (this.quantity >= number) {
                return this.quantity -= number;
            }
        }
    }


    
}