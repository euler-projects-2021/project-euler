// Largest prime factor

/* 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const checkPrime = (number) => {
    let count = 0;
    for(let i = 2; i < number/2; i++){
        if(number % i === 0){
            count ++;
            break;
        }
    } 
    return (count === 0 && number >= 2) ? true : false;
}

let max = 0, num = 600851475143;
for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
        let isPrime = checkPrime(i);
        if(isPrime) max = i;
    }
}

console.log(max);