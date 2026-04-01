// SECTION A: forEach()
// QUESTION ONE: Given the array below, use forEach() method to print each number multiplied by 2
const numbers = [2,4,6,8,10];
numbers.forEach(number => {
    console.log(number * 2);
});

// QUESTION TWO: Use forEach() to print a message in this for format. (Format is shown in the answer)
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name){
    console.log("Hello " + name);
});

// SECTION B
// QUESTION THREE: Given the array below, use the map() method to create a new array where each number is squared
const numbers1 = [1,2,3,4,5];
const numbersSquared = numbers1.map(number => number * number);

console.log("Numbers1:", numbers1);
console.log("Numbers squared:", numbersSquared);

/* QUESTION FOUR: Given the array below, use map() method to create a new array where each price 
has a 10% discount applied.*/
const prices = [100, 200, 300];
const discountedPrices = prices.map(function(price){
    return price * 0.9;
})

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);

// SECTION C: filter() method
// QUESTION FIVE: Given the array below:
// Use filter() to create a new array that contains only numbers greater than 10.
const numbers2 = [5, 12, 8, 20, 3];
const greaterThanTen = numbers2.filter(number => number > 10);

console.log("Numbers2:", numbers2);
console.log("Numbers greater than 10:", greaterThanTen);

// QUESTION 6: Given the array, use filter() method to return the ages that 18 and above
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter(function(age){
    return age >= 18
});

console.log("Ages:", ages);
console.log("Adults:", adults);
