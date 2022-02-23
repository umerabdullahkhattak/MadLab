/ sum = 0;
// for(i=0; i<temp.length; i++){
//     sum = sum + temp[i];

// }
// console.log("Sum: "+ sum);

@@ -43,9 +42,7 @@

//Problem 6
// temp = Math.floor(Math.random() * 10) + 1;

// guess = window.prompt("Guess the Number between 1 and 10: ");

// if(guess==temp){
//     console.log("You Won.")
// }
@@ -65,40 +62,38 @@


//Problem 5
let aString='Daniyal'
vowel(aString)
function vowel(aString)
{
    let vowels=['a','e','i','o','u']
    let arr1=Array.from(aString)
    for(let i=0; i<arr1.length; i++)
    {
        if(vowels.includes(arr1[i]))
        {
            console.log(i)
            return;
        }
    }
}


let aNumber=123456789
reverse(aNumber)
function reverse(aNumber)
{
    let number=parseInt(aNumber)
    let reverse=0
    let temp=0  
    while(number>0){
    temp=number%10
    reverse=reverse*10 + temp
    number=parseInt(number/10)
    }
    console.log(reverse)
}
// let aString='Daniyal'
// vowel(aString)
// function vowel(aString)
// {
//     let vowels=['a','e','i','o','u']
//     let arr1=Array.from(aString)
//     for(let i=0; i<arr1.length; i++)
//     {
//         if(vowels.includes(arr1[i]))
//         {
//             console.log(i)
//             return;
//         }
//     }
// }
// let aNumber=123456789
// reverse(aNumber)
// function reverse(aNumber)
// {
//     let number=parseInt(aNumber)
//     let reverse=0
//     let temp=0  
//     while(number>0){
//     temp=number%10
//     reverse=reverse*10 + temp
//     number=parseInt(number/10)
//     }
//     console.log(reverse)
// }


//Problem 8
let string='Daniyal'
let sortedstr=string.split("").sort().join("")
console.log(sortedstr) 
// let string='Daniyal'
// let sortedstr=string.split("").sort().join("")
// console.log(sortedstr)
