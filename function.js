// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("We are learning Js");
// }
// myFunction();

// function myFunction(msg){
//     //parameter->input
//     console.log(msg);
// }

// myFunction("I love JS") //argument

// function sum(x,y){
//     //local variable-> scope
//     s=x+y;
//     console.log(x);
//     return s;
// }
// let val=sum(3,4);
// console.log(x);
// console.log(val);

function sum(a,b){
    return a+b;
}
//Modern JS-> Arrow Function
const arrowSum =(a,b)=>{
    console.log(a+b);
};

const printHello=()=>{
    console.log("hello");
}

function countVowels(str){
    let count=0;
    for(let char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}

//forEach function is a higher order function which takes other function as a parameter 
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

let arr1=["pune","delhi","mumbai"];
arr1.forEach((val,idx,arr1)=>{
    console.log(val.toUpperCase(),idx,arr1);
});

let arr2=[1,2,3,4];
arr2.forEach((val)=>{
    console.log(val**2);
});

arr2.map((val)=>{
    console.log(val);
});
let newArr=arr2.map((val)=>{
    return val*val;
});
console.log(newArr);
console.log(arr2);

let arr3=[1,2,3,4,5,6,7,8];
let evenArr= arr3.filter((val)=>{
    return val%2===0;
});

console.log(evenArr);

const output=arr3.reduce((prev,current)=>{
    return prev+current;
});

console.log(output);

const output1=arr3.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
});

console.log(output1);

let marks=[87,93,98,75,90,86];
let topper=marks.filter((val)=>{
    return val>90;
});
console.log(topper);

let n=prompt("Enter a number:")
let arr4=[];
for(let i=1;i<=n;i++){
    arr4[i-1]=i;
}

// console.log(arr4);

// let Sum=arr4.reduce((prev,curr)=>{
//     return prev+curr;
// });

// console.log("sum=",Sum);

let factorial=arr4.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(factorial);