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
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    return {
        getDOMStrings: function() {
            return DOMStrings;  
        },
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value                
            }
        }
    }
})()

var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMStrings();
    
    var ctrlAddItem = function() {
        var input = UICtrl.getInput();
        console.log(input)
    }
    
    var ele = document.querySelector(DOM.inputBtn).addEventListener('click', function() {
        ctrlAddItem();
    })
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })
    
    
})(budgetController, UIController)