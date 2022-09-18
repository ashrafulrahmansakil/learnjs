/*

const myFriends = [
    'Ayman',
    'Ashik',
    'Abir',
    'Emad',
    'Emran',
    'Boby',
    'Bashir',
    'Bochiya',
    'Ferdaus',
    'Faraz',
    'Salam',
    'Shafi',
    'Safwan',
    'Sanjina'
];

const nameGroup = myFriends.reduce((updatedValue, currentValue) => {
    const fristLatter = currentValue[0].toUpperCase();
    if (fristLatter in updatedValue) {
        updatedValue[fristLatter].push(currentValue);
    } else {
        updatedValue[fristLatter] = [currentValue];
    } return updatedValue;
}, {});

Object.keys(nameGroup).forEach((key) => {
    console.log('-----------', key, '------------------');
    nameGroup[key].forEach((myFriends) => {
        console.log(myFriends);
    });
});

      {     লক্ষ্য একটাই ভালো ডেভেলপার হওয়া সাথে আছে  Learn with sumit হাতে কলমে জাভাক্রিপ্ট, stack learner, w3schools,anisul islam,english tutorial,books   }

       ###Task---01

* ১. জাভাক্রিপ্ট কি?

>>> জাভাক্রিপ্ট হলো একটি হাই লেভেল ল্যাংগুয়েজ। । এটি ওয়েবে ব্যবহ্দত হয়।

** ২. জাভাক্রিপ্ট কেন ব্যবহার করা হয়?
>>> ওয়েব ডিজাইন ও ডেভেলপমেন্টের মাদার হলো জাভাক্রিপ্ট প্রোগ্রামিং ল্যাংগুয়েজ । এটি দিয়ে যে কোনো ধরনের ওয়েবসাইট ,ওয়েব এপ্লিকেশন,সফটওয়্যার বানানো যায়। যে কেউ খুব সহজে শিখতে পারে,সিনটেক্স সহজ

*** ৩. জাভাক্রিপ্ট আউটপুট কোথায় দেখা যায়?
>>> জাভাক্রিপ্টকে সাধারণত দুইভাবে দেখা যায় , এক ব্রাউজারের কনসোলে , দুই নোট জে এস রানটাইমের সাহায্যে টার্মিনালে।

আর আউটপুট কমান্ডগুলো হলো 

(1).browser console > console.log();

(2). alert box > window.alert();

(3). html element > document.write();

(4). html output > innerHtml;

*/

console.log("hello learn javascript group");

console.log("this is a javascript");

// document.write(30+20);

// window.alert(50+10);

// document.getElementById("demo").innerHTML = 10 + 10;


/*

###Task---02

৪. Javascript Statements
হলো Values , Expressions , Variables , Operators, Comments এর সমন্বয়

কোনো কিছু লেখা বা কমান্ড দেওয়া আর স্টেটমেন্ট / বিবৃতি পর পর লাইন বাই লাইন এক্সিকিউট করে থাকে। 
কয়েকটি স্টেটমেন্ট / বিবৃতি রয়েছে

(i) সেমিকোলন ;
(ii) হোয়াইট স্পেস( )
(iii) অপারেটর (+ - / * =)
(vi) লাইন ব্রেক > এক লাইনের বড় লাইনকে ব্রেক করে পরের লাইনে নেওয়া
(v) কোড ব্লক > গ্রুপে গ্রুপে ভাগ করে ফেলা 
(vi) জাভাক্রিপ্ট কী ওয়ার্ড >রিজার্ভ করে রাখা সিনটেক্স ,এগুলো ব্যবহার করা যায় না ।

৫. Javascript Syntex

জাভাক্রিপ্ট সিনটেক্স হলো গঠনপ্রণালি / লেখার নিয়মকানুন

জাভাক্রিপ্ট এ ভ্যালু দেওয়া হয় ।

(1) Fixed values / ফিক্সড ভ্যালু
> Literals... হলো ফিক্সড ভ্যালু
১.Numbers > 12345;
২. Strings > "hello javascript";

(2) Variable values / ভেরিয়েবল ভ্যালু
let = a;
a = 10;

3.Operators
>Arithmetic Operators
(5+5)*8

> Assignment Operators(=)
var x, y,
x = 5;
y = 5;

4. Expressions
হলো Values , Variables , Operators এর সমন্বয় একটি ভ্যালুতে ডিফাইন হবে।

5*15

"java" + "script"
5. javascript Key word
let , var , const , 

6. Comments
কোনো কিছু নোট করা বা কি করা হচ্ছে তা লেখা

7. Identifiers
কোনো কিছু নাম বা ঠিকানা

8. Case Sensitive

জাভাক্রিপ্ট এ সবকিছু ইচ্ছা মতো লেখা যায় না, এটার নিজস্ব রুলস আছে

9. CamelCase

Hyphens:[-]
first-name, last-name এগুলো সাপোর্ট নয়

Underscore:
Upper Camel Case (Pascal Case):

FirstName, LastName

first_name, last_name

৬.Javascript comments
কমেন্ট হলো কোনো কিছু করা মানে কিছু বিষয় কি নিয়ে করা তা কি আছে তার সারমর্ম বা হেডলাইন দেওয়া

কমেন্ট প্রধানত দুইভাবে করা হয়
 ** এক > সিঙ্গেল লাইন // 
 ** দুই > মাল্টি লাইন /*
  ---- লিখতে হয় 
*/

/*
   ### Task---03

   ৭.Javascript Veriables
   ভ্যারিয়েবল হলো জাভাক্রিপ্টের বিভিন্ন মানের ভ্যালু রাখার জায়গা আর এটি সর্বত্র ব্যবহার করা যায়।

   ৮. Javascript Let
   Cannot be Redeclared:
   let কে একবারেই ডিক্লেয়ার করা যায়,বার বার নয় কিন্তু ভেরিয়েবলকে বার বার দেওয়া যায়।
   
   Block Scope: কার্লি প্রেসেস {...} এর ভিতরে বিভিন্ন উপাদান ডিক্লেয়াকেই ব্লক স্কোপ বলে।
   
   Redeclaring Variables: ভ্যারিয়েবল var পুনরায় ব্যবহার যোগ্য।

   Redeclaring: Redeclaring a JavaScript variable with var is allowed  সবসময় এলাও
  
   Let Hoisting:  

   ৯. Javascript const: const ধ্রুবক মান দেয় কখনও পরিবর্তন করা যায় না ,মান দেওয়ার পরে
      
  # কন্সর্ট > const কে প্রধানত ৪ টি জায়গায় ব্যবহার করা হয়
      *** ARRAY
      ***OBJECT
      ***FUNCTION
      ***REGEXP
  (i) Cannot be Reassigned: এটাকে পুনঃ ব্যবহার করা যায় না

  (ii) Must be Assigned: const কে ভেঙ্গে করা যায় না

  (iii) Constant Arrays: এর মাধমে সুন্দরভাবে অ্যারে ডিক্লয়ার করতে পারবো 

  (iv) Constant Objects: এর মাধমে সুন্দরভাবে অবজেক্ট ডিক্লয়ার করতে পারবো 

  */

  //  variables:
  //  ধরি: 
  //  //সবসময় সব জায়গায় ব্যবহার করা যাবে।
   var a = 25;
   var b = 15;
   var c = (a+b);
   console.log(c);

  //  let এটা Curly braces {...} মানে সেকেন্ড ব্র্যাকেটর ভিতরের সবকিছু চিনে ব্লক স্কোপ হিসেবে

  // Let:
  let x =5;
  if(true){
    let x = 15;
    console.log(x);
  }
console.log(x);

// var x = 2;    // Allowed গ্লোবাল স্কোপ
// let x = 3;    // Not allowed

// {
// let x = 2;    // Allowed > ব্লক স্কোপ
// let x = 3     // Not allowed
// }

// {
// let x = 2;    // Allowed > ব্লক স্কোপ
// var x = 3     // Not allowed
// }

// let hoisting দিলে ইরর আসবে সব চেক করলে

userName = "java" + "script"
var userName;
console.log(userName);

//  const (i)
//  const pi = 3.141592653589793;
//  pi = 3.14;
// (ii)
// const pi = 3.141592653589793;
// (iii) ‍Arry

const Number = [1, 2, 3, 4, 5];
Number = [6, 8, 9, 54];
console.log(Number);

//(iv) Objects
var cars = {type:"BMW", model:"500" ,color:"red"};

console.log(cars);

/*

###Task---04

১০. JavaScript Operators.

এটা জাভাক্রিপ্টের গুরুত্বপূর্ণ টার্ম । জাভাক্রিপ্টের অপারেটর রয়েছে ৫ ধরনের।
(i) অ্যারিথমেটিক অপারেটর
(ii) কম্পারিজম অপারেটর
(iii) লজিক্যাল / রিলেশনাল অপারেটর
(iv) অ্যাসাইনমেন্ট অপারেটর
(v) কন্ডিশনাল / টার্নারি অপারেটর

১১.(i) JavaScript Arithmetic Operator > যোগ, বিয়োগ, গুণ, ভাগ করা জন্যে অ্যারিথমেটিক অপারেটর ব্যবহার করা হয়।
 +, -, *, /, % ইত্যাদি হলো অপারেটর আর a ,b , A, B উত্যাদি হলো অপারেন্ড।

Arithmetic:
*/

// Addition: (+)যোগ করা জন্যেো
let e = 25;
let f = 25;
console.log(e + f);

var a = 5;
var b = 5;
console.log(a+b);

// // Subtraction: (-) বিয়োগ করার জন্যে
var a = 30;
var b = 25;
console.log(a - b);

// // // Multiplication: (*) গুণ করার জন্যে
var a = 60;
var b = 35;
console.log(a * b);

// // // Division: (/) ভাগ করার জন্যে > ভাগফল দশমিকে এলে দশমিকেই শো করবে।
var a = 30;
var b = 5;
console.log(a / b);

var a = 31.10;
var b = 22.5;
console.log(a / b);

// Modulo: (%) ভাগশেষ করার জন্যে
var a = 50;
var b = 30;
console.log(a % b);

//Increment: (++) এক ঘর করে বাড়বে
var a = 15;
a ++;
++a;
console.log(a);
//Decrement: (--) এক ঘর করে কমবে
var b = 12;
b --;
--b;
console.log(b);

//Exponentiation: (**) কোনো কিছু  ব্যাখ্যা করার জন্যে + ডাবল মান পাওয়া যায় = math.pow

var a = 5;
console.log(a**2);

// Precedence: এক লাইনে প্রকাশ করা
var a =(100 + 4 * 4);
console.log(a);

//১২. (iv) অ্যাসাইনমেন্ট অপারেটর:::: JavaScript Assignment হলো কোনো কিছু এসাইন করা । এভাবে এসাইন করা হয় +=,-=, *+, /= ইত্যাদি।

//simple Assignment:(=)
var a =1;
console.log(a);

