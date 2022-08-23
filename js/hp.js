// Hablu-Progrmmmer Javascript Assignment-1
/*
var address ='Chittagong';
var name = 'Showrov';
var address ;
var name;
এগুলো হলো variable Declaration.
var দিয়ে কোন নাম
let দিয়ে কোন নাম
const দিয়ে কোন নাম
এভাবে var, let,const keyword এর সাথে কোন নাম লেখা হলো Variable declaration, মানে var,let,const কে নাম ধরে ডাকা।
আমি যদি লিখি var colorName;
তার মানে হলো আমি colorName নামে একটি variable declare করেছি।
একটা জিনিস এখানে
let colorName = 'green';
এখানে দুইটা কাজ হচ্ছে হচ্ছে।
এই line টা কে যদি ভেঙে লিখি তাহলে এমন টা হবে👉
১ম অংশ/ প্রথম কাজ 👉let colorName ;
২য় অংশ /দিত্বীয় কাজ 👉 colorName = 'green';
👉প্রথম অংশে colorName নামক Variable declare করা হয়েছে।
👉দিত্বীয় অংশে colorName variable এ value assign করা হয়েছে। ✌️
এটা গেল variable declaration.
এবার আসি reassign মামার কাছে।
আগে মায়ের ভাষায় বুঝি reassign জিনিস টা কি,
assign মানে হলো কোন কিছু নির্দিষ্ট করে দেওয়া,
re মানে হলো পুনরায় বা আবার।
তাহলে reassign বলতে কোন কিছু আগে দেওয়া বা নির্দিষ্ট করে দেওয়া আছে, সেটাকে আবার নতুন কিছু দেওয়া।
আচ্ছা যাক মায়ের ভাষায় reassign জিনিসটা তো টুপ করে গিলে ফেল্লাম,
এবার জাভাস্ক্রিপ্ট মামার কাছে যাওয়া যাক।
এখানে 👉 var myAge = 10;
myAge নামক Variable এ আমার বয়স 10 assign করেছি মানে myAge Variable এ 10 value নির্দিষ্ট করে দিয়েছি।
এখন যদি আমি আবার myAge variable এ myAge=12 লিখি তার মানে এখানে আমি myAge variable 12 reassign করছি , মানে নতুন value আবার নির্দিষ্ট করে দিই।
এটা হবে reassign, ✌️
একমাত্র Function এর {
}
দিত্বীয় বন্ধনী { curly braces }
ছাড়া বাকি সব দিত্বীয় বন্ধনীর { }
ভেতর এর অংশ হলো Block scope.
যেমন
if(){
}
switch (){
}
for{
}
ইত্যাদির { } দিত্বীয় বন্ধনীর ভেতর অংশ টুকু Block Scope.
শুধু Function () {
} এর দিত্বীয় বন্ধীর জন্য ধারণা টা আলাদা। এটা ফাংশন স্কোপ
*/
// 1. Variable কি?
// Answer: ভেরিয়েবল হচ্ছে একটা পাত্র, এখানে যেকোন মান ধরে রাখা যায় এবং পরে এই ভেরিয়েবল ধরে কাজ করা যায়।

// 2. Variable কিভাবে কাজ করে?
Example: var friendName="Hably Vaiya";
console.log(friendName);

// // 3. String type variableকি ও কি ভাবে লিখতে হয়?
// Answer: স্ট্রিং টাইপ সিঙ্গেল(''),ডাবল(""), ক্যারেট(``) সাইন দিয়ে ডিক্ল্যারেশন করা হয়।
// আর ভেরিয়াবল কোন টাইপ তা জানার জন্যে নামের আগে (typeof)

Example: 
var strType=`hablu programmer`
console.log(typeof strType);

// 4. Number type variable কি ও কি ভাবে লিখতে হয়?
// Answer: যে কোনো ধরনের সংখ্যা হতে পারে পূর্ণ,দশমিক সংখ্যা।

