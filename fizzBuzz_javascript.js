
var num = [1, 2, 3];
num.push(4) //enter number
num.pop(3)  //remove number
console.log(num);

var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
    console.log(output);


};

while (count <= 100) {
    fizzBuzz();
};