// Intentially made global by leaving off var before variable
// Lets you shortcut a built in global function, like console.log... you can now just write log('Hello')
log = console.log.bind(console);

// Semi-colons are optional
var iHaveASemiColon = true;
var iDoNotHaveASemiColon = true

// Take command-line input (https://nodejs.org/docs/latest/api/process.html#process_process_argv)
// In terminal: node variables.js hello
//console.log(process.argv[2]); // will be 'hello'

// Example basic JavaScript code
var defaultName = 'Collin';

function sayHello(name) {
    if (name === undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}

// Function calls, and line vs block comments
//sayHello();
//sayHello('Cyrus');
/*sayHello('Caius');
sayHello('Carys');*/

// Acceptable variable names, camel case is best
var transportationName = 'Prius';
var transportationType = 'Car';
var $cost = 'Too Much';
var _green = true;
var __blue = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

// Variable types
var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

// Function scope, var declared inside of function stays inside of function scope
function testVariables () {
    var thisIsNotAvailableOutside = true;

    // From within a function, you can access a higher scoped variable from outside the function
    console.log(thisIsAVariable);
}
//console.log(thisIsNotAvailableOutside);

if (true === true) {
    // Let keyword used instead of var, locks this variable inside the curly bracket scope
    let thisIsAVariableOutside = true;
}
//log(thisIsAVariableOutside);

// Constant variables cannot change values once set
const thisCannotChange = true;
//thisCannotChange = false;

// Declaration with value
var firstName = 'Collin';
// Redefining variable value, no var declaration needed
firstName = 'Cyrus';

// Declaration with undefined value
var lastName;
//console.log(lastName); // <- output at this point in the code

// Variable data types
var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = false;
var thisIsNumber = (12.34);
var thisIsString = 'My Favorite Number Is 12.34';
var thisIsExpression = ((1 + 1) * 100 / 4 - 8);
//console.log(thisIsUndefined, thisIsNull, thisIsBoolean, thisIsNumber, thisIsString, thisIsExpression);

// String concatenation
var verb = 'ran';
var sentence = 'Flying by the tower, I ' + verb + ' to ' +
'safety.';
//console.log(sentence);

// Number math addition
var verb = 1;
var sentence = 12 + verb + 12;
//console.log(sentence);

// String data type conversion
var verb = '1';
var sentence = 12 + verb + 12;
//console.log(sentence);

// ES6 String Templates
var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
safety.`;
//console.log(sentence);

// Ternary
var on = false
var lightSwitch = (on ? 'The light is on.' : 'The light is off.')
//console.log(lightSwitch)