Example:
var numType=30;
console.log(numType);

// 5. Boolan type variableকি ও কি ভাবে লিখতে হয়?

//    Answer: বুলিয়ানে ভ্যালু দুইটা হতে পারে হয় সত্য হবে না হয় মিথ্যা হবে। আর এটার মান ছোট হাতের হবে বড় হাতের ভুল হবে।

    Example:
    var BoolType="true";
    console.log(BoolType);
    console.log(typeof BoolType);

    Example:
    var BoolType="false";
    console.log(BoolType);
    console.log(typeof BoolType);


// 6. toUppercase() & toLawercase() এর ব্যবহার কিভাবে করতে হয়?

// Answer: জাভাক্রিপ্ট এর রির্জাভ কী-ওয়ার্ড toUppercase দিয়ে ছোট অক্ষরকে বড় করে দেখায়।

Example:

toUppercase:
var quotes = "“The purpose of our lives is to be happy.” — Dalai Lama"
console.log(quotes.toUpperCase());

// Answer: জাভাক্রিপ্ট এর রির্জাভ কী-ওয়ার্ড toLowercase দিয়ে বড় অক্ষরকে ছোট করে দেখায়।

toLowercase:
var quotes = "“The purpose of our lives is to be happy.” — Dalai Lama"
console.log(quotes.toLowerCase());

// 7. Javascript এর মোট কয়টি অপারেটর ও কি কি?
//    Answer: জাভাক্রিপ্ট এর মোট অপারেটর ৫ টি।
//     1. Arithmentic Operator
//     2. comparison Operator 
//     3. logical / relational Operator
//     4. Assignment Operator
  
//     5. conditional Operator
// 8. Math.abs() এর ব্যবহার লিখুন।
// Answer: ঋনাত্বক (-) মানকে ধনাত্বক (+) মানে প্রকাশ করে থাকে।

Example:
var num1 = -20
var sum = Math.abs(num1);
console.log(sum);

// 9. Math.ceil() এর ব্যবহার লিখুন।
// Answer: উপরে তুলে দেওয়া মানে কোনো মানে যত খুচরা সংখ্যা থাকুক না কেন  তা উপরে তুলে দেবে। ধরি, 0.0000 ও 0.0001 আছে এখন দুটি সংখ্যা থেকে যার খুচরা সংখ্যা আছে সে একটি পূর্ণ সংখ্যায় রূপান্তরিত হবে 1 । যার কোনো খুচরা সংখ্যা নেই তার ফলাফল 0 দেখাবে।

Example:

var upper = 0.00001;
var sum = Math.ceil(upper);
console.log(sum);

// 10. Math.floor() এর ব্যবহার লিখুন।
// Answer: এটার কাজ নিচে নামানো মানে 0.9999 আছে সেটা 1 না হয়ে 0 হয়ে যাবে।

Example:

var lower = 0.00001;
var sum = Math.floor(lower);
console.log(sum);

// 11. Math.round() এর ব্যবহার লিখুন।
// Answer: যার সংখ্যা বেশি থাকবে তার দিকে ফলাফল আসবে।
// ধরি, 0.5 হলে মান হবে 1,আর যদি 0.4 হলে তাহলে মান হবে 0। 0.5 এর হলে উপরে যাবে আর 0.4 হলে নিচে যাবে মান।

Example:
var totlaMember = 20
var voter = 0.5
var sum = Math.round(voter);
console.log(sum);

// 12. Math.random() এর ব্যবহার লিখুন।
// Answer: এটার কাজ হলো এলোমেলোভাবে দশমিকসহ মান দেখানো। আর এটার সাখে যদি পূর্ণ সংখ্যা দেই (max) তাহলে একেক বার একেক বার ভিন্ন ভিন্ন ফলাফল আসবে। এর মান থাকে  0 - 0.1. 

Example:
var lotary = Math.random()
console.log(sum);

var lotary = Math.random() *
console.log(sum);

