// Prompt user for the number
let number = prompt("Enter a number")
for (var i = 1; i <= number; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        // multiples of both three and five print 'FizzBuzz'
        console.log("FizzBuzz");
        continue
    } else if (i % 3 == 0) {
        // multiples of three print 'Fizz'
        console.log("Fizz");
        continue
    } else if (i % 5 == 0) {
        // multiples of five print 'Buzz'
        console.log("Buzz");
        continue
    }
    console.log(i);
}