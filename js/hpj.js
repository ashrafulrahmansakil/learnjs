/*

                            হাতে কলমে জাভাক্রিপ্ট / স্ট্যাক লার্নার এর সকল ইলিমেন্ট

*/

//বিজোড়



for (var i = 1; i < 200; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}
for (var i = 1; i<2;i++)
{
    console.log('............ Stop...........');
}

//জোড়

for (var i = 1; i < 300; i++){
    if (i + 2 === 1) {
        console.log(i);
    }
}

/**
 * Awesome loop math
 */

var sum = 0;
for (let i = 1; i <= 10; i++){
    console.log(sum + '+' + i + '=' + (sum + i));
    sum += i;
}
console.log('result =' + sum);

for (var i = 1; i<2;i++)
{
    console.log('............ Stop...........');
}

var sum= 0;
for (var i = 1; i <= 10; i++){
    console.log(sum + '-' + i + '=' + (sum - i));
    sum += i;
}
console.log('result' + sum);

for (var i = 1; i<2;i++)
{
    console.log('............ Stop...........');
}

var s = 0;
for (let i = 1; i <=10; i++) {
    console.log(s + '/' + i + '=' + (s/i))
    s+=i
}
console.log('result=' + s)

/**
 * Array Example
 */
var studentsNames= ['rahim', 'salam', 'salman', 'salam', 'salman', 'sakil'][77, 58, 75, 44, 80, 95];
 console.log(studentsNames);

var arrayName = ['blue','mango', 'green', 'blue', 'white', 'dark','youtube','facebook'];
console.log(arrayName.length);

let firstName= [' hi', ' i am a', ' your engine', ' of javascript program'];
let lastName = firstName.length;
for (let i = 0; i<lastName;i++){
    console.log(lastName +''+ firstName[i]);
}

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

// forEach array same by > for loop
// var fruits = ['mango', 'banana', 'apple', 'orange', 'pear', 'grape', 'cherry']
// function myFunction(value) {
//     console.log(value); 
// }

// fruits.forEach(myFunction);
// console.log(fNull);

//JavaScript Array Methods
var flower = ['Abutilon','Forsythia','Rose','Sunflower','Daisy']
console.log(flower);
// push ব্যবহার করা হয় কোনো কিছু যোগ করতে
flower.push('Jasmine');
console.log(flower);
//pop ব্যবহার করা হয় কোনো কিছু ডিলেট করতে
flower.pop('Jasmine');
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
flower.indexOf('Rose');
console.log(flower);

// splicing যেকোনো আইটেম রিমুভ / কাট করতে ব্যবহার করা হয়
flower.splice(1);
console.log(flower);


//আইটেমগুলো কিভাবে ভাগ হয় তা দেখানো হয়েছে
var x = ['1 Apple iPhone','2 Toshiba DVD Player','3 Apple iPad','4 TiVo', '5 DJI Phantom', '6 Fitbit', '7 Apple iBook', '8 Nokia 3210']
var y = x.splice(5);
console.log(x);
console.log(y);
//slice
var fruits = ["Banana", "Orange", "Apple", "Mango",'Rose'];
console.log(fruits.slice(2));

// concat Merging (দুটো এলিমেন্ট যুক্ত করতে বা একসাথে করতে ব্যবহার করা হয়)
var mobile = ['1 Apple iPhone','2 Toshiba DVD Player','3 Apple iPad','4 TiVo', '5 DJI Phantom', '6 Fitbit', '7 Apple iBook', '8 Nokia 3210']
var flower = ['i Abutilon','ii Forsythia','iii Rose','iv Sunflower','v Daisy']
var total = mobile.concat(flower);
console.log(total);

//sort

//sort এটা হলো এলোমেলো এলিমেন্টগুলো সিরিয়াল মোতাবেক দেখায় ইনডেক্স অনুসারে (A-Z)
var a = ['sakib', 'sakil', 'akram', 'faruk',]
console.log(a.sort());
console.log(a.reverse());

var y = [40, 200, 10, 25, 95, 33];
console.log(y.sort((a, b) => { return a - b; }));
console.log(y.sort((a, b) => { return b - a; }));
console.log(y.sort((_a, _b) => { return 0.5 - Math.random() }));
//The Fisher Yates Method

var points = [40, 100, 1,250,580,905, 5, 25, 10];
for (var i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}
console.log(points);