//Addition Assignment:(+=)
var a=10;
a+=10;
a= a+10;
console.log(a);
//Subtraction Assignment:(-=)
a-=10;
a= a-10;
console.log(a);

//Multiplication Assignment:(*=)
a*=10;
a= a*10;
console.log(a);

//Division Assignment:(/=)
a/=10;
a= a/10;
console.log(a);

//Modulus Assignment:(%=)
a%=10;
a= a%10;
console.log(a);

let myName ="sakil";
console.log(myName);

const myUser ="sakil";
console.log(myUser);

/*

###Task---05

১৩. JavaScript Data Type. > কোনো কিছুর মানকে ডেটা বলে।
জাভাক্রিপ্টে ডাটা টাইপ প্রধানত দুই ধরনের।

 (i) প্রিমিটিভ ডেটা টাইপ (Primitive Data Type) : ৫ প্রকার।
 
 (A) নাম্বার (Number) : কোনো পূর্ণাঙ্গ সংখ্যাই নাম্বার। যেমন 1 ,2 ,3
 (B) স্ট্রিং (String): ক্যারেক্টারের সিকুয়েন্স। স্ট্রিং লেখার নিয়ম আছে ক্যারেট সাইন('*'."*",`*` ) এভাবে লেখা হয়।আর এর ভিতরে টেক্সট দেওয়া হয় । কোনো নাম্বার দেওয়া হয় না সচরাচর।
 (C) বুলিয়ান (Boolean) : ‍সত্য (true) বা মিথ্যা (false) সিকুয়েন্স। সবকিছু ছোট হাতের।
 (D) আন-ডিফাইন্ড (Undefined) : কোনো কিছু ডিক্লেয়ার / ডিফাইন করা হলেও কোনো ভ্যালু এসাইন বা দেওয়া না হলে ইরর বা আন-ডিফাইন্ড দেখাবে।
 (E) নাল (Null) : এটার প্রকৃত কোনো মূল্য নাই কিন্তু আন-ডিফাইন্ড  বা মান কোনো কিছু না দেখাতে চাইলে দেওয়া যেতে পারে।


 (ii) নন-প্রিমিটিভ ডেটা টাইপ (Non-Primitive Data Type) / রেফারেন্স (Reference) :

  (A) অ্যারে (array)
  (B) অবজেক্ট (Object)
  (C) ফাংশন (Function)
  
  */
//Primitive Data Type

//Number:
var aNum = 10;
console.log(aNum);

//String:
var aNum = "this is javascript";
console.log(aNum);

//Boolean:
  // var isTrue =true; // valid
  // var isTrue =True;  not valid
  // var isTrue =TRUE; // not valid

  // var isFalse =false; // valid
  // var isFalse =False; // not valid
  // var isFalse =FALSE; // not valid

//Undefined:
// let someThing;

//Null:
var goSome = null;
 console.log(goSome);

/*
  ১৪.  JavaScript Function. > জাভাক্রিপ্টে সবকিছু অবজেক্ট । ফাংশনও অবজেক্ট , এটাকে ফাস্ট ক্লাস ফাংশন বলা হয়। 

বিভিন্নভাবে ফাংশকে লেখা যায়। ফাংশনকে যেভাবে ডিক্লেয়ার করা হয় > প্রথমে function > ফাংশন নাম > কার্লি ব্র্যাকেট দিয়ে শুরু পরে যা করতে ইচ্ছা তা দিতে হবে স্টেটমেন্ট এ যাবে পরে আবার কার্লি ব্র্যাকেট দিয়ে শেষ।

function funcName(){
  // statements এটাকে ফাংশন স্টেটমেন্ট বলে।

}

var funcName = function(){
  // statement এটাকে নাম পরিচয়হীন ফাংশন এক্সপ্রেশন বলে ।
}

funcName();

ফাংশনকে ডাকার জন্যে কল করতে হবে।
ফাংশন ফাইনাল স্টেটমেন্ট

function funcName(){
  console.log('hello this is called Function');
}

funcName();

// ফাংশন এক্সপ্রেশন
var funcName = function(){
  console.log('hello, i am from a function');
}

funcName();

/* ফাংশনে একটা স্টেটমেন্ট দিয়ে ফাংশন বোঝার উপায় > দুটি সংখ্যার যোগফল
function aFunc(parameters){
  //do something with the parameters
  //return the result
}

*/

//ফাংশন ডেফিনেশন বা যেভাবে ফাংশন তৈরি করা হয়।

function bFunc(){
  console.log('a simple function .' + ' how to maka a pipeline of function?');
}

bFunc();

// aFunc(arguments);

//Example:
function sumMachine(a,b){
  let sum = a + b;
  return sum;
}

console.log(sumMachine(2,2));
console.log(sumMachine(1,4));


// মেজর পার্ট  array,string,Boolean,object,varuable...
//Example:

function printMyName (name,object){
  console.log('this is a' + name + ' and its a very ' + object + ' language.');
}

printMyName(' javascript ', ' high level ' );

// এক ফাংশনের ভিতরে আরেক ফাংশন আর্গুমেন্ট হিসেবে দিতে চাইলে

function storName(title, callback){
let myTitle ='javascript';
  callback(myTitle);
  console.log('it is nice language' + title);
}

function hello(title){
  console.log('Web apps are dynamic because of ' + title);
}

storName(' javascript',hello);

/*

###Task---06

১৫. JavaScript Objects. > 
জাভাক্রিপ্টের সবকিছুই অবজেক্ট। অবজেক্ট ব্যবহার করা অকে

sakil = {
  পুরো নাম : আশরাফুল রহমান সাকিল
  বয়স: **
  ঠিকানা: বাংলাদেশ
  পেশা: শিক্ষার্থী, ডেভেলপার,প্রোগ্রামার

}

অবজেক্ট কয়েকভাবে ডিক্লেয়ার করা যায়।

var সাকিব = new object();

*/

//simple object

var sakil = {
  fullName : 'Ashraful Rahman Sakil',
  age :'unknown',
  address : 'Bangladesh',
  job : 'student',

}
console.log(sakil);

// আসুন অবজেক্টকে  ডট নোটেশনে দেখি
// document.getElementById('demo1').innerHTML= sakil.fullName;
var sakib = {
  fullName : 'Ashraful Rahman Sakil',
  age :'unknown',
  address : 'Bangladesh',
  job : 'student',

}
console.log(sakib.fullName);

// আসুন অবজেক্টকে ব্রাকেটস নোটেশনে দেখি
let araf = {
  fullName : 'Ashraful Rahman Sakil',
  age :'unknown',
  address : 'Bangladesh',
  job : 'student',

}
console.log(araf['age']);

// নতুন আইটেম যোগ করার উপায়
let rahim = {
  fullName: 'Ashraful Rahman Sakil',
  age: 'unknown',
  address: 'Bangladesh',
  job: 'student',

}

console.log(rahim.zipcode=1700);

// অবজেক্টে ফাংশন এড করা 

rahim.welcome = function(){
  console.log('it\'s called object function');
}
rahim.welcome();

// object > loop

for (item in rahim){
  console.log(item);
}

// অবজেক্টের এর ভিতরে অ্যারে
const objArr = {
  normal : 'normal item',
  name :['rahim', 'karim', 'rafiq'],
  age :  [10,20,22],
}

console.log(objArr);

// এরের ভিতরে অবজেক্ট
const arrObj = [
  'javascript',
  {
  normal : 'normal item',
  name   : ['rahim', 'karim', 'rafiq'],
  age    : [10,20,22],
},

    'bangladesh'

]

console.log(arrObj);


/* ১৬. JavaScript Events.
ইভেন্ট হচ্ছে কোনো ঘটনা। ইভেন্ট HTML এ ব্যবহার করা হয়। যা ডম হিসেবে কাজ করে থাকে । বিভিন্ন ধরনের ইন্টাররেকটিভ স্মার্ট ওয়েতে বিভিন্ন জিনিস খুব সহজেই দেখাতে পারি।
বিভিন্ন ধরনের ইভেন্ট রয়েছে।
*/
//এলার্ট দেওয়া > এটার কাজ ব্রাউজারে বিভিন্ন এলার্ট দেওয়া।
alert('this is alert');

//(A) কমন ডট ইভেন্ট > দুই রকমভাবে দেখাতে পারি , 1. ইনলাইন স্টাইলে 2. ইলিমেন্টের সাথে অ্যাট্রিবিভট হিসেবে।
function showAlert(){
  alert('hi, i am alert');
}

showAlert();

var clickMeBtn = document.getElementById('demo');
console.dir(demo);

clickMeBtn.onclick = function () {
  console.log('on click');
}

clickMeBtn.onchange = function () {
  console.log('on change');
}

clickMeBtn.onmouseout = function () {
  console.log('onmouseout');
}

clickMeBtn.onmousedown = function () {
  console.log('onmousedown');
}

clickMeBtn.onload = function () {
  console.log('onload');
}


/*(B) ইভেন্ট লিসেনার আমরা যেভাবে করি সচরাচর এভাবে করা হয় না। 

সবচেয়ে ইফেক্টিভ মেথডটা  হলো addEventListener ,এটা প্রধানত দুইটা প্যারামিটার নেয়।
প্রথমটা হলো কোন টাইপের ইভেন্ট হবে সেটা ,, দ্বিতীয়টা হলেঅ ফাংশন(হ্যান্ডেলার) যেটা ইভেন্ট ঘটলে রান করবে।

youeElement.addEventListener(typeofEvent(প্যারামিটার), handler(ফাংশন));
*/
//Example:
var box = document.getElementById('box');
box.addEventListener('click', function () {
    console.log('function change');
})
  
// চাইলে এগুলো দেওয়া যেতে পারে load, focus, blur, submit, resize, cut, copy, keydown, keypress, keyup etc...
 
//(C) ইভেন্ট মডিফাই > বিভিন্ন ধরনের মডিফাই আছে
// বাবল আপ
let clickBtn = document.getElementById('demo3');
clickBtn.onclick = function (event) {
  event.stopPropagation();
  console.log('bubble clicked');
}

var clickMeBtn = document.getElementById('click');
clickMeBtn.addEventListener('click', () => {
    console.log('this is me. it\'s working');
})


var clickMeBtn = document.getElementById('demo4');
clickMeBtn.onclick = function (event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log('it\'s stop');
}

// ডিফল্ট আচরণ > ব্রাউজার আচরণ পরিবর্তন

const link = document.getElementById('link');
link.addEventListener('link',()=> {
  link.preventDefult();
});

//(D) নেটিভ ডট ইভেন্ট > কোড দিয়ে ইভেন্ট ঘটানো

clickMeBtn.click();

//(E) ইভেন্ট ডেলিগেশন
var box1 = document.getElementById('box1');
box1.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log("is\'s working");
    }
  });

//(F) ফরম ইভেন্ট
 const inputs = document.querySelectorAll('input');
 const submitBtn = document.querySelector('button[type=submit]');

// ইনপুট ফিল্ড চেঞ্জ

