// _fullName="Reshika";
// $age=24;
// price=1999
// x=null;
// y=undefined;
// is_follow=true;
// console.log(is_follow);
// let fullName="tony stark" //variable cannot be re declared but value can be updated. it is a block scope variable
// var age=24; //variable can be re declared as well as the value can be updated. it is a global scope variable
// const price=1000; //variable cannot be re declared or update. it is a block scope variable
// console.log(fullName); 
// const Student={
//     fullName:"Reshika Kumari",
//     age:20,
//     cgpa:9.7,
//     isPass:true
// };

// Student["age"]=Student["age"]+1;

// console.log(Student.age);
// console.log(Student["fullName"]);

// const product={
//     title:"Ball Pen",
//     rating:4,
//     offer:5,
//     price:270
// };

const profile={
    username:"@Reshika", 
    isFollow:false,
    followers:123,
    following:123,
};

console.log(typeof profile["followers"]);

//Arthimetic Operators
let a=5;
let b=2;

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
a++; //post unary operator 
console.log(a);
console.log("++a=",++a); //pre unary operator first it will change the value then print the value

c=5
d=4
e="5"
console.log("c==d",a==b);
console.log("c==e",c==e);//True
console.log("c===e",c===e);//False it is equal to & type a more strict version of comaprision operator
//logical operator &&-AND  ||-OR !-NOT 

//conditional statement
let age=25;
if (age>18){
    console.log("you can vote")
}

let mode="dark";
let color;
if (mode==="dark"){
    color="black";
}
console.log(color);

//odd or even
let num=10;
if(num%2===0){
    console.log("even");
} else{
    console.log("odd")
}

age=20;
if(age<18){
    console.log("junior");
} else if (age>60) {
    console.log("senior");
} else{
    console.log("middle");
}

age++
let result= age>18?"adult":"not adult";
console.log(result)
alert("Hello Reshika");
let fullName=prompt("write your name");
console.log(fullName);

let numb =prompt("enter a number");
if (numb%5===0){
    console.log(numb,"is a multiple of 5");
} else{
    console.log(numb,"is not divisible by 5");
}

let marks=prompt("Enter marks of student");

if(marks>=90 && score<=100){
    console.log("Grade-A");
} else if(marks>=70 && marks<=89){
    console.log(Grade-B);
} else if(marks>=60 && marks<=69){
    console.log("Grade-C");
} else if(marks>50 && marks<=59){
    console.log("Grade-D");
} else{
    console.log("Grade-F");
}