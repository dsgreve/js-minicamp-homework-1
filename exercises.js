//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var myNumber = num * 10;
  return myNumber;
  }
multiplyByTen(53);

function subtractFive(num) {
  //return num after subtracting five
  var myNumber = num - 5;
  return myNumber;
}
subtractFive(25);

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length == str2.length) {
    return true;
  } else {
    return false;
  }
}
areSameLength('here I am','here U are');


function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x == y) {
    return true;
  } else {
    return false;
  }
}
areEqual('dog', 'dog');

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90){
    return true;
  } else {
    return false;
  }
}
lessThanNinety(70);

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
greaterThanFifty(35);

function add(x, y) {
  //add x and y together and return the value
  var sum = x + y;
  return sum;
}
add(5,21);

function subtract(x, y) {
  //subtract y from x and return the value
  var difference = (x - y);
  return difference;
}
subtract(100,20);

function divide(x, y) {
  //divide x by y and return the value
  var quotient = (x/y);
  return quotient;
}
divide(25,5);

function multiply(x, y) {
  //multiply x by y and return the value
  var product =(x*y);
  return product;
}
multiply(5,5);

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var quotient = (x%y);
  return quotient;
}
getRemainder(20,4);

function isEven(num) {
  //return true if num is even
  //otherwise return false
  var myNumber = num % 2;
    if (myNumber == 0){
    return true;
  } else {
    return false;
  }
}
isEven(5);

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  var myNumber = num % 2;
  if (myNumber != 0) {
    return true;
  } else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  var myNumber = num * num;
  return myNumber;
}
square(9);

function cube(num) {
  //cube num and return the new value
  var myNumber = (num * num)* num;
  return myNumber;
}
cube(4);

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var myPower = Math.pow(num, exponent);
  return myPower;
}
raiseToPower(7, 2);

function roundNumber(num) {
  //round num and return it
  var myNumber = Math.round(num);
  return myNumber;
}
roundNumber(2.8);

function roundUp(num) {
  //round num up and return it
  var myNumber = Math.ceil(num);
  return myNumber;
}
roundUp(2.1);

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var myText = str + '!';
  return myText;
}
addExclamationPoint('hello world');

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  return firstName + ' ' + lastName;
}
combineNames('Dale', 'Greve');

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var myGreeting = 'Hello ' + name + '!';
  return myGreeting;
}
getGreeting('Sam');

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  return length * width;
}
getRectangleArea(5,10);

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  return (base * height)/2;
}
getTriangleArea(25,16);

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var myCircle = 3.14 * (radius * radius);
  return Math.round(myCircle);
}
getCircleArea(100);

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}
getRectangularPrismVolume(10,25,25);


//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
