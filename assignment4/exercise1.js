// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var n = 10;
var sum = 0;
for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("The sum of even number upto " + n + " is " + sum);
