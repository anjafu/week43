//#region Task 1
// Write a function that finds the most popular pizza and prints both the name and the number of orders.
console.log("Task 1");

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

function makeSalesReport(frequencies){
    //making a list of all the frequencies keys (object keys), so i can iterate through it like a normal array
    let frequenciesKeysList = Object.keys(frequencies);

    //starting it off with the first item on the list
    let mostSoldItem = frequenciesKeysList[0];

    //starting from 1, because we already have the first value in the array saved in the mostSoldItem variable
    for (let i = 1; i < frequenciesKeysList.length; i++) {
        //this gives us name of the key, aka name of the sold item
        let itemName = frequenciesKeysList[i];

        //frequencies[key] gives us the number of sales because frequencies.key = number of sales
        if (frequencies[mostSoldItem] < frequencies[itemName]) {
            mostSoldItem = itemName;
        }
    }

    console.log("Most sold item(s): ");
    //in case multiple items have same number of orders (mutliple popular orders)
    for (let i = 0; i < frequenciesKeysList.length; i++) {
        let itemName = frequenciesKeysList[i];
        if (frequencies[itemName] == frequencies[mostSoldItem]) {
            console.log(itemName + ", number of sales: " + frequencies[mostSoldItem]);
        }
    }
}

let soldPizzas = ["Pepperoni", "Margherita", "Hawaiian", "Pepperoni", "BBQ Chicken", "Pepperoni", "Hawaiian", "Hawaiian"];
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
//#endregion


//#region Task 4
// Write a function that helps them choose a combination of items whose total weight comes as close as possible 
// to 40 without going over.
// The goal is to maximize what they can carry while staying within the weight limit 
// (more items are better). Return a list of items and the total whight.
console.log("\nTask 4");

function getMaxItems(arr, maxWeight){
    let output = {
        items : [],
        weight : 0,
    }

    let currentItems = [];
    let currentWeight = 0;

    //cant just use regular .sort() because our array contains objects, and we have to define what in the object
    //is to be sorted by (weight)
    let sortedArrayBySmallest = [...arr].sort(function(a, b){return a.weight - b.weight});
    console.table(sortedArrayBySmallest);

    for (let i = 0; i < sortedArrayBySmallest.length; i++) {
        let item = sortedArrayBySmallest[i];
        let itemWeight = sortedArrayBySmallest[i].weight;

        if (currentWeight < maxWeight) {
            if (currentWeight + itemWeight <= maxWeight) {
                currentItems.push(item);
                currentWeight += itemWeight;
            }
        }
    }

    //now has max items possible -> remove last item to see if it can be replaced by something with bigger weight
    // -> thus maximizing weight as well
    currentWeight -= currentItems[currentItems.length-1].weight;
    currentItems.pop();

    //for loop starting with biggest weight to find last item to add
    //i >= currentItems.length to ensure we dont add duplicate items
    for (let i = sortedArrayBySmallest.length - 1; i >= currentItems.length ; i--) {
        let item = sortedArrayBySmallest[i];
        let itemWeight = sortedArrayBySmallest[i].weight;

        if (currentWeight < maxWeight) {
            if (currentWeight + itemWeight <= maxWeight) {
                currentItems.push(item);
                currentWeight += itemWeight;
            }
        }
    }

    output.items = currentItems;
    output.weight = currentWeight;

    return output;
}

let gear = [
                { name: "Longsword", weight: 12 },
                { name: "Steel Shield", weight: 15 },
                { name: "Healing Potion", weight: 3 },
                { name: "Candle", weight: 1 },
                { name: "Rope Coil", weight: 5 },
                { name: "Crossbow", weight: 9 },
                { name: "Spell Tome", weight: 8 },
                { name: "Traveler's Cloak", weight: 4 },
                { name: "Mana Crystal", weight: 6 },
                { name: "Rations Pack", weight: 10 },
                { name: "Compass of True North", weight: 2 },
                { name: "Golden Chalice", weight: 7 },
                { name: "Dragon Scale Fragment", weight: 11 },
                { name: "Lantern", weight: 5 },
                { name: "Bag of Coins", weight: 13 }
                ];


let optimisedBackpack = getMaxItems(gear, 40);

console.log("All items in backpack:");
console.table(optimisedBackpack.items);
console.log("Current weight of backpack: " + optimisedBackpack.weight + "kg.");
//#endregion