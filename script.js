function isPrime(num) {
    if (num <= 1) return false; // 1 and numbers less than 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // other even numbers are not prime
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) { 
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const firstElement = arr[0];
    
    if (typeof firstElement !== 'number') {
        return "First element is not a number";
    }

    if (isPrime(firstElement)) {
        return `The first element ${firstElement} is a prime number.`;
    } else {
        return `The first element ${firstElement} is not a prime number.`;
    }
}

// Example usage:
let myArray = [7, 3, 5, 8];
console.log(checkFirstElementPrime(myArray)); 

2.

function findMostFrequent(arr) {
    if (arr.length === 0) return null;

    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentItem;

    for (let item of arr) {
        // Count the frequency of each item
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }

        // Update the most frequent item and its frequency
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}

// Example usage:
let myArray1 = [3, 7, 3, 2, 3, 7, 7, 7, 8];
console.log(findMostFrequent(myArray)); 




3.


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}



4.



function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]; // Square each element and add it to the sum
    }

    return sum;
}

// Example usage:
let myArray2 = [2, 3, 4];
console.log(sumOfSquares(myArray)); 



