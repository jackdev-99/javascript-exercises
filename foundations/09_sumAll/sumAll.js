const sumAll = function(num1, num2) {
    let sum = 0;
    for(i=Math.min(num1,num2); i<= Math.max(num1,num2); i++ ) {
        sum += i;
    }
    return sum;
};
console.log(sumAll(1,4)); // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
