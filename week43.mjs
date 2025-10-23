//#region Task 1
// Write a function that finds the most popular pizza and prints both the name and the number of orders.
let soldPizzas = ["Pepperoni", "Margherita", "Hawaiian", "Pepperoni", "BBQ Chicken", "Pepperoni", "Hawaiian", "Hawaiian", "Hawaiian"];


function findFrequencies(arr) {
    let object = {};
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];   

            if (object[item] != undefined) {
                object[item]++;
            } else {
                object[item] = 1;
            }
        }
    return object;
}

function makeSalesReport(frequencies){
    let frequenciesKeysList = Object.keys(frequencies);

    let mostSold = frequenciesKeysList[0];

    for (let i = 0; i < frequenciesKeysList.length; i++) {
        if (frequencies[mostSold] < frequencies[frequenciesKeysList[i]]) {
            mostSold = frequenciesKeysList[i];
        }
    }

    console.log("Most sold item: " + mostSold + ", number of sales: " + frequencies[mostSold]);
}

let frequenciesPizzas = findFrequencies(soldPizzas);
console.log(frequenciesPizzas);
makeSalesReport(frequenciesPizzas);

//#endregion


//#region Task 2
// Write a function that takes the two arrays and returns a new array with students interleaved, 
// one from Group A, one from Group B, and so on.