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
    
    var calculateTotal = function (type) {
        data.totals[type] = data.allItems[type].reduce(function (sum, current) {
            return sum + current.value;
        }, 0);        
    }
    
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentageSpent: -1
    }
    
    return {       
        addItem: function (type, des, val) {
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
            
            return newItem;
        },
        deleteItem: function (type, id) {
            var ids, index;
            
            ids = data.allItems[type].map(function (current) {
                return current.id;
            })

            index = ids.indexOf(id);

            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function () {
            calculateTotal('inc');
            calculateTotal('exp');
            
            data.budget = data.totals.inc - data.totals.exp;
            
            if (data.totals.inc > 0) {
                data.percentageSpent = Math.round((data.totals.exp / data.totals.inc) * 100);  
            } else {
                data.percentageSpent = -1;
            }
                        
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentageSpent: data.percentageSpent
            }  
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    }
    
    return {
        getDOMStrings: function () {
            return DOMStrings;  
        },
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';                
            }
            
            newHtml = html.replace('%id%', obj.id)
                        .replace('%description%', obj.description)
                        .replace('%value%', obj.value)
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
                        
        },
        deleteListItem: function (selectorId) {
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
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
        },
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;

            if (obj.percentageSpent > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentageSpent + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        }
    }
})()

var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        input = UICtrl.getInput();
        
        if (input.description !== '' && !isNaN(input.value) && input.value !== 0) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            UICtrl.addListItem(newItem, input.type);

            UICtrl.clearFields();
            
            updateBudget();
        }                        
    }
    
    var ctrlDeleteItem = function(event) {
        var itemId, splitId, type, ID;
        
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemId) {
            splitId = itemId.split('-');
            
            type = splitId[0];
            ID = parseInt(splitId[1]);
        }

        budgetCtrl.deleteItem(type, ID);

        UICtrl.deleteListItem(itemId);

        updateBudget();
    }
    
    var updateBudget = function () {
        
        budgetCtrl.calculateBudget();
        
        var budget = budgetCtrl.getBudget();
        
        UICtrl.displayBudget(budget);       
    }
    
    return {
        init: function() {
            console.log('Application has started!');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentageSpent: 0
            });
            setupEventListeners();
        }
    }
    
})(budgetController, UIController)


controller.init();