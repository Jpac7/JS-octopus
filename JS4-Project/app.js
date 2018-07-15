var budgetController = (function() {
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }        
    }
    
    return {       
        addItem: function(type, des, val) {
            var newItem, ID;
                        
            // Create item id based on last id of the type
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            if (type === 'inc') {
                newItem = new Income(ID, des, val);
            } else if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            
            data.allItems[type].push(newItem);
            data.totals[type] += Number(val);
            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
    }
})()

var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
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
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';                
            }
            
            newHtml = html.replace('%id%', obj.id)
                        .replace('%description%', obj.description)
                        .replace('%value%', obj.value)
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
                        
        },
        clearFields: function() {
            var fields, fieldsArr;            
            //document.querySelector(DOMStrings.inputType).value = 'inc';
        
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            })
            
            fieldsArr[0].focus();
        }
    }
})()

var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        input = UICtrl.getInput();
        
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        UICtrl.addListItem(newItem, input.type);
        
        UICtrl.clearFields();
        
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