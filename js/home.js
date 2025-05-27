let currentBalance =document.getElementById("currentBalance")
let inputAmount =document.getElementById("inputAmount")
let enterPin = document.getElementById("enterPin")
let addMoneyBtn =document.getElementById("addMoneyBtn")
let cashOutBtn =document.getElementById("cashOutBtn")

// ------------AddMoneyProcessingStart-----------
addMoneyBtn.addEventListener("click", function(){
    if ( enterPin.value == 2025){
        let earlier = parseFloat(currentBalance.innerText);
        let after = parseFloat (inputAmount.value);
        let netGain = earlier + after;
        
        currentBalance.innerText = netGain;
    }
    
    else{
        alert("Invalid pin")
    }
})
// ------------AddMoneyProcessingEnd-----------


// ---------------CashOutProcessingStart------------
 

cashOutBtn.addEventListener("click", function(){
    if ( enterPin.value == 2025){
     let earlier = parseFloat(currentBalance.innerText);
        let after = parseFloat (inputAmount.value);
        let netLoss = earlier - after;

        currentBalance.innerText = netLoss

    }

    else{
          alert("Invalid pin")
    }

    
    
 
    
    // ---------------prob----
    if (currentBalance.innerText >= inputAmount.value){
        
    alert("insufficient Amount")
           }
    
    // ---------------prob----

    
})




// ---------------CashOutProcessingEnd------------