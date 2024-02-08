
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num = 81;
let oddSum = 0

while (num <= 131) {
    if (num % 2 != 0) {
        oddSum = oddSum + num;
        console.log("Odd Number: ", num, "Sum of Odd Numbers: ", oddSum)
    }
    num++;
}



/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num1 = 206;
let evenSum = 0;

while (num1 <= 311) {
    if (num1 % 2 == 0){
        evenSum = num1 + evenSum;
        console.log("Even Numbers ", num1, "Sum Of Even Nummbers ", evenSum)
    }
    num1++;
}

/*programming hero*/