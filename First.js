console.log("Hey welcome to js");
let mummy = ("Thaapad")
let me = ("gal")
let After = ("Red")
console.log(mummy)
console.log(me)
console.log(After)
const pi = 3.14;
var r = 4

r = 5;
var area = pi * r;
console.log(area);
console.log(area);
// {} this is block we used it to define some value both the time it will display differ values
{
    let a = 4;
    console.log(a);
}
// next
{
    let a = 2;
    console.log(a)
}
{
    let x = BigInt("123");
    console.log(x)
}
const student = {
    fullname: "Deeksha",
    Age: 2,
    cgpa: 8



};

let a = 2
let b = 4
let c = a + b
console.log("a+b=", c)

a = a++
console.log("a=", a++)//post increament it will not increase value in next step it increase
console.log("a=", a)
console.log("a=", ++a)//pre increament it will increase the value first then increase
let y = 7
let z = "7"
console.log("y==z", y == z)//==is only check the values in it
console.log("y===z", y === z)//===is check value as well data type strictly
//condition statements
let age = 16
if (age >= 18) {
    console.log("You can vote");
}
if (age < 18) {
    console.log("you can not vote")
}
let mode = "dark"
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);
let modes = "dark"
let colors;
if (modes === "dark") {
    colors = "black";
}

else { colors = "red" }

//if elseif condition statements
let college = "not finish";
let decide;
if (college === "finish") {
    decide = "go for masters"
}
else if (college === "not finish") {
    decide = "go for internship"
}
else ("go for business");
console.log(decide);
//ternary operators it work on three operands in that 1is condition? 2is output: 3is output;
let Age = 30
let result = Age >= 30 ? "Adult" : "Child";//simpler way of if else
alert("Wecome to this page")
let prom = prompt("Hello!");
console.log(prom)
let num = prompt("Write any number")
if (num % 5 === 0) {
    console.log(num, "is divisible by 5")
}
else {
    console.log(num, "not divisible by 5")
}
//practice question write a number which can giv grades as per score
//80-100;A, 70-79;B, 60-69;C,50-59;D,0-49;E
let marks = 78;
let grade;
if (marks >= 90 && marks <= 100) {
    grade = ("A");
}
else if (marks >= 70 && marks <= 89) {
    grade = ("B");
}
else if (marks >= 60 && marks <= 69) {
    grade = ("C");
}
else if (marks >= 50 && marks <= 59) {
    grade = ("D");
}
else if (marks >= 0 && marks <= 49) {
    grade = ("E");
}

console.log("According to score grade will be=", grade);













