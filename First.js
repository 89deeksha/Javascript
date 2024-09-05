console.log("Hey welcome to js");
let mom = ("Slep")
let me = ("cheek")
let After = ("Red")
console.log(mom)
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

for (a = 1; a <= 4; a++) {
    console.log("Deeksha", a)
}
//while loop
i = 1
while (i <= 4) {
    console.log("i=", i)
    i++;
}
//for-of loop
let p = "deeksha";
for (let o of p) {
    console.log("o=", o);
}
//for-in loop
let no = {
    "Deeksha": 1,
    Age: 22,
    class: "BCOM"
};
for (let key in no) {
    console.log("key", key, "value=", no[key]);
}
//practice question-find all the even values from 0-100
for (v = 0; v <= 100; v++) {//even number

    if (v % 2 === 0) {
        console.log(v)
    }
}
// Q2. create a game where you start with any random number. Ask the user to keep guessing until it reach the exact number.
let game = 50
let pro = prompt("Guess any number: ");
while (pro != game) {
    pro = prompt("Opps the number is incorrect", "Please try again");
}
console.log("Congrats! your choice is correct");
let obj = {
    item: "pen",
    price: 10,
};
console.log("The cost of ", obj.item, "is=", obj.price, "Rupee");
//arrays-we use array to put information in linear way and any data type form
let arr = [40, 50, 60, 70]
//in arrays we can change the value or mutable but strings are not mutable 
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arry_1 = ["delhi", "bangalore", "mathura"];
for (let arr_2 of arry_1) {
    console.log(arr_2);
}
//Q3 for a given array with the price of five items-->[250,645,300,900,50].All these items have 10%off now we have to store that values after allowing discounts
let items = [250, 645, 300, 900, 50];
let idex = 0;
for (let val of items) {
    let offer = val / 10
    val = val - offer
    console.log(`value of index at ${idex}=${val}`);
    idex++;
}
//push and pop use to update and delete the values inside array
let fruits = ["apple", "mango", "banana", "orange"]
fruits.pop()
console.log(fruits)
fruits = fruits.push("Litchi")
console.log(fruits);
//concat for multipple values
let country = ["Russia", "Germany", "Newzland", "India"];
let food = ["Idli", "Dosa", "Fries", "Pizza"];
let beverages = ["Colddrink", "Juice", "Coffee", "Tea"];
let together = country.concat(food, beverages);
console.log(together);
//splice is used to add , delete, replace the arry
let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr_2 = arr_1.splice(2, 2, 101, 102);
console.log(arr_2);

