inputs[0].addEventListener('change', function () {
    console.log('input change');
  });

inputs[0].addEventListener('change', function (event) {
    console.log(event.target.value);
  });

// ফরম সাবমিট ইভেন্ট

submitBtn.addEventListener('submit', function (event) {
    event.preventDefault();
  });

submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputs[0].value === "" || inputs[1].value === "") {
    alert('input failed can not be empty');
  }

});

//ফুল ফরম সাবমিট 
submitBtn.addEventListener ('click', function (event) {
    event.preventDefault();
    if (inputs[0].value === '' || inputs[1].value === '') {
      alert('input are not emprty');
    }
    else {
      var input0Data = inputs[0].value;
      var input0Data = inputs[1].value;
      console.log('your Name', input0Data, 'and yor last names', input0Data);
    }
  });

//(G) কি বোর্ড ইভেন্ট
keyDown:
document.addEventListener('keydown', () => {
  console.log('key down');
});

keyPress:
document.addEventListener('keypress', () => {
  console.log('key press');
});

keyup:
document.addEventListener('keyup', () => {
  console.log('key up');
});

// এখন একটা ছোট কাজ করে দেখবো

document.addEventListener('keydown', (event) => {
  console.log('key down event');
  console.log('pressed key:' + event.key);
});


document.addEventListener('keydown', (event) => {
  console.log('key down event');
  console.log('pressed key:' + event.key);
  console.dir(event);
});

//(H) মাউস ইভেন্ট
mouseover:

clickMeBtn.onmouseover = (_event) => {
  console.log('mouse over');
}

clickBtn.addEventListener('mouseover', () => {
  console.log('mouse over event');
});

mouseout:

clickBtn.addEventListener('mouseout', () => {
  console.log('mouse over event');
});


//(I) 
//ব্রাউজার ইভেন্ট পুরোপুরি_লোড_হওয়ার_পর_ইভেন্ট:
window.addEventListener('load',()=> {
  console.log('your are right');
});

//শুধু মার্কাপ লোড হওয়ার পর ইভেন্ট
window.addEventListener('DOMContentLoaded',()=> {
  console.log('markup loaded');
});


// নির্দিষ্ট কোনো ইলিমেন্ট লোড হওয়ার পরের ইভেন্ট

var img = document.querySelector('img[alt=vaid-img]');
var img = document.querySelector('img[alt=invaid-img]');

img.addEventListener('load', () => {
  console.log('img success');
});

// ইলিমেন্ট লোড না হলে পরের ইভেন্ট

img.addEventListener('error', () => {
  console.log('img not success');
})
  

/*
###Task---07

১৭. JavaScript Strings হলো টেক্সট নাম্বারসহ ক্যৗারেক্টারের সিকুয়েন্স। আর এটি সিংঙ্গেল (''),ডাবল("") বা ক্যারেট (``) সাইনের ভিতরে থাকে। এর ভিতরে অবজেক্টও থাকতে পারে।
*/

let art = 'bangladesh' + ' is our country';
console.log(art);
console.log(typeof (art));

let str = 'hello this is str';
let obj =new String('hello this is str');
console.log(str == obj);
console.log(str === obj);

var a = '\n';
console.log(a);

/*

১৮. JavaScript Strings Method. বিভিন্ন ধরনের কাজের জন্যে বিভিন্ন ধরনের স্ট্রিং মেথড ব্যবহার করা হয়।
*/

//JavaScript String Length
var summary = "Javascript";
console.log(summary.length);

//JavaScript String slice()
var summary = 'apple, banana, orange';
console.log(summary.slice(0,5));

// //JavaScript String substring
var summary = 'apple, banana, orange';
console.log(summary.substring(0, 13));

//JavaScript String substr()
var summary = 'apple, banana, orange';
console.log(summary.substr(5, 18));

//JavaScript Replacing String Content
var summary = 'this is popular language of C';
console.log(summary.replace('C','javascript'));

//JavaScript String toUpperCase()
var summery = "Proficient students are They understand that if they can write a one- or two-sentence summary of each paragraph after reading it, then that is a good sign that they have correctly understood it. If they can not summarize the main idea of the paragraph, they know that comprehension has broken down and they need to use fix-up strategies to repair understanding.";
console.log(summery.toUpperCase());

// //JavaScript String toLowerCase()
var summery ="Proficient students are understand that if they can write a one- or two-sentence summary of each paragraph after reading it, then that is a good sign that they have correctly understood it. If they can not summarize the main idea of the paragraph, they know that comprehension has broken down and they need to use fix-up strategies to repair understanding."
console.log(summery.toLowerCase());

//JavaScript String concat()
var a = 'hello js';
var b = 'hello java';
var c = a.concat('', b);
console.log(c);

// different concat
var a = 'hello js ' + '' + 'it\'s working';
var b = ' hello java';
var c = a.concat('', b);
console.log(c);

//JavaScript String trim()
var a = 'hello js';
var b = 'hello java';
var c = (a + b);
// console.trim().c;

//JavaScript String padStart()
var a = '20';
console.log(a.padStart(15,1));

//JavaScript String padEnd()
var a = '10';
console.log(a.padEnd(15, 1));

//JavaScript String charAt()
var a = 'this js.';
console.log(a.charAt(5));

//JavaScript String charCodeAt()
var a = 'js';
console.log(a.charCodeAt(1));

//JavaScript String Property Access
var strR ='this is js';
console.log(strR[1]);

//JavaScript String split()
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[5]);


/* ১৯. JavaScript Strings Search হলো স্ট্রিং মেথডের ভিতরে কোনো কিছু খোঁজা
বিভিন্নভাবে স্ট্রিং সার্চ করা যায়।

(i) String indexOf() কোনো নির্দিষ্ট প্রথম স্ট্রিং কততম সংখ্যায় উপস্থিত তা নির্দেশ করে।
(ii) String lastIndexOf() কোনো নির্দিষ্ট শেষ স্ট্রিং কততম সংখ্যায় উপস্থিত তা নির্দেশ করে।
(iii) String startsWith() কোনো স্পেসিসফিক ক্যারেক্টার দিয়ে শুরু হয়েছে কিনা তা দেখে
(iv) String endsWith() কোনো স্পেসিসফিক ক্যারেক্টার দিয়ে শেষ হয়েছে কিনা তা দেখে
(v) String include() কোনো ক্যারেক্টার সেট ঠিক আছে কিনা তা দেখার জন্যে
(vi) String repeat()  স্ট্রিং কে কয়েকবার রিপিট করতে চাইলে

*/

var a = '\n';
console.log(a);

//String indexOf()
var myStr = "my name is js";
console.log(myStr.indexOf('js'));

//String lastIndexOf()
var myStr = "this is me. my name is js";

console.log(myStr.lastIndexOf('name'));

//String startsWith()
var myStr = "hello it's me . my name is js";
console.log(myStr.startsWith('name'));

//String endsWith()
var myStr = "it's my name is js";
console.log(myStr.endsWith('name'));

//String include()
var myStr = "hello name is js";
console.log(myStr.includes('name'));

//String repeat()
var myStr = "sakil name is js";
console.log(myStr.repeat('name'));

//String search()
var myStr = "my name is js";
console.log(myStr.search('name'));

//String mathch()
var myStr = "my name is js";
console.log(myStr.match('name'));


var a = '\n';
console.log(a);

/* ২০.JavaScript Strings Templates. হলো স্ট্রিং ভ্যারিয়েবলসহ কোনো কিছু প্রিন্ট করতে চাইলে কনক্যাট ( [plus] (+) ) করে নিতে হয়।
সাথে কোটেশন (’,”)(’ দেওয়ার জন্যে আবার \ দিতে হয়) নিতে হয় । এভাবে দিলে অনেক সময় কোটেশন না দিলে বা কোড দেখতে ঝামেলাপূর্ণ মনে হয় তার জন্যে সমাধান 

হলো ( [ `` ] ব্যাকটিক বা ক্যারেট সাইন দেওয়া, ${}) দিলে কোড দেখতে ও করতে সহজ হয়।
*/
//simple_example:

var name = 'shiraj';
var age = 50;
var work = 'Retired.';
console.log('my name is ' + name + ' and i\' am '+ age + ' years old! currently i\'am a '+ work);

//কিন্তু এভাবে করা ঠিক নয়

var a = '\n';
console.log(a);

let myIdentity = 'shiraj rahman';
let myAge = 50;
let myWork = 'Retired.';
console.log(`my name is ${myIdentity} and i'm ${myAge} years old. Currently i'm a ${myWork} `);

var a = '\n';
console.log(a);

function calculateAge(dob) {
  return `I'm ${2018 - dob} years old!`;
  
}

console.log(1971);

//Tagged_templated:
const myId = 'sakil';
const meAge = 20;
aFunc`i'm ${myId}. i'm ${meAge}years old.`

function aFunc(String, _name, _age) {
  console.log('String:');
  console.log(String);
  console.log(`Name:${myId}`);
  console.log(`String:${meAge}`);
}

/*
###Task-- - 08

/*২১. JavaScript Numbers বিভিন্ন ধরনের হয়ে থাকে।

সংখ্যা দুই প্রকার। যথাঃ
1* বাস্তব সংখ্যা

2* কাল্পনিক সংখ্যা/অবাস্তব সংখ্যা

বাস্তব সংখ্যা আবার দুই প্রকার। যথাঃ

1* মূলদ সংখ্যা

2* অমূলদ সংখ্যা

মূলদ সংখ্যা আবার দুই প্রকার। যথাঃ

1* জাভাক্রিপ্টে পূর্ণ সংখ্যা সর্ব্বোচ্চ 15 সংখ্যা পর্যন্ত সহজেই হিসাব করতে পারে। / Integer Precision

2* ভগ্নাংশ সংখ্যা  ( ভগ্নাংশ দুই প্রকার । সাধারণ ভগ্নাংশ ও দশমিক ভগ্নাংশ।  সাধারণ ভগ্নাংশ আবার দুই /তিন ভাগেে বিভক্ত। যথাঃ ১. প্রকৃত ২. অপ্রকৃত/ ৩. মিশ্র)
দশমিক ভগ্নাংশ প্রোগ্রামিং এ সবগুলেঅ ডিজিট দেখানো হয়।

পূর্ণ সংখ্যা আবার তিন প্রকার। যথাঃ

1* ধনাত্মক সংখ্যা

2* ঋণাত্মক সংখ্যা 

3* শূন্য 0 

ধনাত্মক সংখ্যা আবার তিন প্রকার। যথাঃ

1* মৌলিক

2* অমৌলিক/ যৌগিক/কৃত্রিম সংখ্যা

3* এক > ১

*/

var a = 20;
var b = 20;
var c = (a+b);
console.log(c);

var a = "20";//string করলে পাশাপাশি মান বসবে
var b = 20;
var c = (a+b);
console.log(c);

var a = '10.05';
var b = '2';
var c = (a+b);
console.log(c);

var a = 20;
var b = 5;
var c = (a+b);
console.log(c);

