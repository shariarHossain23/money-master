document.getElementById("calculate-btn").addEventListener("click",function(){
    // total money
    const incomeMoney = inputField("income");

    // expense Money
    const foodMoney = inputField("food");
    const rentMoney = inputField("rent");
    const clothMoney = inputField("cloth");

    // total expense Money
    const totalExpenseMoney = parseFloat(foodMoney) + parseFloat(rentMoney) + parseFloat(clothMoney);

    // totalBalance 
    const totalBalance = parseFloat(incomeMoney) - totalExpenseMoney;
    console.log(totalBalance)

    // show user interface

    // expense
    document.getElementById("expense-money").innerText = totalExpenseMoney;
    // balance
    document.getElementById("total-balance").innerText = totalBalance;
})

function inputField(id){
     if(isNaN(id)){
         alert("number")
     }
     else{
        return document.getElementById(id+"-money").value;
     }
}