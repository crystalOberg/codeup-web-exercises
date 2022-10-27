"use strict"

var arr = [
    'Volkswagen',
    'Volvo',
    'Limo'
];

var lgth = 0;
var longest;

for (var i=0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i];
}}
console.log(longest);


function getlongeststring(arr) {
    let longestStr = "";
    for (let str of arr) {
        if(str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return(longestStr);

}

const colors = ["Green", "Blue", "Periwinkle"];

//console.log(getlongeststring(colors));