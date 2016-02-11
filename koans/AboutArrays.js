describe("About Arrays", function() {

<<<<<<< HEAD
  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe(FILL_ME_IN); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(FILL_ME_IN);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
=======
  // We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe(FILL_ME_IN); // A mistake?-- http:javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(FILL_ME_IN);

    var multiTypeArray = [0, 1, "two", function() { return 3; }, {value1: 4, value2: 5}, [6, 7]];
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(multiTypeArray[0]).toBe(FILL_ME_IN);
    expect(multiTypeArray[2]).toBe(FILL_ME_IN);
    expect(multiTypeArray[3]()).toBe(FILL_ME_IN);
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN);
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN);
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN]);

=======
  it("should understand array literals", function() {
    var array = [];
    expect(array).toEqual([]);
    
    array[0] = 1;
    expect(array).toEqual([1]);
    
    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN]);
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    array.push(3);
    expect(array).toEqual(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should understand array length", function () {
=======
  it("should understand array length", function() {
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(FILL_ME_IN);

<<<<<<< HEAD
    var tenEmptyElementArray = new Array(10);
=======
    var tenEmptyElementArray = new Array(10); 
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

=======
  it("should slice arrays", function() {
    var array = ["peanut", "butter", "and", "jelly"];
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
=======
  it("should know array references", function() {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    }
    passedByReference(array);
    expect(array[1]).toBe(FILL_ME_IN);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe(FILL_ME_IN);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should push and pop", function () {
=======
  it("should push and pop", function() {
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual(FILL_ME_IN);
<<<<<<< HEAD

=======
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var poppedValue = array.pop();
    expect(poppedValue).toBe(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });

<<<<<<< HEAD
  it("should know about shifting arrays", function () {
=======
  it("should know about shifting arrays", function() {
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(FILL_ME_IN);
<<<<<<< HEAD

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });
=======
    
    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });  
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
});
