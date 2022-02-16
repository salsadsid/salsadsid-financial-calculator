function getInputValue(field) {
    const inputFieldText = document.getElementById(field)
    const inputFieldAmount = parseFloat(inputFieldText.value);
    return inputFieldAmount
}
// function

document.getElementById('total-calculation').addEventListener('click', function () {
    const getIncomeAmount = getInputValue('income-input');
    const getFoodAmount = getInputValue('food-input');
    const getRentAmount = getInputValue('rent-input');
    const getClothesAmount = getInputValue('clothes-input');

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = getFoodAmount + getRentAmount + getClothesAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = getIncomeAmount - totalExpenses.innerText
})

document.getElementById('save-calculation').addEventListener('click', function () {
    const getIncomeAmount = getInputValue('income-input');
    const savePercentage = getInputValue('save-input');
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');

    const remainingBalanceAfterSaving = document.getElementById('remaining-balance-after-saving');

    savingAmount.innerText = getIncomeAmount / savePercentage;

    remainingBalanceAfterSaving.innerText = remainingBalance.innerText - savingAmount.innerText
})