var myNumber = 15;
console.log(myNumber.toString(2));
console.log(myNumber.toString(8));
console.log(myNumber.toString(10));
console.log(myNumber.toString(16));

var a = 'apple';
var b = ' 10';
console.log(a / b);

//২২ JavaScript Number Methods. বিভিন্ন ধরেনের মেথড রয়েছে

//The toString() Method এটা কি তা বোঝায়
var a = 125;
console.log(a.toString());
console.log((126).toString());
console.log((100 + 27).toString());

//The toExponential() Method
var a = 10;
console.log(a.toExponential());
console.log(a.toExponential(2));
console.log(a.toExponential(8));
console.log(a.toExponential(10));
console.log(a.toExponential(16));
//The toFixed() Method
var a = 10;
console.log(a.toFixed(0));
console.log(a.toFixed(2));
console.log(a.toFixed(5));
//The toPrecision() Method
var a = 5;
console.log(a.toPrecision());
console.log(a.toPrecision(2));
console.log(a.toPrecision(4));
//The valueOf() Method
var a = 5;
console.log(a.valueOf());
console.log(a.valueOf(2));
console.log(a.valueOf(4));

// Global JavaScript Methods
//The Number() Method
var a = new Date("1970-01-01"); //ইহা সর্বনিম্ন মিলি সেকেন্ড
var b = new Date("1970-01-02"); //ইহা সর্বনিম্ন মিলি সেকেন্ড
console.log(a);
console.log(b);
 
//The parseInt() Method পূর্ণসংখ্যা দিয়ে থাকে
var a = 20.33;
var b = -10;
var c = [105-102];
console.log(parseInt(a));
console.log(parseInt(b));
console.log(parseInt(c));

//The parseFloat() Method
var a = 20.33;
var b = -12.20;
var c = [11.05-10.202];
console.log(parseFloat(a));
console.log(parseFloat(b));
console.log(parseFloat(c));

//JavaScript MIN_VALUE and MAX_VALUE Method
let numbers = [20, 30, 10, 50, 100, 500, 150, 5000, 100000];

var a = -1/0;
console.log(a);
//JavaScript POSITIVE_INFINITY
//JavaScript NEGATIVE_INFINITY
//JavaScript NaN - Not a Number

//২৩ JavaScript Array.
/**
 * অ্যারো হলো প্রচুর পরিমাণ ডাটা স্টোর করার সহজ মাধ্যম
 * অ্যারেকে সাধারণ ডাটা স্ট্রাকচার বলা হয়। বুলিয়ান,স্ট্রিং,ভেরিয়েবল নিয়ে অ্যারে বানানো হয়।
 * অ্যারো হলো সবচেয়ে সুন্দর ও ছোট লেভেলের ডাটা স্ট্রাকচার,অ্যারেকে ( [... 'মান','মান'...] ) দিয়ে প্রকাশ করা হয়
 * 
 */

//Creating an Array বিভিন্ন ভাবে অ্যারে লেখা যায়

var array = ['mango', 'green', 'blue', 'white', 'dark']
console.log(array);

var arrayName = [
  'sakil',
  'siam',
  'araf rahman',
  'sakib'
]
console.log(arrayName);

//Accessing Array Elements

var arrayName = ['siam','araf rahman','sakib']
array =[2];
console.log(arrayName);

var studentsNames= ['rahim', 'salam', 'salman', 'salam', 'salman', 'sakil'][77, 58, 75, 44, 80, 95];
 console.log(studentsNames);

var arrayName = ['blue','mango', 'green', 'blue', 'white', 'dark','youtube','facebook'];
console.log(arrayName.length);

let firstName = [' hi', ' i am a', ' your engine', ' of javascript program'];
let lastName = firstName.length;
for (let i = 0; i<lastName;i++){
    console.log(lastName +''+ firstName[i]);
}

// full array
var arrayName = [
    'sakil',
    'siam',
    'araf rahman',
    'sakib'
  ]
  console.log(arrayName);

var aName = [
    'sakil',
    'siam',
    'araf rahman',
    'sakib',
    'sakil',
    'siam',
    'araf rahman',
    'sakib'
]

let aNull = '\n';
console.log(aNull);

// object array
let pNames = { firstName: 'ashraful rahman', lastName: ' sakil', age: 24 };
console.log(pNames);

// loop array ***
const fName = ['sakil', 'siam', 'araf', 'abir', 'abdul', 'rifat', 'hasin', 'shoriful', 'akram', 'omit'];
console.log(fName);
const fNull = '\n';
console.log(fNull);
fName[10] = 'sakib';
console.log(fName);
console.log(typeof fName);
// array length কতগুলো উপাদান আছে তার মোট নির্ণয় করে
console.log(fName.length);
console.log(fName.length-1);
// array sort ব্যবহার করা হয় অ্যাসেন্ডিংভাবে সাজানোর জন্য
console.log(fName.sort());
for (let i = 0; i < fName.length; i++) {
    console.log((i + 1) + `. Name : ${fName[i]}`);
}

// loop array

function myFunction() {
    for (let i = 0; i < fName.length; i++) {
        console.log((i + 1) + `. Name : ${fName[i]}`);
        document.getElementById('click').innerHTML=((i + 1) + `. Name : ${fName[i]}`);
        console.log((i + 1) + `. Name : ${fName[i]}`);
        alert((i + 1) + `. Name : ${fName[i]}`);
    }
}

// forEach array same by > for loop ।। এটা একটি লুপ হিসেবে কাজ করে থাকে এটায় index, value, array মান দেওয়া যায়

var fruits = ['mango', 'banana', 'apple', 'orange', 'pear', 'grape', 'cherry']
function myFunction(value) {
    console.log(value); 
}

fruits.forEach(myFunction);

//২৪ JavaScript Array Methods

var flower = ['Abutilon','Forsythia','Rose','Sunflower','Daisy']
console.log(flower);
// push ব্যবহার করা হয় কোনো কিছু এড করতে
flower.push('Erica');
console.log(flower);
// pop ব্যবহার করা হয় কোনো কিছু ডিলেট করতে
flower.pop('Erica');
console.log(flower);
// Shift শুরুর দিকের আইটেম রিমুভ করতে
flower.shift('Jasmine');
console.log(flower);
// Unshift শুরুর দিকের আইটেম যোগ করতে
flower.unshift('Jasmine');
console.log(flower);
// কোনো অ্যারের ইলিমেন্ট পরিবর্তন করতে
flower[0] = 'Iris';
console.log(flower);
// indexOf নির্দিষ্ট কোনো আইটেমের নাম্বার জানতে
flower.indexOf('Sunflower');
console.log(flower);// এটায় কখনও 0 হবে না কাউন্ট বা ইনডেক্স
// splicing যেকোনো আইটেম যোগ করতে ব্যবহার করা হয় প্রথম প্যারামিটারে এলিমেন্টের ইনডেক্স নম্বর নির্ধারন করা হয় যেখানে এলিমেন্টকে রাখা হবে। দ্বিতীয় প্যারামিটারে কতটি এলিমেন্ট বাদ দেওয়া হবে তা নির্দেশ করা হয়।
flower.splice(2);
console.log(flower);
// Splicing আইটেমগুলো কিভাবে ভাগ হয় তা দেখানো হয়েছে যে নাম্বার ডিক্লিয়ার করবেন তা দেখাবে
var z = ['1 Apple iPhone','2 Toshiba DVD Player','3 Apple iPad','4 TiVo', '5 DJI Phantom', '6 Fitbit', '7 Apple iBook', '8 Nokia 3210']
var y = z.splice(5);
console.log(z);
console.log(y);

//slice  প্রথম প্যারামিটারে এলিমেন্টের ইনডেক্স নম্বর নির্ধারন করা হয় যেখানে এলিমেন্টকে রাখা হবে। দ্বিতীয় প্যারামিটারে কতটি এলিমেন্ট বাদ দেওয়া হবে তা নির্দেশ করা হয়। বাকি প্যারামিটার বাদ দেওয়া হয়েছে। তার মানে নতুন কোন এলিমেন্ট যোগ করা হবে না।
var fruits = ["Banana", "Orange", "Apple", "Mango",'Rose'];
console.log(fruits.slice(3));
// concat Merging (দুটো এলিমেন্ট যুক্ত করতে বা একসাথে করতে ব্যবহার করা হয়)
var mobile = ['1 Apple iPhone','2 Toshiba DVD Player','3 Apple iPad','4 TiVo', '5 DJI Phantom', '6 Fitbit', '7 Apple iBook', '8 Nokia 3210']
var flower = ['i Abutilon','ii Forsythia','iii Rose','iv Sunflower','v Daisy']
var total = mobile.concat(flower);
console.log(total);
//tostring() এটা করতে হলে DOM লাগবে
/*
###Task--- 09
২৫. JavaScript Array Sort.
২৬.JavaScript Array Iteration.
২৭.JavaScript Array Const.
*/

/**
 * JavaScript Array Sort.
 */

//sort এটা হলো এলোমেলো এলিমেন্টগুলো সিরিয়াল মোতাবেক দেখায় ইনডেক্স অনুসারে (A-Z)

var a = ['sakib', 'sakil', 'akram', 'faruk',]
console.log(a.sort());

//reverse এটা দিলে ইনডেক্স নাম্বার উল্টা করে আসবে (Z-A)
console.log(a.reverse());

//Numeric Sort
var y = [40, 200, 10, 25, 95, 33];
console.log(y.sort((a, b) => { return a - b; }));// low to high
console.log(y.sort((a, b) => { return a - b; }).toString());
console.log(y.sort((a, b) => { return b - a; }));// high to low

//Sorting an Array in Random Order
console.log(y.sort((a, b) => { return 0.5 - Math.random() }));

//The Fisher Yates Method

var points = [40, 100, 1,250,580,905, 5, 25, 10];
for (var i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}
console.log(points);

// Using Math.max() , Math.min() on an Array

// object of array

var car = [
  { type: 'MBW', year: 2017 },
  { type: 'BW', year: 2007 },
  { type: 'MW', year: 2015 }
];
console.log(car.sort((a, b) => { return b - a; }));

/**
 * Arif Arid
  var arrIndex = [0,0,1,8,0,9,0,0,0,8,7,9,0,0];
  function trimZero(arr) {
  const arrIndex = [];
  arr.forEach((value, i) => {
    value !== 0 && arrIndex.push(i);
  });
  return arr.slice(arrIndex[0], arrIndex[arrIndex.length - 1] + 1);
}
 */

/**
 * JavaScript Array Iteration. পুনরাবৃত্তি
 */

//array forEach() এটা একটি লুপ হিসেবে কাজ করে থাকে এটায় index,value,array মান দেওয়া যায়
var fruits = ['mango', 'banana', 'apple', 'orange', 'pear', 'grape', 'cherry']
function myFunction(index,value,array) {
    console.log(index);
    console.log(value);
    console.log(array);
    console.log('*******');
}

fruits.forEach(myFunction);

