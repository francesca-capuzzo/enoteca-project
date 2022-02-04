
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

console.log(beer1.toString());
console.log(wine2.toString());
console.log(super4.toString());

// console.log(beer2.calculatePrice());
// console.log(wine2.calculatePrice());
// console.log(super2.calculatePrice());

const cellar = new Cellar();
cellar.addbeers(beer1)
cellar.addbeers(beer2)
cellar.addbeers(beer3)
cellar.addbeers(beer4)
cellar.addwines(wine1)
cellar.addwines(wine2)
cellar.addwines(wine3)
cellar.addwines(wine4)
cellar.addsuperalcs(super1)
cellar.addsuperalcs(super2)
cellar.addsuperalcs(super3)
cellar.addsuperalcs(super4)


console.log(cellar.finditembyname("Rum"));
console.log(cellar.finditembyname("Pino"));
// console.log(cellar.finditembycode(wine2.uniqueCode));
console.log(cellar.finditembygrape("vermentino"));

beer1.addquantity(2)
beer1.removequantity(24)

console.log(cellar);
