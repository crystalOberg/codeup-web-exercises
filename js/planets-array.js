 (function(planets){
        "use strict";

        var planetsArray = [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune'
        ];

        /**
         * TODO:
         * Read each console log below, and write some javascript code to perform
         * the step that it describes
         */




//        console.log('Adding "The Sun" to the beginning of the planets array.');
        planetsArray.unshift('The Sun');
        console.log(planetsArray);

//        console.log('Adding "Pluto" to the end of the planets array.');
        planetsArray.push('Mercury', 'Neptune');
        console.log(planetsArray);

//        console.log('Removing "The Sun" from the beginning of the planets array.');
        planetsArray.shift();
        console.log(planetsArray);

//        console.log('Removing "Pluto" from the end of the planets array.');
        planetsArray.pop();
        console.log(planetsArray);

//        console.log('Finding and logging the index of "Earth" in the planets array.');
        var index = planetsArray.indexOf('Earth');
        console.log(index);


//        console.log("Reversing the order of the planets array.");
        planetsArray.reverse(planets);
        console.log(planetsArray);

//        console.log("Sorting the planets array.");
        planetsArray.sort();
        console.log(planetsArray);
    })();