    
window.onload = function() {
    let units = Number(prompt("Please enter the electricity units"));
    let bill = 0;

    if (units <= 50){
        bill = units * 0.50;
    }
    else if (units <= 150) {
        bill = 25 + ((units - 50) * 0.75);
    } 
    else if (units <= 250) {
        bill = 100 + ((units - 150) * 1.20);
    }
    else {
        bill = 220 + ((units - 250) * 1.50);
    }

    let surcharge = bill * 0.20;
    let totalBill = bill + surcharge;

    document.getElementById('units').innerHTML = `The Bill: ${units.toFixed(2)} USD`;
    document.getElementById('total').innerHTML = `Total: ${totalBill.toFixed(2)} USD`;
}