/*Challenge [0,0,1,8,0,9,0,0,0,8,7,9,0,0] Ei array ke slice korte hbe but    start index ta hbe 1st value jeta 0 theke boro jemon ekhane index 2 is 1, and end hbe last ke number ta 0theke boro like ekhane 11 index is 9. Ans hbe [1,8,0,9,0,0,0,8,7,9]

var i = [0,0,1,8,0,9,0,0,0,8,7,9,0,0];

function trimZero(arr) {
const arrIndex = [];
arr.forEach((value, i) => {
    value !== 0 && arrIndex.push(i);
});
return arr.slice(arrIndex[0], arrIndex[arrIndex.length - 1] + 1);
}
 
console.log(i.slice(-12, -2));
console.log(i.slice(-i.length, -2));

var car = [
    { type: 'MBW', year: 2007 },
    { type: 'BW', year: 2014},
    { type: 'MW', year: 2015 }
  ];
console.log(car.sort((a, b) => { return a.year - b.year; }));

var fruits = ['mango', 'banana', 'apple', 'orange', 'pear', 'grape', 'cherry']
function myFunction(value) {
    console.log(value); 
}
fruits.forEach(myFunction);

var myFruits = fruits.forEach((value,index,array)=>{
    console.log(`item ${index} ${value} arr   : ${array}`);
});

var i = ['fahid', 'sakib', 'taha'];
function myFunction(index,value,array) {
  console.log(value,index,array); 
}

i.forEach(myFunction);

var fruits = ['mango', 'banana', 'apple', 'orange', 'pear', 'grape', 'cherry']
function myFunction(index,value,array) {
    console.log(index);
    console.log(value);
    console.log(array);
    console.log('*******');
}

fruits.forEach(myFunction);

 var arr = [1,2, 3, 4, 5, 6, 7];
function getsqur(index) {
    return index * 2;
}
arr.map(getsqur);
var newArray = arr.map(getsqur);
console.log(newArray)

var newArr = arr.map((item, index, arr) => {
    console.log(`item ${item} and index ${index} arr: ${arr}`);
});
console.log(aNull);
var evenArr=[2,4,5,6,80,14,55,48]
var newArr = evenArr.filter((item, index, arr) => {
    console.log(`index ${index} item ${item} arr: ${arr}`);
})
  
//var evenArr = [24,20,10,25,19,15];
var evenArr = [10,24,15,10,23,254];
function getsqur(index) {
  return index % 2 ==0;
}

evenArr.filter(getsqur);

var newArray = evenArr.filter(getsqur);
console.log(newArray);

var newArr = evenArr.filter((item, index, arr) => {
  console.log(`item ${item} and index ${index} arr: ${arr}`);
});

console.log(aNull);

var arr = [10, 20, 30, 40, 80, 65, 44, 10, 22];
var total = arr.reduce((sum, item) => {
  return sum += item;
}, 0);

console.log(total);

console.log(aNull);

var arr = [10, 20, 30, 40, 80, 65, 44, 10, 22];
var total = arr.reduce((value,index,arr,total) => {
    console.log(`item: ${value} index ${index} array : ${arr} total ${total}`)
});

var total = arr.reduceRight((item,index,arr,total) => {
    console.log(`item: ${item} index ${index} array : ${arr} total ${total}`)
});

console.log(aNull)
var myNumber = [0, 1, 27, 200, 3, 4, 6, 7, 6, 6, 4];
function myFunction(value, index, array) {
    return value > 1
}

var myNumber = [0, 1, 27, 2, 3, 4, 6, 7, 6, 6, 4];
function myFunction(value, index, array) {
    return value > 50
}
var mycontact = myNumber.every(myFunction);
console.log(mycontact);

var myNumber = [65,30,22,100,42,11,80];
function myFunction(value, index, array) {
    return value > 400
}
var mycontact = myNumber.some(myFunction);
console.log(mycontact);

var i = ['discovery', 'milk', 'plan','position', 'desktop', 'skin', 'plan','gift']
console.log(i.indexOf('position'));
console.log(i.lastIndexOf('plan'));
console.log(i.includes('desktop'));
console.log(i.includes('desk'));

var myNumber = [625,340,202,100,502,111,800];
function myFunction(value, index, array) {
    return value > 500
}
var mycontact = myNumber.find(myFunction);
console.log(mycontact);


var myNumberss = [50,100,120,100,150,850,200,300,1000];
function myFunction(value, index, array) {
    return value > 300
}
var mycontact = myNumberss.findIndex(myFunction);
console.log(mycontact);

console.log(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
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

var a = ['sakib', 'siam', 'arif']
var b = a.keys();
console.log(b);


//// 
console.log('---------------------');
console.log('----------- "array end" ----------');
console.log('---------------------');
console.log('---------- "new elemets start" -----------');
console.log('---------------------');
//time
console.log(new Date(2014, 06, 04, 15, 20, 25));
console.log(new Date(2014, 06, 04, 15, 20));
console.log(new Date(2014, 06, 04, 15));
console.log(new Date(2014, 06, 04));
console.log(new Date(2014, 06));
console.log(new Date(2014));
console.log(new Date());
var d = new Date(15,14,22,22);
var d = new Date();
console.log(d);
console.log(new Date('October 14,2019,11:12:00:05'));
console.log(new Date(0));
console.log(new Date().toString());
console.log(new Date().toUTCString());
console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log(new Date('2022-06-15'));

console.log(new Date('2022-06-15T12:20:00Z'));
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

var f = new Date();
console.log(f.setFullYear(2022,2,3));
console.log(f.setDate(15));

//math

console.log(Math.round(4.2))
console.log(Math.round(4.5))
console.log(Math.round(4.4))

console.log(Math.ceil(4.4))

var totalMember = 40
var voter = 12.
var sum = Math.round(voter);
console.log(sum);

var voter = 1.
var sum = Math.round(voter);
console.log(sum);

var sum = Math.pow(5,6);
console.log(sum);

var sum = Math.round(Math.sqrt(122));
console.log(sum);

var sum = Math.sqrt(1000);
console.log(sum);

var cos = 90
var sum = Math.cos(0 * Math.PI / 180);
console.log(sum);

var sin = 250
var sum = (Math.sin(90 * Math.PI / 180));
console.log(sum);

var num = (25,45,20,10,33,69,510,10,223,50);
var sum = Math.max(num);
console.log(sum);

var nums =(25,45,20,10,33,69,510,10,223,50);
var sum = Math.min(nums);
console.log(sum);

var lotary = Math.random() * 50
console.log(lotary);

//Mathlog: লগারিদমের কাজ করে থাকে
console.log(Math.log(44));

//Mathlog2: 
console.log(Math.log2(44));

//Mathlog10: 
console.log(Math.log10(44));

console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*11))
console.log(Math.floor(Math.random()*110))
console.log(Math.floor(Math.random() * 10) + 10)


var a = 25;
var b = 12;
var c = a<b;
console.log(c)

var a = 5;
var b = 'hlo';
var c = a<b;
console.log(c)

var a = 8;
console.log(a == 6);

console.log('*** *** *** *** ***')

var a = 15;//main
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
console.log('*** *** *** *** ***')
console.log(a < 9 && b > 3);
console.log(a > 9 || b > 8);
console.log(!(a<5));

var age = 5;
if (age < 30) {
    console.log('he is adult')
} else {
    console.log('he is child')
}

console.log(age < 15 ? 'you are a young' : 'you are a child');

var a=55;
console.log(a > 20 ? 'you are a young' : 'you are a child');

var age = 35;
if (age < 30) {
  console.log('you are cute') 
}

var h = 55;
if (h <20) {
    console.log('you are child');
  } else {
    console.log('you always adult');
}
console.log('*** *** *** *** ***')
  
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
*/
// switch
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

