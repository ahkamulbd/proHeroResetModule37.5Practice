/*
    ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
*/

const zeroArrowFunction = () => 89;
//console.log(zeroArrowFunction());

/*
    3.2. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে
*/

const oneParameterArrowFunction = (number) => number / 17;

const result1 = oneParameterArrowFunction(51).toFixed(2);
//console.log(result1);

/*
    ৩.৩ দুই প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
*/

const twoParameterArrowFunction = (number1, number2) => (number1 + number2) / 2;

const result2 = twoParameterArrowFunction(51, 49);
//console.log(result2);

/*
    ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/

const multiLineArrowFunction = (number1, number2) => {
    const number1Plus7 = number1 + 7;
    const number2Plus7 = number2 + 7;
    const sum = number1Plus7 + number2Plus7;

    return sum;
}

const result3 = multiLineArrowFunction(5, 7);
console.log(result3);

