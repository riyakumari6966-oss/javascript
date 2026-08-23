let marks=[85,97,44,37,76,60];
// console.log(marks[0]);
// console.log(marks[1]);
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

// for of
// for(let mark of marks){
//     console.log(mark);
// }

// let sum=0
// for(let i=0; i<marks.length; i++){
//     sum=sum+marks[i];
// }
// console.log("the average marks:",sum/marks.length);

let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(sum);
console.log(`the avg of marks are ${avg}`);

let prices=[250,645,300,900,50];
// let i=0
// for (let price of prices){
//     let offer=price/10;
//     price=price-offer
//     console.log(`value after offer =${price}`);
//     i++;
// }

for(let i=0;i<prices.length;i++){
    offer=prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(prices);
//Push()-add to end of array
//Pop()-delete from end & return
//toString()-converts array to string

let foodItems=["potato","apple","guava","grapes"];
// foodItems.push("chips","burger","litchi");
// console.log(foodItems);
// let deletedItem=foodItems.pop();
// console.log(deletedItem);
// console.log(foodItems);
// console.log(foodItems.toString());

//concat():join multiple arrays & return result
//unshift():adds to start
//shift():delete from start & return
// console.log(foodItems.concat(marks));
// foodItems.unshift("litchi","mango");
// console.log(foodItems);
// let deletedItems=foodItems.shift();
// console.log(deletedItems);
// console.log(foodItems);
console.log(foodItems.slice(1,3));
let nums=[1,2,3,4,5,6,7]
console.log(nums.splice(2,3,100,101)); //splice(startidx, delcount, new ele1)
console.log(nums);