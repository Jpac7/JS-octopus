// ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= 18);
    })
}

//isFullAge5(2003, 2002, 2000, 2001);
//isFullAge5(2003, 2002, 2000, 2001, 1999, 1988);

// ES6 - rest parameter
function isFullAge6(...years) {
    //console.log(years);
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= 18));
}

//isFullAge6(2003, 2002, 2000, 2001, 1999, 1988);


// Additional usual parameter
// ES5
function isFullAge55(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= limit);
    })
}

//isFullAge55(18, 2003, 2002, 2000, 2001, 1999, 1988);

// ES6 - rest parameter
function isFullAge66(limit, ...years) {
    //console.log(years);
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= limit));
}

isFullAge66(18, 2003, 2002, 2000, 2001, 1999, 1988);