//loop

var cars = ['a', 'b', 'c', 'd'];
for (var i = 0; i < cars.length; i++){
    console.log(`${i} ${cars}`);
}

var myObjname={
	name: "Happy Coder",
	"first name": " Hiya ",
	10: "number"
}
console.log(myObjname)

/*We can find a element from object by 2 ways,
// Dot notation(.)
// Braket Notation([])
// Dot notation dosen't support number & space.
//"firt name", 12 ---> in this case we can use bracket notation

const testObj = {
    12: "Namath",
    name: "Montana",
    "second name": "Unitas",
  };
  
  console.log(testObj.name);
  // console.log(testObj.12); // Dosen't support
  console.log(testObj[12]);
console.log(testObj["second name"]);
  
var person = { fname: 'ashraful rahman sakil', age: 24, occupation: 'student' }
for (var n in person) {
    console.log(person['age']);
}

var array = [45, 25, 85, 10, 20, 22, 36]; // অ্যারে ব্যবহার করা যাবে না for in এ
for (var l in array) {
    console.log(array);
}

let name =[ 'sakil'];
let na = 'sakil';
for (var x of na) {
    console.log(x)
}

var i= 15;
do {
    console.log('it\' ok')
    num += 1;
}

while (i < 10) {
    console.log(i +'this is me');
}

console.log('   ......   ')

for (var i = 0; i < 10; i++){
    if (i === 8) {
        break;
    }

    console.log(i + '. i am ok')
}

for (var k = 0; k <= 5; k++){
    if (k === 5) {
        console.log(`${k} is skipped`);
        continue;
    }
    console.log(k+ ' : i  is now at' );
}

var i=1;
const interval = setInterval(()=>{
console.log(i);
i++;
if(i===100) clearInterval(interval);
}, 1000);

let index = 0;
setInterval(() => {
    if (index < 100) {
        console.log(++index);
        
    }
    
}, 1000)

var a = 'hello Quokka';

console.log()


/*

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if (h == 0) { h = 12; }
    if (h > 12) { h = h - 12; session = "PM";}
    h = (h < 10) ? "0" + h : h; m = (m < 10) ? "0" + m : m; s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);   
}
showTime();
*/

