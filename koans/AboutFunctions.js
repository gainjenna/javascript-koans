describe("About Functions", function() {

  it("should declare functions", function() {
<<<<<<< HEAD

    function add(a, b) {
      return a + b;
    }

=======
    
    function add(a, b) {
      return a + b;
    }
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";
<<<<<<< HEAD

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

=======
    
    function getMessage() {
      return message;
    }
    
    function overrideMessage() {
      var message = "Inner";

      return message;
    }
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
=======
  it("should have lexical scoping", function() {
    var variable = "top-level";

    function parentfunction() {
      var variable = "local";

>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
=======
  it("should use lexical scoping to synthesise functions", function() {
    
    function makeIncreaseByFunction(increaseByAmount) {
      return function(numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }
    
    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);
    
    expect(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function() {
    
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    
    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
    
    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    
    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
    
    function returnAllArgs() {
      var argsArray = [];

>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
<<<<<<< HEAD

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
=======
    
    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function() {
    var appendRules = function(name) {
      return name + " rules!";
    };
    
    var appendDoubleRules = function(name) {
      return name + " totally rules!";
    };
    
    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);
    
    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
      
  });

  it("should use function body as a string", function() {
    var add = new Function("a", "b", "return a + b;");
    expect(add(1, 2)).toBe(FILL_ME_IN);
     
    var multiply = function(a, b) {
      // An internal comment
      return a * b;
    };
    expect(multiply.toString()).toBe(FILL_ME_IN);
  });    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
});
