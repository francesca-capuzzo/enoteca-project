
const beer1 = new Beer("Heineken", "Ara", 3, 5, 50, "Ale");
const beer2 = new Beer("Ichnusa", "Bass", 2, 4.5, 50, "Lager");
const beer3 = new Beer("Desperados", "Castle", 4, 4, 50, "IPA");
const beer4 = new Beer("Moretti", "Engel", 3, 5.5, 50, "Blonde");

const wine1 = new Wine("Champagne", "Lapin", 30, 12, 50, 1999, "Sauvignon");
const wine2 = new Wine("Vermentino", "Colle di Luni", 12, 10, 50, 2010, "Vermentino");
const wine3 = new Wine("Pigato", "Vecchi", 10, 8, 50, 2011, "Montonico");
const wine4 = new Wine("Chardonnay", "Le Franc", 18, 7, 50, 2017, "Regine");

const super1 = new Spirit("Vodka", "Soplica", 10, 30, 50);
const super2 = new Spirit("Whiskey", "Bourbon", 17, 45, 50);
const super3 = new Spirit("Rum", "Bacardi", 18, 35, 50);
const super4 = new Spirit("Gin", "Gordon", 17, 40, 50);

const super5 = new Spirit("gun", "gor", 17, 40, 50);

console.log(beer1.toString());
console.log(wine2.toString());
console.log(super4.toString());

// console.log(beer2.calculatePrice());
// console.log(wine2.calculatePrice());
// console.log(super2.calculatePrice());


const cellar = new Cellar();

cellar.addBeers(beer1);
cellar.addBeers(beer2);
cellar.addBeers(beer3);
cellar.addBeers(beer4);

cellar.addWines(wine1);
cellar.addWines(wine2);
cellar.addWines(wine3);
cellar.addWines(wine4);

cellar.addSpirits(super1);
cellar.addSpirits(super2);
cellar.addSpirits(super3);
cellar.addSpirits(super4);


// console.log(cellar.findItemByName("Ara"));
// console.log(cellar.findItemByName("lapin"));
// console.log(cellar.findItemByCode(wine1.uniqueCode));
// console.log(cellar.findItemByGrape("vermentino"));


//ADD - REMOVE QUANTITY:
beer1.addQuantity(2)
beer4.removeQuantity(24)

// if (beer4.removeQuantity(24) === "You only have " + this.quantity + " in stock") {
//     /// rimani sulla schermata di riduzione quantità
// } else {
//     /// rimozione riuscita, vai avanti
// }   -----> in questo modo se ci fosse chiesto di utilizzare diverse lingue o cambiare il messaggio di errore, sarebbe più difficile da fare perchè va cambiato in 2 posti differenti
//-------> per la soluzione con il FLAG, vedi esercizio di ANDREA.


//ADD - REMOVE QUANTITY BY CODE:
super4.addBottlesQuantityByCode(super4.uniqueCode,1);
super4.removeBottlesQuantityByCode(super4.uniqueCode, 30);


//REMOVE BOTTLES BY CODE (all of them):
// cellar.removeBottlesByCode(beer2.uniqueCode);
// cellar.removeBottlesByCode(super3.uniqueCode);
// cellar.removeBottlesByCode(wine1.uniqueCode);


//NUMBER OF BOTTLES BY:
//CODE:
console.log("Item quantity by CODE: ",cellar.findQuantityByCode(super4.uniqueCode));
//GRAPE VARIERY:
console.log("Wine quantity by GRAPE: ",cellar.findQuantityByGrapeVariety("Sauvignon"));
//YEAR:
console.log("Wine quantity by YEAR: ",cellar.findQuantityByYear(2017));
//TYPE OF BEER:
console.log("Beer quantity by TYPE: ",cellar.findQuantityByBeerType("IPA"));


//TOTAL NUMBER OF BOTTLES:
console.log(cellar.findTotalNumberOfBeers());
console.log(cellar.findTotalNumberOfWines());
console.log(cellar.findTotalNumberOfSpirits());
console.log(cellar.findTotalNumberOfBottles());


console.log(cellar);
