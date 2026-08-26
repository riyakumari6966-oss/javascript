// const Student={
//     fullName:"reshika kumari",
//     marks:95,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     },
// };

// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object")
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let fortuner=new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus=new ToyotaCar("lexus",12)
// console.log(lexus);

// class Person{
//     constructor(){
//         this.species="homo sapiens";
//     }
    
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }
// let reshikaObj=new Engineer();

// //Asynchronous 
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// }, 4000);

// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// //Callback & API topic(callback and promises)

// function getData(dataId){
//     return new Promise((resolve, rejact)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// //Async-await(best of all ways)
// async function getAllData(){
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
// }

// //IIFE (executes the function without need of calling it)
// (async function(){
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
// })();

// //Promise Chain(better than callback hell but not that great)

// console.log("getting data 1...");
// getData(1)
//     .then((res)=>{
//         console.log("getting data 2...");
//         return getData(2);
//     })
//     .then((res)=>{
//         console.log("getting data 3");
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     });

// //Callback hell(worst way)
// getData(1,() => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3,()=>{
//             console.log("getting data 4...");
//             getData(4);
//         });
//     });
// });

const URL="https://meowfacts.herokuapp.com/";
const factPara=document.querySelector("#fact");

const getFacts=async()=>{
    console.log("getting data....")
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data);
    factPara.innerText=data;
};

