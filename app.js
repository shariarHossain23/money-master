document.getElementById("calculate-btn").addEventListener("click",function(){
    // total money
    let incomeMoney = inputField("income");
    // expense Money
    const foodMoney = inputField("food");
    const rentMoney = inputField("rent");
    const clothMoney = inputField("cloth");
    if( incomeMoney < 0 || isNaN(incomeMoney) || incomeMoney == "" ){
        document.getElementById("error-text").innerText = "wrong input income money";
    }
    else if( foodMoney < 0||isNaN(foodMoney)  || foodMoney == ""){
        document.getElementById("error-text").innerText = "wrong input food money";
    }
    else if(rentMoney  < 0 ||isNaN(rentMoney) || rentMoney == ""){
        document.getElementById("error-text").innerText = "wrong input rent money";
    }
    else if(clothMoney < 0||isNaN(clothMoney) || clothMoney == ""){
        document.getElementById("error-text").innerText = "wrong input cloth money";
    }

    else{
        // total expense Money
    const totalExpenseMoney = parseFloat(foodMoney) + parseFloat(rentMoney) + parseFloat(clothMoney);

    // totalBalance 
    const totalBalance = parseFloat(incomeMoney) - totalExpenseMoney;
    // show user interface

    // expense
    document.getElementById("expense-money").innerText = totalExpenseMoney;
    // balance
    document.getElementById("total-balance").innerText = totalBalance;

    
    // clear display
    document.getElementById("error-text").innerText = "";
    document.getElementById("expense-money").innerText = "";
    document.getElementById("total-balance").innerText = "";
    // clear input field
    document.getElementById("income-money").value = "";
    document.getElementById('food-money').value = "";
    document.getElementById('rent-money').value = "";
    document.getElementById('cloth-money').value = "";
  
}

})


function inputField(id){

    return document.getElementById(id+"-money").value;
}



