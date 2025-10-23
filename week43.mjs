//#region Task 1
// Write a function that finds the most popular pizza and prints both the name and the number of orders.
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