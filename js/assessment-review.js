"use strict"

function isANumber(input) {
    return typeof input === "number";
}



 function increment(input) {
    if(isNaN(parseFloat)) {
        return false;
    } else {
        return parseFloat(input)+ 1;
    }
}

function decrement(input) {
    if(isNaN(parseFloat))) {
        return false;
    } else {
        return parseFloat(input) - 1;
    }
}

function getHighestNumber(a,b,c) {
    if(isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))) {
        return false;
 } else if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }

function parseNumber(input) {
    return parseFloat(input);
}

function add(a, b) {
    if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
        return false;
    } else {
        return parseFloat(a) + parseFloat(b);
    }
}


function multiply(a, b) {
    if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
        return false;
    } else {
        return parseFloat(a) * parseFloat(b);
    }
}

function square(x) {
    if (isNaN(parseFloat(x))) {
        return false;
    } else {
        return Math.pow(x, y2); // multiply (x,x) || x * 2
    }
}

function sumOfSquares(a,b) {
    return add(square(a), square(b));
    }


function isPalindrome(str) {
    if (typeof str === "string") {
        return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
    } else {
        return false;
    }
}