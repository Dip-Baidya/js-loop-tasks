

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let oddSum = 0;
for (let index = 91; index <= 129; index++) {
    if (index % 2 != 0) {
        oddSum = oddSum + index;
    }
    // console.log("Sum of odd Numbers: ", oddSum)
}
console.log("Sum of odd Numbers: ", oddSum)



/***
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sumEven = 0;

for (let index = 51; index <= 85; index++) {
    if (index % 2 == 0) {
        sumEven = sumEven + index;
    }
}
console.log("sum of Even Numbers: ", sumEven);



/*programming hero*/