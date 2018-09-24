// Blocks vs IIFE's (in ES5) -- Data privacy

// ES6 variables are block-scoped
{
    let a = 15;
    const b = 39;
    //console.log('a + b = ' + (a + b))
}

//console.log('a + b = ' + (a + b))

// ES5 variables are function-scoped
(function() {
    var x = 13;
})();

console.log(x);
