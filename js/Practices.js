/* Hablu Programmer Javascript all parts
 Parts 1-28
 */

// hello world >2
console.log("Hello World");

//  Variables >3
var nikeName ="Any name";
console.log(nikeName);

//  String Type Variable >4
var strType ="'quotation sign as String'";
console.log(strType);

//  ‍স্ট্রিং টাইপ ভেরিয়েবল চেনার উপায়--- , সিঙ্গেল(''),ডাবল("") বা ক্যারেট(``) হলো স্ট্রিং ।

var strType ="sakil";
console.log(typeof strType);

//  Number Type Variable >5
var numType1 =20;
var numType2 =40;
var numType =300;
console.log(numType1);
console.log(numType2);
console.log(numType);

var numType =20;

console.log(typeof numType);

// Boolean  Type Variable > 6 /Reserved keywords
var boolType =true;
console.log(boolType);

var boolType =false;
console.log(boolType);
console.log(typeof boolType);

// Uppercase Lowercase  Method >8
Uppercase:

var summery = "Proficient students are They understand that if they can write a one- or two-sentence summary of each paragraph after reading it, then that is a good sign that they have correctly understood it. If they can not summarize the main idea of the paragraph, they know that comprehension has broken down and they need to use fix-up strategies to repair understanding.";

console.log(summery.toUpperCase());

Lowercasse:

var summery ="Proficient students are understand that if they can write a one- or two-sentence summary of each paragraph after reading it, then that is a good sign that they have correctly understood it. If they can not summarize the main idea of the paragraph, they know that comprehension has broken down and they need to use fix-up strategies to repair understanding."
console.log(summery.toLowerCase());

// IndexOf() & Split() Method >9
split:

var myFriend=" Sakil Siam Eshan Tutul";
console.log(myFriend.split("Sakil"));

IndexOf:

var myFriend=" Sakil Siam Eshan Tutul";
console.log(myFriend.indexOf("Tutul"));

// ParseFloat & ParseInt >10 

//ParseFloat:String To Number/int

Number:

var num1 ="4454.5454";
var num2 =2054;
num1 =parseFloat(num1);
console.log(num1);

Int:

var num1 ="4454.0054";
var num2 =2054;
num1 =parseInt(num1);
console.log(num1);


//ParseInt: Number to String
// var a = 'hello js ';
// var b = 'hello java';
// var c = a.concat('', b);
// console.log(c);

//
var a = 'hello js ' + '' + ' it\'s working';
var b = ' hello java';
var c = a.concat('', b);
console.log(c);


var num3 =20;
var num4 =60;

num4 ="" + num4;
//concat ()

var total = num3 + num4;
console.log(total);
console.log(typeof total);

// Math Operators >11

Addition:
var num1 =50;
var num2 =30;
var total= num1 + num2;
console.log(total);

Subtraction:
var num1 =50;
var num2 =30;
var total= num1 - num2;
console.log(total);

Multiplication:
var num1 =50;
var num2 =30;
var total= num1 * num2;
console.log(total);

Division:
var num1 =50;
var num2 =30;
var total= num1/ num2;
console.log(total);

Modulus:
var num1 =50;
var num2 =30;
var total= num1 % num2;
console.log(total);

// Predefined Function > 12

Mathabs:
var num = -30;
var sum = Math.abs(num);
console.log(sum);

Mathround:
var totalMember = 40
var voter = 0.5
var sum = Math.round(voter);
console.log(sum);

Mathceil:
var upper = 0.00005;
var sum = Math.ceil(upper);
console.log(sum);

Mathfloor:
var lower=0.00005;
var sum=Math.floor(lower);
console.log(sum);


Mathrandom:
var lotary = Math.random()
console.log(lotary);

var lotary = Math.random() * 100
console.log(lotary);

//          Conditional Statements    //
 /*
 if statement >15
 এটাতে হয় বড় হবে না হলে ছোট হবে বা সমান
 */

 var a = 5;
 var b = 15;

 if(a>b){
     console.log("kjsdfdflkd")
};

 var a = 2;
 var b = 4;

 if(a < b){
     console.log("am i hard worker?")
};

  //else statement >16
  var a = 5;
  var b = 6;
  if(a<b){
      console.log(b<a);
  }

// একা একা কাজ করে না
  else{
      console.log(a>b);
};

// else if >17
var a = 18;
var b = 25;
var x = 35;

 // প্রথমে if পরে else if পরে if else পরে else হবে এভাবে লিখতে হবে
 
