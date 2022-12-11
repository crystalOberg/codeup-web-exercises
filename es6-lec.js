"use strict";

(() => {
    let message = "Tim";
    if (message === "Tim") {
        let nolookie = "You should only see this once.";
        console.log(nolookie);
    }
    console.log(nolookie);

    const arrOfNums = [1,2,3];

    for (let num of arrOfNums) {
        if (num %2 === 0) {
            continue;
        }
        document.querySelector("#insert-here").innerHTML += '<li>$(num) is an odd number.</li>';
        document.querySelector("#insert-here").innerHTML += '<li>$${num.toFixed(2)} is an odd number.</li>';
    }

    function addTwo(num) {
        return num + 2;
    }
// one param, one line of logic for arrow function, you can do this.
    const addThree = num => num + 3;
    //
    console.log(addFour)(5));
    console.log(addThree(num: 5));
    ))
})();

