<<<<<<< HEAD
var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
=======
var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
<<<<<<< HEAD

=======
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
<<<<<<< HEAD

=======
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
<<<<<<< HEAD

    var sum = 0;
=======
    var sum = 0;

>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
<<<<<<< HEAD

=======
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(sum).toBe(FILL_ME_IN);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
<<<<<<< HEAD

=======
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var sum = FILL_ME_IN;    /* try chaining range() and reduce() */

    expect(233168).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
<<<<<<< HEAD

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

=======
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
  });

  it("should find the 10001st prime", function () {

  });
  */
});
