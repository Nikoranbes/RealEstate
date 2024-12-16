// let numbers = [];

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         numbers.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//         numbers.push("Fizz");
//     } else if (i % 5 === 0) {
//         numbers.push("Buzz");
//     } else {
//         numbers.push(i);
//     }
// }

// console.log(numbers);


function numbersJode(){

    jod = -10;

    for (let i = 0; i < numbersArray.length; i++) {
        
        jod += numbersArray[i]
    }
    return jod
}

numbersArray = [2,6,13,50]

 const pureNumber =  numbersJode(numbersArray)
    console.log(pureNumber);
    


