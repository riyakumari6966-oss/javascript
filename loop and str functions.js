for(let i=1;i<=5;i++){
    console.log("Reshika Kumari");
}
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i
}
console.log(sum); 

let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}
let j=20;
do{
    console.log("Apna college");
    i++;
} while(i<=10);

let str="apnacollege";
let size=0;
for(let i of str){  //used for str and arrays
    console.log(i);
    size++;
}
console.log("string size=",size);

const student={
    name:"Riya",
    cgpa:9.7,
    age:20,
    isPass:true,
};
for(let key in student){
    console.log("key=",key, "value=", student[key]);
}

for(let i=0;i<=30;i++){
    if(i%2===0) {
        console.log(i);
    } 
}

// let gameNum=25;
// let userNum=prompt("Guess the number");

// while(userNum!=gameNum){
//     userNum=prompt("Wrong! Guess again");
// }

// console.log("Congratulation you got the number right");

let string="Reshika";
console.log(string.length);
console.log(string[0]);
console.log(string[2]);

let obj={
    item:"pen",
    price:10,
}

let output=`the cost of ${obj.item} is ${obj.price} rupees`; //better to write without giving comma everytime called Template Literal
console.log(output)
console.log("the cost of",obj.item,"is",obj.price,"rupees");
//\n-next line \t-tab space

let str1="Reshika Kumari";
let str2="Tanishu"
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim()); //does not remove words in between space just removes start and last spaces of any
console.log(str1.slice(0,4));
console.log(str1.concat(str2));
console.log(str1.replace("Re","I")); //replaceALL

let userName=prompt("Enter your full name:");
let newuserName="@"+userName+userName.length;
console.log(newuserName);