// এটা বেস্ট

var myFruits = fruits.forEach((value, index, array)=>{
  console.log('item' + value + index + 'arr' + array);
});

// array Map() এটা হলো এটাতে কোনো ফাংশন দিলে তা ডাবল করে মান রির্টান করবে, এর ভিতরে index, value, array মান দেওয়া যায়
// এটা ঝামেলা
var i = [5, 10, 15, 20];
function my(index,value,array) {
  return value * 2
  return index * 2
  return array * 2
}

let newName = i.map(my);
console.log(i);
console.log(newName);

// Proper Map
var arr = [1, 2, 3, 4, 5, 6, 7]; // পাবলিক

function getsqur(index) {
    return index * 2;
}
arr.map(getsqur);
var newArray = arr.map(getsqur);
console.log(newArray);

//best way
var newArr = arr.map((item, index, arr) => {
  console.log('item '+item +' and index'+ index + ' arr: ' + arr);
})

// array filter() কোনো অ্যারে থেকে ছোট বা বড় সংখ্যা বের করতে ব্যবহার করা হয় আর এটি true/false return দেয়

var evenArr = [55, 58, 48, 25, 10, 250];
function getsqur(index) {
  return index %1==0;
}
evenArr.filter(getsqur);

var newArray = evenArr.filter(getsqur);
console.log(newArray);

var newArr = evenArr.filter((item, index, arr) => {
  console.log(`item ${item} and index ${index} arr: ${arr}`);
})

// array reduce() অ্যারের ভিতরে যা আছে প্রায় সবই যোগ করে মোট ফলাফল দেখানো । এটার ভিতরে স্টেট ভ্যারিয়েবল সেট করা  বাম থেকে ডানে কাজ করে ।। total , value, index, array নিয়ে কাজ করে থাকে আর্গুমেন্ট হিসেবে

var arr = [1, 2, 3, 4, 8, 65, 44, 10, 22]
var total = arr.reduce((sum, item) => {
  return sum += item;
}, 0);

console.log(total);
// best
var arr = [10, 20, 30, 40, 80, 65, 44, 10, 22];
var total = arr.reduce((item,index,arr,total) => {
    console.log(`item: ${item} index ${index} array : ${arr} total ${total}`)
});

// array reduceRight() এটার ভিতরে স্টেট ভ্যারিয়েবল সেট করা  ডান থেকে বামে কাজ করে ।। total , value, index, array নিয়ে কাজ করে থাকে আগুমেন্ট হিসেবে 
var total = arr.reduceRight((item,index,arr,total) => {
  console.log(`item: ${item} index ${index} array : ${arr} total ${total}`)
});

// array every() value, index, array নিয়ে কাজ করে থাকে আগুমেন্ট হিসেবে এটি true/false রিটার্ন করে
var myNumber = [0, 1, 27, 2, 3, 4, 6, 7, 6, 6, 4];
function myFunction(value, index, array) {
    return value > 25
}
var mycontact = myNumber.every(myFunction);
console.log(mycontact);

// array some() value, index, array নিয়ে কাজ করে থাকে আগুমেন্ট হিসেবে এটি true/false রিটার্ন করে
var myNumber = [625,340,202,100,502,111,800];
function myFunction(value, index, array) {
    return value > 100
}
var mycontact = myNumber.some(myFunction);
console.log(mycontact);

// array indexOf() কোনো আইটেমের পজিশন জানতে আর এটা 0 থেকে শুরু হয়
var i = ['discovery', 'milk', 'plan', 'desktop','discovery','position', 'skin']

console.log(i.indexOf('position'));

// array lastIndexOf() শেষের পজিশন জানতে
console.log(i.lastIndexOf('desktop'));

// array find() বড় মান বের করে দেয়
var myNumber = [625,340,202,100,502,111,800];
function myFunction(value, index, array) {
    return value > 100
}
var mycontact = myNumber.find(myFunction);
console.log(mycontact);

// array findIndex() কোনোেআইটেম বা এলিমেন্ট কত নাম্বারে আছে তা বের করতে ব্যবহার করা হয়
var myNumberFind = [50,100,120,100,150,850,200,300,1000];
function myFunction(value, index, array) {
    return index > 900
}
var mycontact = myNumberFind.findIndex(myFunction);
console.log(mycontact);

// array from() স্ট্রিং কে অ্যারেতে রুপান্তর করে থাকে
console.log(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));

// array Keys() foor loop এর সাথে সংযুক্ত
var a = ['sakib', 'siam', 'arif']
var b = a.keys();
console.log(b);

// array entries()


// array  includes() কোনো কিছু আছে কিনা তা চেক করে true or false
console.log(i.includes('desktop'));

/**
 * JavaScript Array Const. এটা কাজ করার সাথে সাথে শিখা যাবে
 */

/*
###Task--- 10 সময় নিয়ে বিস্তারিত
২৮. JavaScript Dates.
২৯. JavaScript Date Formats.
৩০. JavaScript Date Get Method.
৩১. JavaScript Date Set Method.
*/

/*JavaScript Dates. 
এখানে বিভিন্ন সময় নিয়ে কাজ করা হয়েছে ও বিভিন্ন টাইম জোনের বিস্তারিত আলোচনা পর্ব
*/

var t = new Date();
console.log(t);

/* 4 Way to show a date
console.log(new Date());
console.log(new Date(year,month,day,hours,minutes,miliseconds));
console.log(new Date(miliseconds));
console.log(new Date(dataString));
 */

console.log(new Date(2014, 06, 04, 15, 20, 25));
console.log(new Date(2014, 06, 04, 15, 20));
console.log(new Date(2014, 06, 04, 15));
console.log(new Date(2014, 06, 04));
console.log(new Date(2014, 06));
console.log(new Date(2014));
console.log(new Date());
console.log(new Date(0));
console.log(new Date('October 14,2019,11:12:00:05'));

//previws century
var d = new Date(99, 11, 24);

//Date Methods
console.log(new Date().toString());
console.log(new Date().toUTCString());
console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log(new Date('2022-06-15'));

//JavaScript Date Formats.
console.log(new Date('2022-06-15T12:00:00Z'));


/*
  JavaScript Date Get Method.

Method	Description
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.
*/
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getDay());

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
console.log(days[d.getDay()]);

/*

  JavaScript Date Set Method.

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)

*/

var d = new Date();
console.log(d.setFullYear());
console.log(d.setMonth());
console.log(d.setDate());
console.log(d.setHours());
console.log(d.setMinutes());
console.log(d.setSeconds());
console.log(d.setMilliseconds());
console.log(d.setTime());

/*
###Task--- 11
৩২. JavaScript Math

JavaScript Math Constants

Math.E: 2.718281828459045
Math.PI: 3.141592653589793
Math.SQRT2: 1.4142135623730951
Math.SQRT1_2: 0.7071067811865476
Math.LN2: 0.6931471805599453
Math.LN10: 2.302585092994046
Math.LOG2E: 1.4426950408889634
Math.Log10E: 0.4342944819032518

৩৩.JavaScript Random
৩৪.JavaScript Booleans
৩৫.JavaScript Comparisons
*/

//JavaScript Math বিভিন্ন ধরনের গাণিতিক সমস্যা সমাধানের জন্য ম্যাথ
//math methods --Number to Integer

//Mathround: এটি [.5] এর কম বা বেশি হলে আগে বা পরের সংখ্যায় চলে যায় এর্বং েকোনো দশমিক সংখ্যা দিবে না

var voter = 0.5
var sum = Math.round(voter);
console.log(sum);

//Mathceil: এটি [.] এর পরে যাই থাকবে তার ফলে পরের বা আগের সংখ্যায় চলে যাবে।
var upper = 0.00005;
var sum = Math.ceil(upper);
console.log(sum);

//Mathfloor: এটি [.] এর পরে যাই থাকবে তার ফলে পরের বা আগের সংখ্যায় যাবে না ।
var lower= 0.00005;
var sum=Math.floor(lower);
console.log(sum);

//Mathtrunce: মানে হলো কেটে (cut) ফেলে দেওয়া। [.] পরে যাই থাকুক কেটে ফেলে দিবে।

var cut= 0.00005;
var sum=Math.trunc(cut);
console.log(sum);

//Mathsign: যােই মান দেওয়া হোক না কেন তা [-1, 0 ,1] রিটার্ন করবে।
var sign = 5;
var sum=Math.sign(sign);
console.log(sum);

//Mathpow: এটি দুটি মান নিয়ে কাজ করে পাওয়ার রিটার্ন করে থাকে। বিভিন্ন সংখ্যার পাওয়ার নির্ণয় করতে ব্যবহার করা হয়।
var sum = Math.pow(2,5);
console.log(sum);

//Mathsqrt: কোনো সংখ্যার বর্গ বের করতে।
var sum = Math.sqrt(112); // সরাসরি ব্যবহার করলে দশমিকসহ আসবে
console.log(sum);

//Mathabs: Positive Value রিটার্ন করে থাকে সবসময়।
var num = -30;
var sum = Math.abs(num);
console.log(sum);

//Mathcos: Angle in radians = Angle in degrees x PI / 180.
var sum = Math.cos(0 * Math.PI / 180);
console.log(sum);

//Mathsin: Angle in radians = Angle in degrees x PI / 180.
var sum = sin.Math.cos(90 * Math.PI / 180);
console.log(sum);

//Mathmin: সর্বনিম্ন নাম্বার বের করতে
var num =(25,45,20,10,33,69,510,-10,223,-50);
var sum = Math.min(num);
console.log(sum);

//Mathmax: সর্বোচ্চ নাম্বার বের করতে
var num =(25,45,20,10,33,69,510,-10,223,-50);
var sum = Math.max(num);
console.log(sum);

//Mathrandom: 0-1 এর মধ্যে ভিন্ন ভিন্ন মান বের হবে আর এর সাথে যদি (*) কোনো সংখ্যা ডিক্লেয়ার করে দেন তাহলে তার আগ পর্যন্ত বিভিন্ন মান আসতে থাকবে।
var lotary = Math.random()
console.log(lotary);
// 100 গুণ করে দেওয়ায় পূর্ণ দশমিক সংখ্যা আসতেছে
var lotary = Math.random() * 50
console.log(lotary);

//Mathlog: লগারিদমের কাজ করে থাকে
console.log(Math.log(44));

//Mathlog2: 
console.log(Math.hlog2(44));

//Mathlog10: 
console.log(Math.log10(44));


//Mathrandom: 0-1 এর মধ্যে ভিন্ন ভিন্ন মান বের হবে আর এর সাথে যদি (*) কোনো সংখ্যা ডিক্লেয়ার করে দেন তাহলে তার আগ পর্যন্ত বিভিন্ন মান আসতে থাকবে।

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 110));
console.log(Math.floor(Math.random() * 10) + 1);

//JavaScript Booleans এমন একটি যেটা টাইপ যেটাই true / false রিটার্ন করে থাকে
var a = 25;
var b = 12;
var c = a<b;
console.log(c)

