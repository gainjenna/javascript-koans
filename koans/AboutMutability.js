describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";
<<<<<<< HEAD

=======
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
<<<<<<< HEAD
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

=======
      this.lastname  = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
<<<<<<< HEAD
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

=======
    Person.prototype.getFullName = function() {
      return this.firstname + " " + this.lastname;
    };
    
    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
    
    aPerson.getFullName = function() {
      return this.lastname + ", " + this.firstname;
    };
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;
<<<<<<< HEAD

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
=======
      
      this.getFirstName = function() { return firstname; };
      this.getLastName  = function() { return lastname; };
      this.getFullName  = function() { return fullName; };
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
<<<<<<< HEAD
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

=======
    aPerson.lastname  = "Andrews";
    aPerson.fullName  = "Penny Andrews";
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

<<<<<<< HEAD
    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

=======
    aPerson.getFullName = function() {
      return aPerson.lastname + ", " + aPerson.firstname;
    };
    
>>>>>>> cb664ff63042557e61e572793b5794df0daa8c07
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

});
