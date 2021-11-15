var myFirstString = 'Ez egz string';
var mySecondString = "egy sorban lehet";
var myThirdString = `Tobb sorbanlehet`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 651800;

var myFirstBoolean = true;
var mySercondBoolean = false;

var myFirstArray = ["1984", "39 kulcs", "100 ev magany", "Mester es Margarita", "HomoSapiens"];

var mySecondArray = [1984, "39 kulcs", "100 ev magany", "Mester es Margarita", "HomoSapiens"];

var myFirstObject = {
  title: "Mester es Margarita",
  year: 1966,
  author: "Mikhail Bulgakov",
  translations: ["hu", "en", "de", "fr"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 2 + 1;
var b = 2;
var c = a + b;
console.log(a);
console.log(b);
console.log(c);

function add(firstNumber, secondNumber) {
  if (firstNumber > 0) {
    console.log("Az elso szam nagyobb mint 0.");
  } else {
    console.log("Az elso szam kisebb vagy egyenlo mint 0.");
  }
}

add(1, 2);
add(17948, 679);

/*
Richárd Atom10:10
ha az első szám nagyobb mint a második
akkor az elsőből vonja ki a második számot
ha a második szám nagyobb akkor a másodikból vonja ki az elsőt
*/

function biggerThan(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber - secondNumber);
  } else {
    if (firstNumber === secondNumber) {
      console.log("The numbers are the same. The result is =", secondNumber - firstNumber)
    } else {
      console.log(secondNumber - firstNumber);
    }
  }
}

biggerThan(100, 99);
biggerThan(1, 99);
biggerThan(5, 5);
biggerThan(100, -99)
biggerThan(-1, 99);

function ifElseCheck(text) {
  if (text === "Hello") {
    console.log("A text az volt, hogy Hello.")
  } else if (text === "Hello") {
    console.log("Masodik if else ag.")
  }
  if (text === "Hello") {
    console.log("Ez egz masik if else vizgalat.")
  }
}

ifElseCheck("Hello");

function compare(a, b) {
  console.log("== ", a == b);
  console.log("=== ", a === b);
  var c = b + a;
  console.log(typeof c);
  console.log(c);
}

compare("1984", 1984);
compare("Nyitva", "tartas");
compare(7, 7);
compare(myFirstArray[0], mySecondArray[0]);

var myFirstFunctionVaraiable = function () {
  console.log("Ez egy fv amit valtozoban taroltunk el.")
}

myFirstFunctionVaraiable();

//IIFE (Immediately Invoked Function Expression)//
(function (text) {
  console.log("Ezt a fv-t egybol meghivtuk.");
  console.log(text);
}("Bye"));

var mySecondFunctionVariable = function () {
  console.log("Ez vajon mikor fut le.");
}

var anotherVar = mySecondFunctionVariable;

anotherVar();

var theLasFunction = function (text) {
  console.log(typeof text);
  console.log(text());
}

theLasFunction(function () {
  return "I`m calling the last function."
})
/*
var window = {
  addEventListener: function (eventName, eventFunction) {
    
  }
}
*/
window.addEventListener("load", function () {
  console.log("Az oldal betoltodott.");
})
