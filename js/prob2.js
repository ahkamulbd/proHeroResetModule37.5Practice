/*
    ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
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

const studentTemplateString = `
    Name: ${student.name},
    Favourite Subject: ${student.subjects[2]},
    Home Address: Flat # ${student.address.home.flatNumber}, ${student.address.home.floor} Floor, ${student.address.home.name}.

`;
console.log(studentTemplateString);