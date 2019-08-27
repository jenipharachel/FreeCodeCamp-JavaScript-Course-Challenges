var Person = function(firstAndLast) {
  
  var word = firstAndLast.split(" ");
  var firstName = word[0];
  var lastName = word[1];
  var firstAndLastName = firstName.concat(" ",lastName);

  this.getFullName = function() {
    return firstName.concat(" ",lastName);
  };
  this.setFullName = function(firstAndLast) {
    word = firstAndLast.split(" ");
    firstName = word[0];
    lastName = word[1];
    firstAndLastName = firstName.concat(" ",lastName);
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