var a = 25;
var b = 'hello';
var c = a>b;
console.log(c)

/**
 * Javascript Comparison & Logical Operators
(ii) কম্পারিজম অপারেটর

var a=5;

 * == equal to 
 * === three equal to
 * !=  not equal
 * !== not qual to
 * > greater than
 * < greater than
 * >=	greater than or equal to
 * <=	less than or equal to
 * 
var a = 5;//main
console.log(a == 5);
console.log(a == 8);
console.log(a == '5');
console.log(a === 5);
console.log(a === '5');
console.log(a != 8);
console.log(a !== 5);
console.log(a !== '5');
console.log(a !== 8);
console.log(a > 8);
console.log(a < 6);
console.log(a >= 5);
console.log(a <= 4);
console.log(a == 9);

 (iii) লজিক্যাল / রিলেশনাল অপারেটর

 * && and true/false
 * || or true/false
 * ! not true/false
 * console.log(a < 9 && b > 3);
 * console.log(a > 9 || b > 8);
 * console.log(!(a<5)
 */

/*

 * (v) কন্ডিশনাল / টার্নারি অপারেটর
 var i= number,letter,everything
 var a=25;
 console.log(a>25? 'you are a young': 'you are a child');
 */

/*
###Task--- 12
৩৬. JavaScript Conditional Operator/Statements

৩৭.JavaScript Array Iteration.
৩৮.JavaScript Array Const.
৩৮.JavaScript Array Const.
*/
//JavaScript Conditional Operator/Statements প্রাত্যহিক লাইফে বিবিন্ন ডিসিশন নিতে বিভিন্ন হা বা নায়ের সাহায্য নিতে হয় তেমনি প্রোগ্রামিং ও ডিসিশন নিতে বিভিন্ন স্টেটমেন্ট রয়েছে
//if
var age = 18;
if (age < 18) {
  console.log('you are cute')
}

//if else
var age = 18;
if(age<18) {
    console.log('you are child');
} else {
    console.log('you always adult');
}

//if else if
var age = 50;

if (age < 18) {
  console.log('you are child');
} else if (age == 18) {
  console.log('welcome you are teenage');
} else if(age>18 && age<30){
    console.log('you and me are same');    
}else if (age > 18 || age < 30) {
    console.log('you and me are not same');    
}else {
    console.log('you are old');
}

//switch অনেকগুলো স্টেটমেন্ট ডিক্লেয়ার করে প্রাপ্ত ফলাফল বের করতে ব্যবহার করা হয়
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);

//nesting


/*
###Task--- 13
৩৯. JavaScript 5 Loops
৪০.JavaScript Iterables, Sets, Maps
*/

//Loops --(i) for অনেক কাজ বার বার ম্যানুয়ালি করাটা ঝামেলাময়, এটা  1,2,3,15,20 বার করা যায় এর চেয়ে বেশি হলে করাটা বা কোনো কিছু পরিবর্তন করাটা সমস্যা হয়ে যায়। তখন সমাধান খোঁজতে হয়।  আর এর সমাধান হলো লুপ দিয়ে প্রয়োজনমতো ডিক্লেয়াররেশন দেওয়া। মোবাইলের টাইমারও আরেকটা ভালো উদাহরণ। For এর তিনটি ভিন্ন ভিন্ন স্টেট আছে

var cars = ['a', 'b', 'c', 'd'];
for (var i = 0; i < cars.length; i++){
  console.log(cars);
  console.log(`${i} ${cars}`);
}

/* for in এর ভিতরে দুটি আগুমেন্ট নেওয়া যায় Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

var person = { fname: 'ashraful rahman sakil', age: 24, occupation: 'student' }
for (var n in person) {
  console.log(person);
}

var array = [45, 25, 85, 10, 20, 22, 36]; // অ্যারে ব্যবহার করা যাবে না (for in) এ
for (var l in array) {
  console.log(array);
}

// for of
var array = 'sakil';

for (var l of array) {
  console.log(l)
}

//(ii) while loop এটা ডিক্লেয়ার করলে আগেই কন্ডিশন যাচাই করে নেবে আর মিথ্যা হলে কোনো কিছু জিজ্ঞাসা করার আগেই। সত্য হলে লুপের ভিতরে থেকে এক্সিকিউট হবে। আর এটা অনন্তকাল ধরে চলতে থাকবে। If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser. (This is red alert)

var i = 0;
while (i < 2) {
  console.log('this is me');
}

//(iii) do while আর এটা অনন্তকাল ধরে চলতে থাকবে

var i= 11;
do {
    console.log('it\' ok')
}
while (i < 10) {
  console.log('this is me');
}

//(iv) break একটি পুরো লুপকে মাঝপথে থামিয়ে দিতে বা বের হয়ে আসতে ব্রেক করানো হয়।
for (var i = 0; i < 10; i++){
  if (i === 8) {
      break;
  }

  console.log(i + ' i am ok')
}

//(v) continue - এ লুপকে ব্যবহার করা হয় স্কিপ করতে continue দিয়ে । যেখানে এটা ব্যবহার করা হবে সেটা বাদে বাকিগুলো ডিক্লেয়ার করবে।

for (var k = 0; k <= 25; k++){
  if (k === 5) {
      console.log(`${k} is skipped`);
      continue;
  }
  console.log(k+ ' : i  is now at' );
}

/**
 * JavaScript Iterables, Sets, Maps
 */

// Iterables:

// Sets:

/* Maps:

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map
*/


/*

###Task--- 14
৪১. JavaScript Typeof
৪২. JavaScript Conversion
৪৩. JavaScript Bitwise
৪৪. JavaScript RegExp

*/

/* JavaScript Typeof এটা দিয়ে কোনটা কোন অপারেটর তা বের করা হয়।

In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined

***************

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

**********

Primitive Data:

A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined

************

Complex Data

The typeof operator can return one of two complex types:

function
object
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.

Example
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"


*/

/*JavaScript Conversion এটা হলো বিভিন্ন টাইপকে অন্য টাইপে কনভার্ট করা
* { Converting Strings to Numbers
  Converting Numbers to Strings
  Converting Dates to Numbers
  Converting Numbers to Dates
  Converting Booleans to Numbers
  Converting Numbers to Booleans
  }

*/


/*
 * JavaScript Bitwise 

JavaScript Bitwise Operators
  Operator	Name	Description
  &	AND	Sets each bit to 1 if both bits are 1
  |	OR	Sets each bit to 1 if one of two bits is 1
  ^	XOR	Sets each bit to 1 if only one of two bits is 1
  ~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off



বাইনারি,দশমিক,ডেসিমেল,হেক্সাডেসিমেল


 */


/*
 * JavaScript RegExp পরে করবো
 */


/*
###Task--- 15
৪৫. JavaScript Errors
৪৬.JavaScript Scope
৪৭.JavaScript Hoisting
৪৮. JavaScript Strict Mood
*/

/*JavaScript Errors- প্রথমত চার ধরনের ইরর হ্যান্ডেলিং করা যায়
1. try
2. catch
3. finally
4. throw

The ’try’ statement defines a code block to run (to try).

The ’catch’ statement defines a code block to handle any error.

The ’finally’ statement defines a code block to run regardless of the result.

The ’throw’ statement defines a custom error.


*/

try {
  addlert('welcome to error')
  
} catch(err) {
  console.log(err)
}

/*JavaScript Scope - 3 প্রকার ব্লক, ফাংশন, গ্লোবাল স্কোপ

এটা মূলত let/const দিয়ে লেখা হয়
*/

//local__scope:
function localScope() {
  var local = 'I am local to my own function';
  console.log(local);
}

block__scope:
{
  let j = 'sakil';// এটা কার্লি প্রেসেস এর ভিতরে ডিফাইন করে লিখতে হয়।
}

//function__scope:

function A() {
  let x=40; // এটা ফাংশনের ভিতরে হয়।
}

//global__scope: // আগে থেকে ডিফাইন করে ফাংশনের ভিতরে তা প্রকাশ করাকে বোঝায়
var globalVar = 'I am a Global Variable';

function globalScope() {
   console.log('Inside a Function: ' + globalVar);
}

globalScope();

console.log('Outside: ' + globalVar);


//JavaScript Hoisting এটা জাভাক্রিপ্টের ডিফল্ট বিহেভিয়ার। ডিক্লেয়ার করার আগেই ব্যবহার করা যায় কিন্তু এটা ভালো প্র্যাকটিস নয়। এতে আনডিফাইন দেখা দিবে

names(); //এখানে ব্যবহার করলে আনডিফাইন দেখা দিবে, ভালো হয় ডিফাইন করার পর ব্যবহার করা

var names = function() {
   console.log('My name is Zonayed Ahmed' + 'sakib khan');
}


//JavaScript Strict Mood ==> "use strict"; Defines that JavaScript code should be executed in "strict mode". এটা ব্যবহার করলে 

"use strict";
x = 3.14;
console.log(x);

/*

###Task--- 16
৪৯. JavaScript this keyword
৫০.JavaScript Arrow function
৫১.JavaScript Classes
৫২. JavaScript Modules
*/

