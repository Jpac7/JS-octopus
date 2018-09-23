// Passing functions as arguments
// Modular and readable code

var pricesArr = [220, 1000, 530, 100, 40];

// HIGH-ORDER function
function arrayCalc(arr, fn) {
    var resultsArr = [];
    for(var i = 0; i < arr.length; i++) {
        resultsArr.push(fn(arr[i]));
    }
    return resultsArr;
}

// CALLBACK functions - with simple and sigle task each
function discount(el) {
    if(!this.value) {
        return el;
    }
    
    return Math.round(el * (1 - this.value));
}

function addTaxValue(el) {
    return el * 1.23;
}

function isLowerThanThousand(el) {
    return el < 1000;
}

var discounts = arrayCalc(pricesArr, discount.bind({value: 0.2}));
console.log('discounts:', discounts);

var afterTaxes = arrayCalc(discounts, addTaxValue);
console.log('taxes included:', afterTaxes);

var cheap = arrayCalc(pricesArr, isLowerThanThousand);
console.log('cheap:', cheap);
