var budgetController = (function() {
    
    var budget = 0
    
    return {       
        add: function(value) {
            budget += value;
            return budget;
        }
    }
})()

var UIController = (function() {
    // Something
    
    return {
        show() {
            console.log('showing');
        }
    }
})

var controller = (function(budgetCtrl, UICtrl) {    
    
    var ele = document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('event')
    })
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            console.log(event)
        }
    })
    
    
})(budgetController, UIController)