//#region Task 1
// Write a function that finds the most popular pizza and prints both the name and the number of orders.
console.log("Task 1");
let soldPizzas = ["Pepperoni", "Margherita", "Hawaiian", "Pepperoni", "BBQ Chicken", "Pepperoni", "Hawaiian", "Hawaiian", "Hawaiian"];


function findFrequencies(arr) {
    let object = {};

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];   

            //dont have to check if != undefined because undefined is the same as false
            if (object[item]) {
                //if item already exists in the object, just add value
                object[item]++;
            } else {
                //if item doesnt exist in the object, set value to 1
                object[item] = 1;
            }
        }

    return object;
}

//note to self: what if multiple items have same orders? return a list. 
function makeSalesReport(frequencies){
    //making a list of all the frequencies keys (object keys), so i can iterate through it like a normal array
    let frequenciesKeysList = Object.keys(frequencies);

    //starting it off with the first item on the list
    let mostSold = frequenciesKeysList[0];

    //starting from 1, because we already have the first value in the array saved in the mostSold variable
    for (let i = 1; i < frequenciesKeysList.length; i++) {
        //this gives us name of the key, aka name of the sold item
        let itemName = frequenciesKeysList[i];

        //frequencies[key] gives us the number of sales because frequencies.key = number of sales
        if (frequencies[mostSold] < frequencies[itemName]) {
            mostSold = itemName;
        }
    }

    console.log("Most sold item: " + mostSold + ", number of sales: " + frequencies[mostSold]);
}

let frequenciesPizzas = findFrequencies(soldPizzas);
console.table(frequenciesPizzas);
makeSalesReport(frequenciesPizzas);

//#endregion


//#region Task 2
// Write a function that takes the two arrays and returns a new array with students interleaved, 
// one from Group A, one from Group B, and so on.
console.log("\nTask 2");

function interleaveClasses(arr1, arr2){
    let output = [];

    //finding the longest array to know how long the foor loop iteration must be to get all items
    let longestArrayLength = 0;
    if (arr1.length > arr2.length) {
        longestArrayLength = arr1.length;
    } else {
        //longest array will be arr2 even if arr1 is same length as arr2 for simplicity
        longestArrayLength = arr2.length;
    }

    for (let i = 0; i < longestArrayLength; i++) {
        //making sure the item in array exists (because the arrays can be different lengths), before we add it
        if (arr1[i]) {
            output.push(arr1[i]);
        }

        if (arr2[i]) {
            output.push(arr2[i]);
        }
    }

    return output;
}

let groupA = ["Liam", "Sofia", "Noah", "Thea", "Jonas"]; 
let groupB = ["Emma", "Lucas", "Olivia"];

console.table(interleaveClasses(groupA, groupB));

//making sure the original arrays have not been changed by the function
console.log(groupA);
console.log(groupB);
//#endregion


//#region Task 3
// Write a function that calculates the difference between each consecutive pair of days, 
// subtracting the previous day’s temperature from the next day’s.
// The result should be a new array showing the daily changes.
console.log("\nTask 3");

function tempDailyChange(arr){
    let output = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let tempCurrentDay = arr[i];
        let tempNextDay = arr[i + 1];

        output.push(tempNextDay - tempCurrentDay);
    }

    return output;
}

let temperatures = [14, 17, 21, 19, 22, 18, 20];

console.table(tempDailyChange(temperatures));