if(a>b){
    console.log("you are young");
}
else if(a<b){
    console.log("you are mataure");
}
else if(b==x){
    console.log("you are old!");
}
else
{
    console.log("you are baby");
}

// switch statement >18
var sum = 55;
switch(sum){
    case 10:
        console.log("it's right");
        break;
    case 55:
        console.log("hello bangladesh");
        break;
        default:
            case "sakil":
            console.log("i am sakil")
}

var date = new Date();
var today = date.getDay();
switch(today){
    case 0:
        console.log('today is saturday');
        break;
        case 1:
            console.log('today is sunday');
        break;
        case 2:
            console.log('today is monday')
        break;
        case 3:
            console.log('today is tuesday');
            break
        case 4:
            console.log('today is wednesday');
            break;
        case 5:
            console.log('today is thursday');
            break;
        case 6:
            console.log('today is friday');
}

/*

 JavaScript Date Objects >19

*/

// time, date,month, second,milisecond,hours.

var myDate = new Date();
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth()); 
console.log(myDate.getDate());
console.log(myDate.getMilliseconds());
console.log(myDate.getSeconds());
console.log(myDate.getHours());
console.log(myDate.getDay());

/*

 JavaScript Arry (>20>21)

Push() pop() shift() unshift() Method

*/
// push লাস্টের স্টেটমেন্টকে পরিবর্তন করে.
var fName = ["sakil","siam","tutul","motin",]
fName.push("122"); //Add করা যেকোনো কিছু
console.log(fName);

//pop লাস্টের স্টেটমেন্টকে বাদ দিয়ে পরিবর্তন করে.
var fName = ["sakil","siam","tutul","motin",]
fName.pop(); //বাদ দেওয়া
console.log(fName);

//shift() সামনের দিকে পরিবর্তন হয়
var fdName = ["setu" ,"ashraful","sakil", "osman"]
 fdName.shift(); // বিয়োজন দেওয়া
 console.log(fdName);
 
// //unshift() সামনের দিকে পরিবর্তন হয়
var fdName = ["sakil", "osman","siam" ]
fdName.unshift("osman"); // সংযোজন দেওয়া
console.log(fdName);

// >>>> 22
//slice() যে সংখ্যা দিবে তাই দেখাবে
var fdName = ["bangla","english", "math","chemistry", "biology"]
console.log(fdName.slice(1,4));

//splice() রিপ্লেস + যে সংখ্যা দিবে তাই দেখাবে
var fdName = ["bangla","english", "math","chemistry", "biology"]
fdName.splice(0,2, "sakil" ,"science");
console.log(fdName);

/*

LOOP  >23-24 part  1-2

*/
// for
var num = [0,1,2,3,4,5,6];
for(var sum = 0; sum < 5; sum++){
console.log(sum);
}

var Nums =[0,1,2,3,4,5,6,7,8,9, "sakil", "siam","eshan","Rasel"]; //arry
for(var i =0; i <Nums.length; i++){
    console.log(Nums[i]);
}

// while loop

var i = 10;
while(i<=5){
    console.log(i);
    i++;
}

/*

function  >25

*/

function Fun(){
    var num1 =50;
    var num2 =150;
    var num3 =250;
    console.log(num1*num2);
}

Fun()
console.log('jjjj')
Fun();

// advanced
function fun(num1){
    var total = num1 *150;
    return total;
}

var a =fun (80);
var b =fun (20);
console.log(a-b);
/*

object  > 26

*/

var myInfo = {yourName: 'sakil', village: "gazipur", number:115 }
console.log(myInfo);

function myInfo(yourName, village, Phone){
    this.yourName = yourName;
    this.village = village;
    this.Phone = Phone;

    this.ShowMe = function(){
        console.log(this.yourName);
        console.log(this.village);
        console.log(this.Phone);
    }

}

var NewObj = new myInfo("akram", "dhaka",155451255);
console.log(NewObj);
console.log('break');
NewObj.ShowMe();

/*

tarnary  > 28

*/

var num ="6" ;
var Mycondition = num <1 ? "this is bangladesh" :'this is usa';
console.log(Mycondition);

var Mycondition = num > 2? "this is bangladesh" :'this is usa';
console.log(Mycondition);

var Mycondition = num == 3? "this is bangladesh" :'this is usa';
console.log(Mycondition);