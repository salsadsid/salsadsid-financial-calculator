// Error Meassge Initial Values

const errorMessage = document.getElementById('error-message');
errorMessage.style.display = "none";

// function for get input values

function getInputValue(field) {
    const inputFieldText = document.getElementById(field);
    const inputFieldAmount = parseFloat(inputFieldText.value);
    return inputFieldAmount;

}
// function for display error message

function displayErrorMessage(type) {
    const errorMessage = document.getElementById('error-message');
    if (type == 'negetive') {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please Insert Positive Values"
    }
    else if (type == 'omit') {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Don't Omit Any Fields"
    }
    else if (type == 'expensesGreater') {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Expenses Should Be Less Than Income"
    }
    else if (type == 'savingGreater') {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Saving Should Be Less Than Balance"
    }
    else if (type == 'none') {
        errorMessage.style.display = "none";
    }
}

// Click Handler for Calculate Button

document.getElementById('total-calculation').addEventListener('click', function () {

    const getIncomeAmount = getInputValue('income-input');
    const getFoodAmount = getInputValue('food-input');
    const getRentAmount = getInputValue('rent-input');
    const getClothesAmount = getInputValue('clothes-input');

    if (getIncomeAmount < 0 || getFoodAmount < 0 || getRentAmount < 0 || getClothesAmount < 0) {
        displayErrorMessage('negetive');
    }
    else if (isNaN(getIncomeAmount) == true || isNaN(getFoodAmount) == true || isNaN(getRentAmount) == true || isNaN(getClothesAmount) == true) {
        displayErrorMessage('omit')
    }
    else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpensesAmount = getFoodAmount + getRentAmount + getClothesAmount;
        if (totalExpensesAmount > getIncomeAmount) {
            displayErrorMessage('expensesGreater');
        }
        else {
            totalExpenses.innerText = totalExpensesAmount;
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = getIncomeAmount - totalExpenses.innerText
        }
    }
})

// Click Handler for Save Button

document.getElementById('save-calculation').addEventListener('click', function () {
    const getIncomeAmount = getInputValue('income-input');
    const savePercentage = getInputValue('save-input');
    const savingAmountText = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceAmount = parseFloat(remainingBalance.innerText);
    const remainingBalanceAfterSaving = document.getElementById('remaining-balance-after-saving');
    const savingAmount = (getIncomeAmount * savePercentage) / 100;

    if (savePercentage < 0) {
        displayErrorMessage('negetive');
    }
    else if (isNaN(savePercentage) == true) {
        displayErrorMessage('omit');
    }

    else if (savingAmount > remainingBalanceAmount) {
        displayErrorMessage('savingGreater');
    }
    else {
        savingAmountText.innerText = savingAmount;
        remainingBalanceAfterSaving.innerText = remainingBalance.innerText - savingAmountText.innerText;
    }
})

// after click error message values

document.getElementById('total-calculation').addEventListener('blur', function () {
    displayErrorMessage('none');
})
document.getElementById('save-calculation').addEventListener('blur', function () {
    displayErrorMessage('none');
})