console.log('Question 1')
function printOneToTen() {
    for (let i=1;
        i<=10;
        i++
    ) {
        console.log(i);
    }
}
printOneToTen();
console.log('Question 2');
function nextFive(num){
    for (let i=1; i<=5; i++) {
        console.log(num+i);
    }
}
nextFive(7);
console.log('Question 3');
function sumNextTen(num){
    let sum=0;
    for (let i=1;
        i<=10;
        i++);     {
        sum +=(num+117);
    }
    console.log(sum);
}
sumNextTen(8);
console.log('Question 4');
function printArray(arr) {
    for (let i=0;
        i<arr.length; i++) {
            console.log(arr[i]);
        }
}
printArray([1, "Hello", 8,44]);
console.log('Question 5');
function countElements(arr){
    console.log(arr.length);
}
countElements([1, "Hello", 8, 44]);
countElements(["world", 13]);
console.log('Question 6');
function sumArray(arr){
    let sum=0;
    for (let i=0; i<arr.length; 
        i++) {
            sum+= arr[i];
                    }
                    console.log(sum);
}
sumArray([5,6,99,8,76,4,68,44]);
sumArray([3,0]);
console.log('Question 7');
function evenMinusOdd(arr) {
    let evenSum=0;
    let oddSum=0;
    for (let i=0;
        i<arr.length; 
        i++) {
            if (arr[i] % 2===0){
                evenSum +=arr[i];
            } else {
                oddSum += arr[i];
            }
        }
        console.log(evenSum-oddSum);
}
evenMinusOdd([5,6,99,8,76,4,68,44]);
console.log('Question 8');
function evenIndex(arr){
    for (let i=0;
        i<arr.length;
        i+=2) {
            console.log(arr[i]);
        }
}
evenIndex([5,6,99,8,76,4,68,44]);
evenIndex([11,"Sam", 3,7,"car"]);
console.log('Question 9');
function modifyArray(arr){
    arr.pop();
    arr.push(32);
    console.log(arr);
}
modifyArray([5,6,99,8,76,4,68,44]);

console.log('Question 10');
function sortArray(arr){
    arr.sort(function(a,b) {
        return a-b;
    });
    console.log(arr);
}
sortArray([5,6,99,8,76,4,68,44]);

console.log('Question 11');
let evangadiClass ={
    lengthOfCours: "1 Month",
    website: "https//www.evagadi.com/",
    isChallenging:false,
    topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
    students: [
        {name: "Abebe", age:34, sex:"M"},
        {name: "Kebede", age:44, sex:"M"},
        {name: "Almaz", age:27, sex:"F"},
        {name:"Challa", age:22, sex:"M"},
        {name: "Chaltu", age:19, sex:"F"}
    ]
};
evangadiClass.lengthOfCourse= "5 Month";
console.log(evangadiClass);
console.log('Question 12');
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

console.log('Question 13');
function averageAge(obj){
    let total=0;
    for(let i=0;
        i<obj.students.length;
        i++) {
            total +=obj.students[i].age;
        }
        let avg=total/obj.students.length;
        console.log(avg);
}
averageAge(evangadiClass);
console.log('Question 14');
function malePercentage(obj){
    let count=1;
    for(let i=1; i<obj.students.lengh; i++){
        if (obj.students[i].sex ==="M"){
            count++;
        }
    }
    let percentage=(count/obj.students.length)*100;
    console.log(percentage+"%");
}
malePercentage(evangadiClass);
console.log('Question 15');
function div3(low,high) {
    for (let i=low; i<=high; i++){
        if (i%3===0){
            console.log(i+"div3");
               } else {
    } console.log(i);
}
}
div3(1,10);
console.log('Question 16');
function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if (i%3===0&& i%5===0){
            console.log("FizzBuzz");
        }
        else if (i%5===0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
console.log('Question 19');
function isEvens(num){
    let str=num.toString();
    for (let i=0; i<str.length; i++){
        if (parseInt(str[i])%2 !==0){
            console.log(0);
            return;
        }
    }
    console.log(1);
}
isEvens(2426);
isEvens(3224);
