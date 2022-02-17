// update balance btn

document.getElementById("calculate-btn").addEventListener("click",function(){
    const incomeMoney = inputField("income-money");
    if(incomeMoney > 0 && isNaN(incomeMoney) === false){
        getExpenseMoney()

        // clear income money invalid text
        document.getElementById("error-text-input").innerText = "";
    }
    else{
        document.getElementById("error-text-input").innerText = "invalid income money"
       
    }

    //  compare total income and total expense balance

    const expenseMoney =   document.getElementById("expense-money").innerText;
    
    if(incomeMoney > expenseMoney){
        getTotalBalance(incomeMoney)

        // clear total balance display
        document.getElementById("error-text-balance").innerText = "";
    }
    else{
        document.getElementById("error-text-balance").innerText = "You Have not enough balance";
        document.getElementById("total-balance").innerText = "0";

    }
    
})

// expense money all input

function inputField(id){
    const inputId = document.getElementById(id);
    const inputAmountText = inputId.value;
    const inputAmount = parseFloat(inputAmountText);
    //  empty string
    return inputAmount;
}


//  savings btn  update

document.getElementById("saving-btn").addEventListener("click",function(){
    const incomeMoney = inputField("income-money");
    if(incomeMoney > 0 && isNaN(incomeMoney) === false){
    
        savingMoney(incomeMoney);
        remainingBalance()
    }
    
})

//  calculate expense money
function getExpenseMoney(){
    const foodMoney = inputField("food-money");
    const rentMoney = inputField("rent-money");
    const clothMoney = inputField("cloth-money");

    //  error handling expense field

 if( foodMoney < 0||isNaN(foodMoney)  || foodMoney == ""){
        document.getElementById("expense-field-text").innerText = "Food money invalid"
    }
    else if(rentMoney  < 0 ||isNaN(rentMoney) || rentMoney == ""){
        document.getElementById("expense-field-text").innerText = "Rent money invalid"
    }
    else if(clothMoney < 0||isNaN(clothMoney) || clothMoney == ""){
        document.getElementById("expense-field-text").innerText = "cloth money invalid"
    }

    // calculation expense money

    else{
    const totalExpenseMoney = foodMoney + rentMoney + clothMoney;
    document.getElementById("expense-money").innerText = totalExpenseMoney;

    // clear display = 
    clearInputField()
    document.getElementById("expense-field-text").innerText = "";
    }
}

//  clear input value
function clearInputField(){
    document.getElementById("food-money").value = "";
    document.getElementById("rent-money").value = "";
    document.getElementById("cloth-money").value = "";
}

// calculate total balance
function getTotalBalance(balance){
    const expenseMoney =  document.getElementById("expense-money").innerText;
    const incomeMoney = parseFloat(balance);
    const totalBalance = incomeMoney - parseFloat(expenseMoney);
    document.getElementById("total-balance").innerText = totalBalance;
}

//  savings money calculation


function savingMoney(money){

    const totalBalanceText = document.getElementById("total-balance");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const incomeMoney = parseFloat(money);
    const savingMoneyInput = inputField("saving-money");
    if( savingMoneyInput < 0||isNaN(savingMoneyInput)  || savingMoneyInput == ""){

        document.getElementById("input-text").innerText = "plz use valid number"
    }
   else{
    const savingMoney = (savingMoneyInput /100) * incomeMoney;
    if(totalBalance < savingMoney){
        document.getElementById("saving-text").innerText = "you have not enough money for savings"
    }

    //  showing display and clear display
    else{
        document.getElementById("save-money").innerText = savingMoney.toFixed(2);

        document.getElementById("saving-text").innerText = "";
    }
    document.getElementById("input-text").innerText = "";
   }

 
}
//  calculation remaining balance

function remainingBalance (){
    const savingMoneyText = document.getElementById("save-money");
    const savingMoney = parseFloat(savingMoneyText.innerText);
    const totalBalanceText = document.getElementById("total-balance");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const remainingBalance = totalBalance - savingMoney;
    // display
    document.getElementById("remaining-balance").innerText = remainingBalance;
}