/* this keyword =>  এটা জাভাক্রিপ্টের সবচেয়ে কনফিউজিং টপিক। চারটা রুলস মনে রাখলে this ভ্যালু এসাইন করা সহজ হবে।

1. গ্লোবাল কনটেক্সট রুলস হলো 
function helloThis(){
  console.log(this);
}

helloThis(); == window result.

 * অ্যাক্সিডেন্টাল গ্লোবাল ভ্যারিয়েবল : 
function unNamed(){
  this.name ='ashraful rahman sakil';
}
unNamed();

2. অবজেক্ট রুলস: ফাংশনের ভিতরে অবজেক্ট ডিফাইন করাকে বোঝায়

var myCustomObj={
    name:'ashraful rahman sakil',
    age: 24,
    job: 'student',
    msg: function(){
    console.log('my name is '+ this.name);
    }
  }
  
  myCustomObj.msg();


  var myName = {
    name: 'ashraful sakil',
    job: 'student',
    age: 24,
    otherObj: {
        name: 'araf rahman siam',
        age: 17,
        job:'student',
        msg: function () {
            console.log('my name is ' + this.name);
            console.log(' i am ' + this.age+ ' years old.');
            console.log('i am a ' + this.job);
        }
    }
}

myName.otherObj.msg();


৩। স্পষ্ট রুলস : এটা খুবই গুরুত্বরপূর্ণ জাভাক্রিপ্ট শেখার ক্ষেত্রে । এটাতে তিনটি টার্ম আছে যা কাজে লাগে-- call() > bind() > apply()

এই তিনটা মেথডই প্রথম আর্গুমেন্ট হিসাবে thisকীওয়ার্ডের কন্টেক্সট বা ভ্যালু কি হবে সেটা নেয়। তারমধ্যে call()আর bind()আনলিমিটেড আর্গুমেন্ট নিতে পারে আর অন্যদিকে apply()মাত্র দুইটা আর্গুমেন্ট(প্রথমটা সবসময়েই thisএর ভ্যালু ডিটারমাইন করতে, আর দ্বিতীয়টা একটা অ্যারে) নেয়। এখন বুঝলাম প্রথম আর্গুমেন্ট thisডিটারমাইন করার জন্যে দেওয়া হয়, কিন্তু বাকী আর্গুমেন্টগুলা কিসের? হ্যাঁ বাকিগুলো আপনি যে ফাংশনের সাথে এই মেথডগুলো লাগাবেন সেই ফাংশনেরও আর্গুমেন্ট থাকতে পারে, সে আর্গুমেন্ট যতটাই হউক আপনি call()আর bind()এর ক্ষেত্রে একটার পর একটা দিতে পারবেন। অন্যদিকে apply()এর ক্ষেত্রে যে অ্যারেটা দিবেন সেটা হবে সেই ফাংশনের সবগুলো আর্গুমেন্টের অ্যারে। কনফিউজড হয়ে গেলে সমস্যা নাই আমি প্রত্যেকটা উদাহরনসহ নিচে দেখাবো। আশা করি পরিষ্কার ধারণা হয়ে যাবে।


call():
var myName = {
    name: 'ashraful sakil',
    job: 'student',
    age: 24,
    otherObj: {
        name: 'arif khan',
        age: 23,
        job:'student',
        value: function () {
            console.log('my name is ' + this.name);
            console.log(' i am ' + this.age+ ' years old.');
            console.log('i am a ' + this.job);
        }
    }
}

myName.otherObj.value();// 2য় অবজেক্ট এর ফাংশন বানানোর আগে যে অবজেক্ট নাম দিবেন তাই কল করার সময় দিতে হবে।
console.log(aNull);
myName.otherObj.value.call(myName);

// call( এর ভিতরে ফাংশনের যে প্যারেন্ট বা চাইল্ড দিবেন তাইই কল করবে = মানে পরিবর্তনশীল)


var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log('My name is ' + this.name);
       }.call(myCustomObj)
    }
 }


var kamal = {
    name: 'ariful islam',
    job: 'software enginner',
    address: 'Gazipur',
    dob:1997,
    age: function (currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
    
}

kamal.age(2022);

var jamal = {
    name: 'rahim ali',
    dob: 1990,
}

kamal.age.call(jamal, 2022); // এখানে ২য় আর্গুমেন্ট হিসাবে ভ্যালু নেয়।


apply(): এটা আগেরটার মতোই শুধু দুইটা আর্গুমেন্ট নিবে আর ২য় আর্গুমেন্ট এ যে কয়টা আর্গুমেন্ট থাকবে তাতে অ্যারে [...] করে নিবে।



var jamal = {
    name: 'rahim ali',
    dob: 1990,
}

var kamal = {
    name: 'ariful islam',
    job: 'software enginner',
    address: 'Gazipur',
    dob:1997,
    age: function (currentYear, msg) {
        console.log(msg+' ' + this.name + ' he was working ' + this.job + '. he is ' + (currentYear - this.dob) + ' years old!');
    }
    
}



kamal.age(2022,'hi it\'s work. ');
console.log(aNull);
kamal.age.apply(jamal, [2022, 'hi i am.']);

bild(): bind()ঠিক call()এর মতো হলেও যেখানে call()আরapply()সাথে সাথে যে ফাংশনের সাথে ইউজ করা হয়েছে সেটাকে কল করে ফেলে, bind()সেখানে সে ফাংশনকে কল করে না, বরং এটা সেই ফাংশনের আরেকটা ডেফিনেশন রিটার্ন করে যেটা পরবর্তিতে আপনি যেকোনো জায়গায় কল করতে পারবেন বা ইউজ করতে পারবেন।



সার সংক্ষেপ: this এর স্পষ্ট রুলস নিয়ে। এখানে তিনটি টার্ম আছে সেগুলো হলো call(),apply(),bind() । 

গ্লোবাল আইটেম: এখানে একটা অবজেক্ট নিয়ে তার ভিতরে আরেকটা অবজেক্ট নিয়ে তার ভিতরে ফাংশন নিতে হবে

ফাংশনে this ব্যবহার করে যেটা দরকার তা কল করতে পারবেন।

এখন স্পষ্ট রুলসে তিনভঅবে কল করা যায় 
call(): এটাকে ব্যবহার করা হয় প্রথম অবজেক্ট নেম, দ্বিতীয় অবজেক্ট নেম, যেখানে ফাংশন কল করা হয়েছে তার নেম ধরে .call(প্রথম অবজেক্ট নেম). এটায় আবার সম্পূর্ণ আলাদা দুইটা অবজেক্ট নিয়েও কাজ করা যায়।

apply(): এটা আগের মতো সেম তবে এখানে াংশনে দুইটি আর্গুমেন্ট নিয়ে কাজ করা হয় আর দ্বিতীয় আর্গুমেন্ট এ একটা অ্যারে প্রোভাইট করে থাকে এবং এর ভিতরে যা থাকে সব কল করে দেয়।

bind(): এটা call, apply এর মতো কাজ করলেও কাজ করে না। এটিকে কল করলে আলাদা একটা ফাংশন ডেফিনেশন ক্রিয়েট করে দেয় এবং এটা পরবর্তীতে অন্য নামে স্টোর করে বিভিন্ন জায়গায় ব্যবহার করা যায়। পরে যেখানে কল করবেন সেখানে তার ফলাফল দেখাবে। 

bind এ আর্গুমেন্ট পৃথক পৃথকভাবে কল করতে পারবেন। 


var myCustomObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Ahmed Zonayed',
      value: function() {
         console.log('My name is ' + this.name);
      }
   }
}
myCustomObj.anotherObj.value.bind(myCustomObj);
var anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
anotherFunc();

*/



/* 
Arrow function => এটা ES6 এর নতুন আইটেম || এটায় ফাংশনকে অন্যভাবে লেখা হয় [ ()=>{} ] , এটাকে আবার ফ্যাট অ্যারো(Fat Arrow)
 এটা this কিওয়ার্ডে ও কোডকে মিনিমালিস্টিক, সুন্দর দেখাতে এবং কাজ দ্রুত করতে সাহায্য করে থাকে।

//normal function
var demo = function(x,y){
    return x + y;
  
}
console.log(demo(90, 10));

//arrow function
var demo = (x, y) => x + y
console.log(demo(391, 9));

*/


/* Modules > এটা ES6 এর ফিচার। খুবই গুরুত্বপূর্ণ টপিক।

এটায় ইমপোর্ট [import] / এক্সপোর্ট [export] করা হয়
ইমপোর্ট করা হয় মেইন ফাইলে থাকা ইলিমেন্টকে কল অন্য ফাইলে আনাকে বোঝায় করে ডেকে আনাকে বোঝায়।

প্রধমে export করতে হবে।
export:
export var sakil = {
  name: 'sakib khan',
  age: 25,
  job: 'student',
  address:'122/10 dhaka,bangladesh'
}

পরে import করতে হবে।
import:
import {sakil} from "./export.js";
console.log(sakil);


*/


/*
###Task--- 17
৫৩. JavaScript Json
৫৪.JavaScript Debugging
৫৫.JavaScript Style Guide
৫৬. JavaScript Best Practices
/*


/* Json

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand

example:
জেসন লিখা হয় তৃতীয় বন্ধনীর ভিতরে।

{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

*/


//Debugging > কোডে কোন প্রকার ইরর আসলে তা খুঁজে বের করে ফিক্সড করাকে বোঝায় কোথায় সমস্যা হয়েছে তা

//Style Guide কোডকে সুন্দর ও আন্তর্জাতিক মানের স্টাইলে লিখতে ও ফলো করতে হবে। কোডের নিজস্ব রুলস এন্ড টার্মস এবং গঠনমূলক নিয়মে কোড করতে হবে। 80 ক্যাক্টোরের পর পরে লাইনে চলে যাওয়া।ম

//Best Practices এটা কোডকে কিভাবে করলে বা কি ব্যবহার করলে ভালো হবে পরিমার্জিত,সুন্দর ও কি কি এড়িয়ে চলতে হবে তা বোঝায়।


