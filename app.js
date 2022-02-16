const errorMessage = document.getElementById('error-message');
errorMessage.style.display = "none";
function getInputValue(field) {
    const inputFieldText = document.getElementById(field);
    const inputFieldAmount = parseFloat(inputFieldText.value);
    return inputFieldAmount;

}
// function

document.getElementById('total-calculation').addEventListener('click', function () {

    const getIncomeAmount = getInputValue('income-input');
    const getFoodAmount = getInputValue('food-input');
    const getRentAmount = getInputValue('rent-input');
    const getClothesAmount = getInputValue('clothes-input');
    const errorMessage = document.getElementById('error-message');

    if (getIncomeAmount < 0 || getFoodAmount < 0 || getRentAmount < 0 || getClothesAmount < 0) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please Insert Positive Values"
    }
    else if (isNaN(getIncomeAmount) == true || isNaN(getFoodAmount) == true || isNaN(getRentAmount) == true || isNaN(getClothesAmount) == true) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Don't Omit Any Fields"
    }
    else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpensesAmount = getFoodAmount + getRentAmount + getClothesAmount;
        if (totalExpensesAmount > getIncomeAmount) {
            errorMessage.style.display = "block";
            errorMessage.innerText = "Expenses Should be less than Income"
        }
        else {
            totalExpenses.innerText = totalExpensesAmount;
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = getIncomeAmount - totalExpenses.innerText
        }
    }
})

document.getElementById('save-calculation').addEventListener('click', function () {
    const getIncomeAmount = getInputValue('income-input');
    const savePercentage = getInputValue('save-input');
    const savingAmountText = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceAmount = parseFloat(remainingBalance.innerText);
    console.log(remainingBalanceAmount);
    const remainingBalanceAfterSaving = document.getElementById('remaining-balance-after-saving');
    const errorMessage = document.getElementById('error-message');
    const savingAmount = (getIncomeAmount * savePercentage) / 100;

    if (savePercentage < 0) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please Insert Positive Values"
    }
    else if (isNaN(savePercentage) == true) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Don't Omit Any Fields"
    }

    else if (savingAmount >= remainingBalanceAmount) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Saving Should be less than Balance"
    }
    else {
        savingAmountText.innerText = savingAmount;
        remainingBalanceAfterSaving.innerText = remainingBalance.innerText - savingAmountText.innerText;
    }
})

document.getElementById('total-calculation').addEventListener('blur', function () {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = "none";
})