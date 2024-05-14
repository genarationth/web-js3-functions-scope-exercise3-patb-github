// Exercise 3.1
const paymentAmount = transactionAmount => 3 + (transactionAmount * 1.001);

// Exercise 3.2
// Part 1
const greet = (name1, name2, name3) => console.log(`Welcome ${name1}, ${name2}, ${name3}.`);

// Part 2
const age = birthYear => 2024 - birthYear;

// Part 3
const greetAndAge = (name, birthYear) => `Welcome ${name}, you are ${age(birthYear)}`;
function greetAndAgeAll(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    console.log(`${greetAndAge(name1, birthYear1)} ${greetAndAge(name2, birthYear2)} ${greetAndAge(name3, birthYear3)}`);
}

// Challenge
// Part 1
const passes = score => score >= 5;

// Part 2
const isExcellent = score => {
    if (score > 8) {
        console.log("Excellent");
        return true;
    } 
    return false;
}

// Part 3
const isPerfect = score => {
    if (score === 11) {
        console.log("Perfect");
        return true;
    } 
    return false;
}
