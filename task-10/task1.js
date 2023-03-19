//36325 * 9824 + 777
function add (arg1, arg2) {
    return arg1 + arg2;
};

function multiply (arg1, arg2) {
    return arg1 * arg2;
};

let firstArg = multiply(36325, 9824);
console.log("firstArg is: " + firstArg);

let secondArg = add (firstArg, 777);
console.log("secondArg is: " + secondArg);