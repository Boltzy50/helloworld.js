// Hello World: My First JavaScript program
console.log("Hello World"); // Look! I did it​
// Save values for later use
const friendlyGreeting = "Rodger"; // I am going to use this one again
console.log(friendlyGreeting);

const whatAmIDoing = "I just combine two varibles!";
console.log(friendlyGreeting + " " + whatAmIDoing);
console.log("Rodger" + " " + "I just combine two varibles!");​ 
const theAnswer = 23 + 19;
console.log(theAnswer);
​
const firstNumber = 23;
let secondNumber = 19;
const theAnswer = firstNumber + secondNumber; // 23 + 19 = 42
console.log("The answer is", theAnswer); // My answer is 42
​
secondNumber = 100;
const secondAnswer = firstNumber + secondNumber; // 23 + 100 = 123
console.log("My second answer is ", secondAnswer);//secondAnswer = 123
console.log("The answer is still", theAnswer); // my answer is still 42
console.log("Even though the second number is now ", secondNumber); //second number is 100
​
const theString = `My second answer is ${theAnswer} not the ${secondAnswer}`
console.log(theString);
​
//Call function
//add();
​
//now I am going to right a function
function add(){
    let num1 = 2;
    let num2 = 3;
    let funAnswer = num1 + num2;
    return console.log(funAnswer);
    
}
//now I am going to call my function
//add(2,3); //<-- return 5
​
//Created variable for numbers, and function
//let numberOne = 2;
//let numberTwo = 3;
//let functionAnswer = add(numberOne,numberTwo);
​
​
//Print and call the function
//console.log(functionAnswer); // 5

//objects, arrays, and loops

//object
const friendInfo = {
        "name": "Alan Turing",
        "cell": "6017576",
        "birthday": "June 23",

}

//Calling object value
//2console.log(friendInfo.fullName);

//Creating a superhero object
const superHero = {
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos: 1
}

//Updating an existing value
superHero.alias = "Princess Diana of Themyscira"

// Equivalent
//superhero["alias"] = "Princess Diana of Themyscira"

//Adding a new value
//superHero.hometown = Themyscira



//arrays
const todos = ["pet the cat",
               "go to work",
               "shop for groceries",
               "go home",
               "feed the cat" ]

const firstItem = todos[0]
console.log(firstItem);

//Callin an Array Position
const firstItem = todos[0]
console.log(firstItem);

//find out how many items are in array

const countArrayItems = todos.length
//^^ Needs to be below all pushes in code

console.log("How Many items do I have?" + countArrayItems);


//add item to the todo list
todos.push ("go to sleep");

//check my length
console.log(todos.length);

//Look at my array
console.log(todos);

//Delete from array
todos.splice(1,2);

//check length
console.log(todos.length);

//look at my array
console.log(todos);

//Join string to item list
const todoString = todo.join('!\n');

//Call the join
console.log(todoString1);

//Create a string
const todoString1 = 'pet the cat! go to work! shop for groceries! go home! feed the cat!';

//Splitting the string
const todos1 = todoString1.split('! ');

//calling todos
console.log(todos1);

//Booleans
const todos2 = ['pet the cat', 'feed the cat'];

function printTodoCount(arrayCount){
    numberCount = arrayCount.length;
    showCount = console.log(numberCount)
    return numberCount;

}


if (printTodoCount(todos2) == 2)
{
    console.log(booleanCount = true);
}
else{
    console.log(booleanCount = false);
}
    

//remove an item
//todos.pop();

//printTodoCount(todos2);

//JS 101 Explore Objects

const jeff = {
    fullName : "Jeff Bolton",
    age : 25,
    favColor : "purple",
    likesPizza : true,

}


const colorProp = jeff.favColor;

console.log(colorProp);

jeff.fullName = "Bolton";

delete jeff.likesPizza;
console.log(jeff)

jeff.likesCalzones = true;
console.log("Jeff Likes Calzones" + " " + jeff.likesCalzones);

