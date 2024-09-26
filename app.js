// Chap 14
// Qno 1
var studentNames = [];

// Qno 2
var futurestudentNames = [];

// Qno 3
var stringarr = ["Alice", "Bob", "Charlie"];

// Qno 4
var numbers = [1, 2, 3, 4, 5];

// Qno 5
var booleans = [true, false, true, false];

// Qno 6
var mixedArray = [1, "Hello", true, null, name, "Alice" ,1, 2, 3];

// Qno 7
let educationQualifications = ["SSC", "<br>", "HSC","<br>", "BCS","<br>", "BS","<br>", "BCOM","<br>", "MS","<br>", "M. Phil.","<br>", "PhD"];
document.write(educationQualifications + '<br>'+ "<br>");

// Qno 8
var studentNames = ["Ali", "Sara", "John"];
var studentScores = [320, 230, 480];

var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    console.log(studentNames[i] + " scored " + studentScores[i] + " marks with a percentage of " + percentage + "%.");
}

// Qno 9
var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
document.write(colors + "<br>");

// Part(a)
var newColor = prompt("Enter a color to add to the beginning of the list:");
colors.unshift(newColor);
document.write(colors + "<br>");

// Part(b)
var newColor = prompt("Enter a color to add to the end of the list:");
colors.push(newColor);
document.write(colors + "<br>");

// Part(c)
var newColor1 = prompt("Enter the first color to add to the beginning of the list:");
var newColor2 = prompt("Enter the second color to add to the beginning of the list:");

colors.unshift(newColor1, newColor2);
document.write(colors + "<br>")

// Part(d)
colors.shift(); 
document.write(colors + '<br>')


// Part(e)
colors.pop(); 
document.write(colors + '<br>')

// Part(f)
var index = parseInt(prompt("Enter the index (0 to " + (colors.length) + ") to add a color:"));
var newColor = prompt("Enter the color name you want to add:");

if (index >= 0 && index <= colors.length) {
    colors.splice(index, 0, newColor);
} else {
    alert("Invalid index. Please enter a number between 0 and " + colors.length + ".");
}

document.write(colors + '<br>')

// Part(g)
var index = parseInt(prompt("Enter the index (0 to " + (colors.length - 1) + ") to delete colors:"));
var numberToDelete = parseInt(prompt("Enter how many colors you want to delete:"));

if (index >= 0 && index < colors.length && numberToDelete > 0) {
    colors.splice(index, numberToDelete); 
} else {
    alert("Invalid input. Please ensure the index is within range and the number to delete is positive.");
}
document.write(colors + '<br>')

// Qno 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);
console.log(cities)

console.log(selectedCities)


// Qno 12
var arr = ["This", " is", " my", " cat"];

var joinedString = arr.join("");
console.log(arr);
console.log(joinedString)

// Qno 13
var queue = [];

queue.push("Keyboard"); 
queue.push("Mouse"); 
queue.push("Printer");
queue.push("Monitor");

var output = "Values in FIFO order:<br>";

output += queue.shift() + "<br>";
output += queue.shift() + "<br>"; 
output += queue.shift() + "<br>";
output += queue.shift() + "<br>";

document.write(output + "<br>" + "<br>")

// Qno 14
var stack = [];

stack.push("Monitor");  
stack.push("Printer"); 
stack.push("Mouse"); 
stack.push("Keyboard"); 

var output = "Values in LIFO order:<br>";

output += stack.pop() + "<br>"; 
output += stack.pop() + "<br>";
output += stack.pop() + "<br>"; 
output += stack.pop() + "<br>"; 

document.write(output + "<br>" + "<br>")

// Qno 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>' + "<br>" + "<br>");

// Chap 17 to 20
// Qno 1
var multiArray = [];

multiArray[0] = [];
multiArray[1] = [];
multiArray[2] = [];

console.log(multiArray);

// Qno 2
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

for (var i = 0; i < 3; i++){
    for(var a = 0; a < 3; a++){
    document.write(matrix[i][a] + " ")
    }
    document.write("<br>" + "<br>")
}

// Qno 3
var counting = "";

for (var i = 1; i <= 10; i++) {
    console.log(i)
}

// Qno 4
var input = +prompt("Enter any number");
var range = +prompt("Enter range");

document.write("Table" + "<br>" + "<br>")

for (var i = 1; i <= range; i++) {
  document.write(`${input} x ${i} = ${input * i} <br>`);
}

// Qno 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) { 
    document.write(fruits[i] + '<br>')
}

// Qno 6 part a
var countingSeries = "";

for (var i = 1; i <= 15; i++) {
    countingSeries += i;
    if (i < 15) {
        countingSeries += ", ";
    }
}
console.log(countingSeries);

// Qno 6 part b
var revcount = "";

for (var i = 10; i >= 1; i--) {
    revcount += i; 
    if (i > 1) {
        revcount += ", ";
    }
}
console.log(revcount);

// Qno 6 part c
let oddSeries = "";

for (let i = 1; i < 20; i += 2) {
    oddSeries += i; 
    if (i < 19) {
        oddSeries += ", "; 
    }
}
console.log(oddSeries);

// Qno 6 part d
let series = "";

for (let i = 2; i <= 20; i += 2) {
    series += i + "k";
    if (i < 20) {
        series += ", "; 
    }
}
console.log(series);

// Qno 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to the bakery! What do you want to search for?").toLowerCase();

if (A.includes(userInput)){
    alert(userInput + " is available in our bakery");
} else {
    alert(userInput + " is not available in our bakery");
}

// Qno 8
var largenum= [24, 53, 78, 91, 12];
var largest = Math.max(...largenum);
console.log(largenum);
console.log("The largest number is" + " " + largest);

// Qno 9
var smallnum = [24, 53, 78, 91, 12];
var smallest = Math.min(...smallnum);
console.log(largenum);
console.log("The smallest number is" + " " + smallest);

// Qno 10
var multiplesoffive = "";

for(var i = 1; i <=100; i++){
    if(i % 5 === 0){
        multiplesoffive += i + ", "; 
    }
}

multiplesoffive = multiplesoffive.slice(0, -2);

console.log(multiplesoffive);











