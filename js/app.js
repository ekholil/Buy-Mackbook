// variables 

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost')
let totalPrice = document.getElementById('total-price');
let totalPriceValue = parseFloat(totalPrice.innerText);
let total = document.getElementById('total')
const promoInput = document.getElementById('promo-input');
const promoApply = document.getElementById('promo-apply');

// update costs 
function updateCost(id){
    if(id == '8gb'){
        memoryCost.innerText = 0;
    } else if(id == '16gb'){
        memoryCost.innerText = 180;
    } else if(id == '256gb'){
        storageCost.innerText = 0;
    } else if(id == '512gb'){
        storageCost.innerText = 100;
    } else if(id == '1tb'){
        storageCost.innerText = 180;
    } else if(id == 'free-delivery'){
        deliveryCost.innerText = 0;
    } else if(id == 'delivery20'){
        deliveryCost.innerText = 20;
    }
    calcutaleTotal()
    promo()
}
//get cost 
function getCost(item){
    const itemCost = document.getElementById(item+ '-cost');
    const costValue = parseFloat(itemCost.innerText);
    return costValue;
}
// totalCost 
function calcutaleTotal(){
    let memory = getCost('memory')
    let storage = getCost('storage')
    let delivery = getCost('delivery')
    let subtotal = totalPriceValue + memory + storage + delivery;
    totalPrice.innerText = subtotal;
    total.innerText = subtotal;
    return subtotal;
    
}

// memory cost
document.getElementById('8gb').addEventListener('click', function(){
   updateCost('8gb')  
})
document.getElementById('16gb').addEventListener('click', function(){
 updateCost('16gb')
    //memoryCost.innerText = 180;    
})
// storage cost
document.getElementById('256gb').addEventListener('click', function(){
    updateCost('256gb')
})
document.getElementById('512gb').addEventListener('click', function(){
    updateCost('512gb')    
})
document.getElementById('1tb').addEventListener('click', function(){
updateCost('1tb')
})
// delivery cost 
document.getElementById('free-delivery').addEventListener('click', function(){
    updateCost('free-delivery')
})
document.getElementById('delivery20').addEventListener('click', function(){
updateCost('delivery20')
   
})


// promo code 

    function promo(){
        const subTotal = calcutaleTotal()
        if(promoInput.value == 'stevekaku'){
            total.innerText = subTotal * .80
            promoInput.value = '';
            promoApply.setAttribute('disabled', true)
        } else{
            total.innerText = subTotal;
        }
    }

promoApply.addEventListener('click', function(){
    promo()
})





