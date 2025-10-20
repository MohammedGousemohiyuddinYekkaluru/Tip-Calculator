const billAmount = document.querySelector('.billInput');
const tipPercentage = document.querySelector('.tipInput');
const totalAmount = document.querySelector('.totalAmount');
const calculateBtn = document.querySelector('#calculateBtn');


function calculateAmount(){
    let bill =Number(billAmount.value.trim());
    if(isNaN(bill)) return;
    let tip = Number(tipPercentage.value.trim());
    if(isNaN(tip)) return;

    const total = bill + (bill * tip/100); //we are adding bill to the tip amount

    totalAmount.innerHTML = "₹" + total.toFixed(2);
    billAmount.value = '';
    tipPercentage.value = '';  //emptying the inputs after calculating the total amount
}

calculateBtn.addEventListener('click', calculateAmount);