let hasib = 'sakil rahman';
function myFun(){
  console.log(hasib);
}

myFun();


//global__scope:
var globalVar = 'I am a Global Variable';

function globalScope() {
   console.log('Inside a Function: ' + globalVar);
}

globalScope();

console.log('Outside: ' + globalVar);


var names = function() {
    console.log('My name is Zonayed Ahmed');
}
names();


function helloThis(){
    console.log(this);
}

helloThis();

function fullName(){
    this.named ='ashraful rahman sakil';
  }
fullName();
  
console.log(named);

var myCustomObj={
    name:'ashraful rahman sakil',
    age: 24,
    job: 'student',
    msg: function(){
    console.log('my name is '+ this.name);
    }
  }
  
myCustomObj.msg();
  
var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    isTrue: function() {
         console.log(this === myCustomObj);
    }
}
 
myCustomObj.isTrue();

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log(this);
       }
    }
}

myCustomObj.anotherObj.value();



var myCustomOj={
    name:'ashraful rahman sakil',
    age: 24,
    job: 'student',
    msg: function(){
    console.log('my name is '+ this.name);
    }
  }
  
myCustomOj.msg();
  
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


console.log(aNull);

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

myName.otherObj.value();

console.log(aNull);

myName.otherObj.value.call(myName); // call( এর ভিতরে ফাংশনের যে প্যারেন্ট বা চাইল্ড দিবেন তাইই কল করবে মানে পরিবর্তনশীল )

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

console.log(aNull);

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

kamal.age.call(jamal, 2022);

console.log(aNull);

var myOwner = {
    name: 'ashraful alom khan',
    age: 20,
    anotherOwner: {
        name: 'jamil uddin',
        age: '54',
        value: function () {
            console.log('My name is ' + this.name);
        }
    }
}

myOwner.anotherOwner.value.apply(myOwner);
myOwner.anotherOwner.value.call(myOwner);

console.log(aNull);


var karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear, msg) {
       console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
}

var rahim = {
    name: 'Rahim Abdu',
    dob: 1986
}
 
karim.age(2018, 'Hello World!');

console.log(aNull);

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
        console.log(msg+' ' + this.name + ' he was working '+ '. he is ' + (currentYear - this.dob) + ' years old!');
    }
    
}



kamal.age(2022,'hi, it\'s work. ');
console.log(aNull);
kamal.age.apply(jamal, [2022, 'hi i am.']);


// global rule

var person = {
    name: 'shakib ahmed',
    age: 22,
    address: 'gazipur',
    person2: {
        name: 'akib khan',
        value: function () {
            console.log(' my name is ' + this.name);
        
        }
    }
}

person.person2.value();

var myObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   timer: ()=> {
      setTimeout(function() {
         console.log('My name is ' + this.name);
      }.bind(myObj), 1000)
    }
}
myObj.timer();

//normal function
var demo = function(x,y){
    return x + y;
  
}
console.log(demo(90, 10));

//arrow function
var demo = (x, y) => x + y
console.log(demo(391, 9));


// class 

class PersonName{
    constructor(name, age,job) {
        this.name = name;
        this.age = age;
        this.job=job;
    }
}

let PersonParent = new PersonName('ashraful rahman sakil', 22,'student');
let Person = new PersonName('ashraful rahman sakil', 22,'programmer');
let Parents = new PersonName('ashraful rahman sakil', 22,'coder');
let PP = new PersonName('ashraful rahman sakil', 22,'unemployed');

console.log(PersonParent);
console.log(Person);
console.log(Parents);
console.log(PP);


class NewPerson{
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

let oldPerson = new NewPerson('shakib khan',25,'web developer');
console.log(oldPerson);

//set

var i = new Set();
console.log(i);

//ম্যাপস