/*
###Task--- 18
৫৭. JavaScript Mistacks
৫৮.JavaScript Performance
৫৯.JavaScript Reserved Words
৬০. JavaScript Version
/*

//JavaScript Mistacks কিছু জিনিস ভালোভাবে না বোঝে লিখলে তা ভুল হবার সম্ভাবনা রয়ে যাবে।


//JavaScript Performance যেটা করলে মানসম্মত কোড হয় এবং গোছানো , অপ্রয়োজনীয় কোনো লেখা যাবে না।


//JavaScript Reserved Words এটি জাভাক্রিপ্টের স্টোর করা কিওয়ার্ড যা ব্যবহার করা যায় না।

//JavaScript Version এটা মূলত

/*
###Task--- 19 ==> JavaScript Objects
৬১. JavaScript Objects Definitions
৬২.JavaScript Object Properties
৬৩.JavaScript Object Methods
৬৪. JavaScript Display Objects
/*

//JavaScript Objects Definitions ==> In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.



//JavaScript Objects Properties

Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.

কোনো কিছু এড করতে হলে অবজেক্ট নেমের পর [.] দিয়ে পরের অংশ দিতে হবে অবজেক্ট প্রোপার্টি হিসেবে ।
এটায় নতুন কিছু যোজন বিয়োজন করা যায়  নেস্টিং করে অবজেক্ট দেওয়া যায়,এর মধ্যে অ্যারেও আছে। আর Prototype Properties
JavaScript objects inherit the properties of their prototype.

The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

//JavaScript Objects Methods
JavaScript methods are actions that can be performed on objects.

*** A JavaScript method is a property containing a function definition.

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

এক্সসেসিং অবজেক্ট মেথড [ objectName.methodName() ]


//JavaScript Display Objects

Some common solutions to display JavaScript objects are:
Displaying the Object Properties by name
Displaying the Object Properties in a Loop > for in loop use
Displaying the Object using Object.values() 
Displaying the Object using JSON.stringify() > স্ট্রিং এ কনভার্ট করা


/*
###Task--- 20
৬৫. JavaScript Object Accessors
৬৬.JavaScript Object Constructors
৬৭.JavaScript Object Prototypes
৬৮. JavaScript Iterables
/*

//JavaScript Object Accessors কোনো অবজেক্ট এর কোনো কিছু এক্সেস করা।
Getters and setters allow you to define Object Accessors (Computed Properties).

কোনো কিছু নিতে চাইলে getter object ব্যবহার করা হয়।



// এক্সেসসর 
const access = {
    firstName: 'araf',
    lastName: 'siam',
    language: 'bn',
    get lang() {
        return this.language;
    }
};

console.log(access.lang);

const setterAccess = {
    firstName: 'hello',
    lastName: 'bangladesh',
    location: 'south asia',
    set local(location) {
        this.local = 'india';
    }
}

console.log(setterAccess.location);


আর এটা জাভাক্রিপ্ট এ খুব কমই ব্যবহার করা হয়।

//JavaScript Object Constructors এটা হলো একটা কমন মডেল তৈরি করে তার ফলাফল ভিন্ন ভিন্ন আনার নিয়ম বা স্ট্রাকচারকে বোঝায়। 

 function People(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName
    }
};
const sakib = new People('sakib','rahman',24);

const sakil = new People('sakil','rahman',24);

console.log(sakib.fullName());

console.log(sakil.fullName());


//JavaScript Object Prototypes  ===> advanced tutorials form lws

//JavaScript Iterables ===> advanced tutorials form lws

Iterables হলো স্টেপ বাই স্টেপ করে লাইন বাই লাইন করে যাওয়াকে বোঝায়


/*
###Task--- 21
৬৯. JavaScript Sets
৭০.JavaScript Maps
৭১.JavaScript ES5 Object Methods
/*


//JavaScript Sets জাভাক্রিপ্টের বিল্ড ইন মেথড এটি দিয়ে সহজে কাজ করা যায় কোনো ঝামেলা ছাড়াই । বিভিন্ন ধরনের সেট রয়েছে। সেট এর সাথে রিলেশন অ্যারের।
 
*** Set Methods

* Method	Description

=> new Set()	Creates a new Set
=> add()	Adds a new element to the Set
=> delete()	Removes an element from a Set
=> has()	Returns true if a value exists
=> clear()	Removes all elements from a Set
=> forEach()	Invokes a callback for each element
=> values()	Returns an Iterator with all the
=> values in a Set
=> keys()	Same as values()
=> entries()	Returns an Iterator with the [value,value] pairs from a Set

* Property	Description

=> size	Returns the number elements in a Set

new Set()::

const personName = new Set(['arif', 'siam', 'jalal', 'habib']);
console.log(personName);
console.log(personName.size); // টোটাল পরিমাণ বোঝায়

* add নতুন কিছু এড করতে সাহায্য করে
console.log(personName.add('sakil'));

forEach() => The forEach() method invokes a function for each Set element:

//foreach:
const letters = new Set(['sakil ', 'akib ', ' kaka', ' sakib', ' labib']);
let pName = '';
letters.forEach(function (value) {
pName += value;
})

console.log(pName);


//JavaScript Maps ==> ম্যাপসের এর সাথে রিলেশন অবজেক্ট এর
const myBazer = new Map([
    ['apple', 500],
    ['banana', 100],
    ['suger', 150],
    ['honey', 50],
    ['orange', 500],
    ['milk', 100],
    ['papuya', 150],
    ['salut', 50]
])

console.log(myBazer.get('orange'));
console.log(myBazer.size);
myBazer.delete('apple');
console.log(myBazer);
console.log(myBazer.has('milk'));
myBazer.clear();
console.log(myBazer.entries()); //The entries() method returns an iterator object with the [key,values] in a Map:

console.log(myBazer.values()); // it's a very top.


/*
###Task--- 22
৭২. JavaScript Function Definitions
৭৩. JavaScript Function Parameters
৭৪. JavaScript Function Invocation
৭৫. JavaScript Function call()
৭৬. JavaScript Function apply()
৭৭. JavaScript Function bind()
৭৮. JavaScript Closures
*/



// JavaScript Function Definitions কোনটা কি ,কিভাবে করতে হবে তা নিদের্শ করে থাকে।

// JavaScript Function Parameters => advanced tutorials form lws

// JavaScript Function Invocation কাকে দিয়ে কল করা হয়েছে তাকে বোঝায়

// JavaScript Function call()
//call:
const Peoples = {
  fullName: function (city,country) {
      return this.firstName + '' + this.lastName + "" + 'he lives in ' + city + country;
  }
};

let People1 = {
  firstName: 'ashraful rahman',
  lastName: ' sakil'
}

let People2 = {
  firstName: 'ashraful khan',
  lastName: ' alim'
}

console.log(Peoples.fullName.call(People1,'Dhaka ',' Bangladesh'));
console.log(Peoples.fullName.call(People2, 'New York ', 'USA'));

// JavaScript Function apply() এটা একটা অবজেক্ট দিলে আরেকটা অ্যারে হিসেবে দিতে হবে।

//apply:
const aPeople = {
  fullName: function (city, country) {
      return 'My name is ' + this.firstName + '' + this.lastName + "" + ' he lives in ' + city + country;
  }
};

let People01 = {
  firstName: 'ashraful rahman',
  lastName: ' sakil'
}

let People02 = {
  firstName: 'ashraful khan',
  lastName: ' alim'
}

console.log(aPeople.fullName.apply(People02,['Dhaka',' Bangladesh']));


// JavaScript Function bind() ‍কল বা এপ্লাই এর মতো কাজ করে না এটা দু্ইভাবে ডিক্লেয়ার করে থাকে । ফলে একটি নিজস্ব ভেরিয়েবল তৈরি করে যা অন্য কোথায় সহজেই ব্যবহার করা যায়।

let examinee= {
  name: 'araf rahman siam',
  age: 17,
  candid: 'ssc',
  location: 'Narsingdi',
  subExaminee: {
      name: 'adib khan',
      age: 18,
      candid: 'ssc',
      value: function () {
         console.log('i am a ' + this.candid + ' examinee');
     }
  }
  

}

examinee.subExaminee.value.bind(examinee);

let myOwnerCandid = examinee.subExaminee.value.bind(examinee);

myOwnerCandid();



// JavaScript Closures => হলো প্যারেন্ট - চাইল্ডের খেলা। এটি মূলত একটি ফাংশনের ভিতরে আরেকটি ফাংশন নিয়ে কাজ করে বা আলাদা করেও কল করলেও ওই একই নিয়ম মেনে কাজ করে থাকে। 

function closure() {
  let max = 2400;
  return function () {
      min = 100;
      console.log('total ' + (max - min));
  }
}

closure()();

//দুটি ফাংশন ছাড়াও আলাদা ভাবে করে এনেও ফলাফল দেখাতেও পারি। তার মানে ক্লোজার হলোঃ- আমরা যখন কোনো ফাংশন রিটার্ন করি আরেকটা ফাংশন থেকে, যেখানে ( ফাংশনের লোকাল মেমোরি ) ফাংশন টা saved ছিল, রিটার্ন হওয়ার সময় শুধু এই ( চাইল্ড / returned function ) ফাংশনের definition টাই রিটার্ন করবে না, সাথে তার surrounding data (যেখানে saved ছিল - লোকাল মেমোরির) গুলোও attached (চাইল্ড ফাংশনের backpack -এ) হয়ে যাবে। আর যখন ফাংশনের executing শেষ হয়ে যাবে & সেই ফাংশনের Local মেমোরিও delete হয়ে যাবে (except returned value)

Example :
function outer (){
 let counter = 0;
 function incrementCounter (){ counter ++; }
 return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();

//আপনার লেখাটা অনেক আগে পড়ছিলাম আজ হঠাৎ মনে হলো এই লাইন গুলার কথা, আমার বুঝতে কষ্ট হচ্ছে এই লাইন গুলা ঃ- কিন্তু এখানে আরো মজার ব্যাপার হচ্ছে ইভেন আমরা যদি প্যারেন্ট ফাংশনটা রিটার্ন করে ফেলি তারপরেও আমরা চাইল্ড ফাংশন থেকে প্যারেন্ট ফাংশনের ভ্যারিয়েবল, ফাংশন অথবা অবজেক্ট অ্যাক্সেস করতে পারবো। কারণ এগুলো রিটার্ন হওয়ার পরও মেমোরী তে থেকে যায় । আর এটাই হচ্ছে ক্লোজারস।


/*
###Task--- 23
৭৯. JavaScript Classes
৮০. JavaScript Class Inheritance
৮১. JavaScript Static Methods
*/

/*

Classes এটি ES6 এ অন্তভুক্ত এটি আগে ছিল না । অবজেক্ট ওরিয়েন্টের প্রোগ্রামিং ল্যাঙ্গুয়েজ এ বেশি ব্যবহার করা হয়। আসল ব্যাপার হলো জাভাস্কিপ্টও অবজেক্ট ওরিয়েন্টেড ল্যাঙ্গুয়েজ, কিন্তু অন্যান্য মেজর ল্যাঙ্গুয়েজগুলোর মতো ক্লাস বেসড না

জাভাস্ক্রিপ্ট এ ক্লাস ঠিক ফাংশনের মতো করেই দুইভাবে নেওয়া যায়ঃ

১। ক্লাস স্টেটমেন্ট;
class ClassStatement{
...
}

২। ক্লাস এক্সপ্রেশন;

const ClassExzpression= class{
...
}

class PersonName{
    constructor(name, age,job) {
        this.name = name;
        this.age = age;
        this.job=job;
    }
}

let PersonName = new PersonName(’kabir chowdhury', 22,'student');
console.log(PersonName);

প্রথমে var,let,const এর মতো class অ্যাট্রিবিউট নিয়ে পরে যেকোন মিনিংফুল নাম দিতে হবে আর ক্লাসের নাম বড় হাতের প্রথম অক্ষর হবে। পরে নিয়ম অনুযায়ী constructor(...) দিয়ে কি কাজ করতে হবে তা ডিফাইন করে দিতে হবে। পরে ইনহেরিটেন্স ব্যবহার করে this. ... এর সাথে constructor(...) নাম মিল রাখতে হবে। নতুন নাম দিতে হবে এর সাথে new কিওয়ার্ড যোগ করে ক্লাসের উদ্দ্যেশ্য ডিফাইন করে দিতে হবে ,সবকিছু সুন্দরভাবে হওয়ার পর কল করতে হবে।

*/

//Inheritance কেনো কিছু কারও কাছ থেকে নিয়ে আসাকে বোঝায় । আর এটা ক্লাসে বেশি ব্যবহার করা হয়।

//Static Methods

/*
###Task--- 24
৮২. JavaScript Callbacks
৮৩. Asynchronous JavaScript
৮৪. JavaScript Promises
৮৫. JavaScript Async / Await
*/




/*
###Task--- 25
৮৬.JavaScript 
৮৭. JavaScript
/*

/*
###Task--- 26
৮৮. JavaScript 
৮৯.JavaScript 
৯০.JavaScript 
৯১. JavaScript
/*

/*
###Task--- 27
৯২. JavaScript 
৯৩.JavaScript 
৯৪.JavaScript 
৯৫. JavaScript
/*

/*
###Task--- 28
৯৬. JavaScript 
৯৭.JavaScript 
৯৮.JavaScript 
৯৯. JavaScript
/*

/*
###Task--- 29
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 30
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 31
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 32
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 33
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 34
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 35
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 36
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 37
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 38
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 39
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 40
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 41
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 42
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 43
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 44
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
/*

/*
###Task--- 45
৪৯. JavaScript 
৫০.JavaScript 
৫১.JavaScript 
৫২. JavaScript
*/