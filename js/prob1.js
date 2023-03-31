/*
    ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
*/

const student = {
    id: 1,
    name: 'Abdul Hannan',
    isPassed: true,
    subjects: ['Bangla', 'English', 'Math', 'Science', 'Geography'],
    address: {
        street: 'Sabujbag',
        municipality: 'Chakaria',
        postOffice: 'Chiringa',
        home: {
            name: 'Marwa Palace',
            floor: '6th',
            flatNumber: 502
        }
    },
    exam: function (subject) {
        return `${this.name} is participating in ${subject} exam `
    },
    result: function () {
        return `He has passed in ${this.subjects[1]}, ${this.subjects[3]} and ${this.subjects[0]}`
    }
}
const output = student.exam('Calculas');
//console.log(output);

const output1 = student.result();
console.log(output1);