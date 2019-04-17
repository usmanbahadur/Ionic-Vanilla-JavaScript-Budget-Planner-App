const reasonInput = document.querySelector('#input-reason');
const AmountInput = document.querySelector('#input-amount');
const AmountButton = document.querySelector('#btn-confirmed');
const CancelButton = document.querySelector('#btn-cancel');
const ExpensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const AlertController = document.querySelector('ion-alert-controller')

let totalExpenses = 0;

const clear = () => {

reasonInput.value = '';
AmountInput.value = '';
};
AmountButton.addEventListener('click', () => { 
const enteredReason = reasonInput.value;
const enteredAmount = AmountInput.value;
if (

enteredReason.trim().length <= 0 ||
enteredAmount <= 0 ||
enteredAmount.trim().length <=0 
)
{

    AlertController.create({ 
     message: 'please enter valid reason and amount!', 
     header: 'Invalid Inputs', 
     buttons: ['Okay']
    
    }).then(alertElement => {alertElement.present()
    });
return;

}
const newItem = document.createElement('ion-item');
newItem.textContent = enteredReason + ': £' + enteredAmount;
ExpensesList.appendChild(newItem);

totalExpenses += +enteredAmount;
totalExpensesOutput.textContent = totalExpenses;
clear();

});
CancelButton.addEventListener('click', clear);




