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
    
    var ctrlAddItem = function() {
        var input = UICtrl.getInput();
    }
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });        
    }
    
    return {
        init: function() {
            console.log('Application has started!');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController)


controller.init();