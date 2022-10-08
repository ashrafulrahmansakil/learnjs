//..08/10/2021 start

/*
            Stack leraner Javascript
            জাভাক্রিপ্ট কেসসেন্সটিভ

*/
//>>>> 000 give away
//>>>> 001 Course Introductions | JS All You Need to Know | JS Bangla Tutorials
//>>>> 002 who is this course for
//>>>> 003 how to use this course contents
//>>>> 004 setup working environment
//>>>> 005 first code of Js hello world
//console.log যেকোনো কিছু টাইপ করা যায়
console.log("hello world");
console.log(456456);
console.log(55.222);
console.log("544" + 5444);

//>>>> 006 Variables

var myName = "ashraful rahman sakil";
var age = 24;
console.log(myName);

//>>>> 007 Js Reserved words
//  এটা জাভাক্রিপ্ট কখনও ব্যবহার করতে দেয় না

//>>>> 008 Js Data Type
// প্রিমিটিভ ডেটা টাইপ
// Number > String > Boolean > undefined > null

// অবজেক্ট ডেটা টাইপ
// Arry > object >Function

//>>>> 009 Js Basic Number

var Num = 55;
var Numb = 55;
var Num = 55;

//>>>> 010 Js Basic Strings
var num = "hello";
console.log(num);
var str = "i am sakil";
console.log(str);
//>>>> 011 Js booleans
var s1 = Boolean(true);
var s2 = Boolean(false);
console.log(s1);
console.log(s2);
//>>>> 012 Js Null & undefined
var abc;
var xyz = null;
console.log(abc);
console.log(xyz);
//>>>> 013 Js type Conversion
var str = "1000";
var n = 110;
console.log(str);
console.log(Number.parseInt(str));
// console.log(n.toString());
//>>>> 014 Octal & Hexadecimal
//>>>> 015 Js Operators
// Arithmetic + - * / % ++ --
var a = 50;
var b = 20;
console.log(a % b);
//>>>> 016 Js Statements

//>>>> 017 Js Math Functions
var n = 4.555;
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
console.log(Math.max(400, 500, 700));
console.log(Math.min(400, 500, 800));
console.log(Math.pow(2, 4));
console.log(Math.pow(4, 8));
console.log(Math.sqrt(9));
console.log(Math.sqrt(49));
console.log(Math.random());

//>>>> 018 Js Data Functions

//>>>> 019 Js Comments
// comments:  /* দুইভাবে করা যায় // */

//>>>> 020 Js Logic & Conditions
/*

if else else if switch 
*/

//>>>> 021 if condition >> এটাতে হয় বড় হবে না হলে ছোট হবে বা সমান
var a = 15;
var b = 5;

if (a > b) {
  console.log("a gether than b");
}

//>>>> 022 else condition
var a = 50;
var b = 220;

if (a > b) {
  console.log("a gether than b");
}
// একা একা কাজ করে না
else {
  console.log("b less than a");
}

//>>>> 023 else if >> প্রথমে if পরে else if পরে if else পরে else হবে এভাবে লিখতে হবে
var a = 25;
var b = 15;
var x = 45;

if (a > b) {
  console.log("15 gether than 5");
} else if (a < b) {
  console.log("15 less than 5");
} else {
  console.log("they are same");
}

if (a > b) {
  console.log("you are young");
} else if (a < b) {
  console.log("you are mataure");
} else {
  console.log("you are baby");
}

//>>>> 024 switch statement
var date = new Date();
var today = date.getDay();

switch (today) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
}
//>>>> 025 logical operator
/*

A

*/

//>>>> 026 ternary operator
var a = 10;
var b = 20;
var c = a > b ? 100 : 200;
console.log(c);

//>>>> 027 And Or Shorthand
//>>>> 028
//>>>> 029
//>>>> 030
//>>>> 031
//>>>> 032
//>>>> 033
//>>>> 034
//>>>> 035
//>>>> 036
//>>>> 037
