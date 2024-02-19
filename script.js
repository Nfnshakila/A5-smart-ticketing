function buy(){
    const buyTicket = document.getElementById('get-ticket').scrollIntoView({
        behavior:'smooth'
    })
}


const seats = document.getElementsByClassName('kbd');
// console.log(seats) 
let count = 0;
let perSeatPrice = 550;
let seatsLeft = 40;
let totalCost = 0;

for (const seat of seats){
    seat.addEventListener('click', function(event){
        document.getElementById('per-seat-price').innerHTML +=`<p class="flex justify-between">
                                                               <span>${event.target.id} </span>
                                                               <span>Economy</span>
                                                               <span>550</span>
                                                               </p>`
        count = count + 1;
        // if(count > 4){
        //     addEventListener('click')
            
        // }
        
        document.getElementById('selected').innerText = count;
        seatsLeft = seatsLeft - 1;
        document.getElementById('seat-left').innerText = seatsLeft;
        totalCost = count * perSeatPrice
        document.getElementById('total-cost').innerText = totalCost;

        document.getElementById('grand-total').innerText = totalCost;
    })
}
  
function backgroundAdd(){
    const element = document.getElementById('seat-name')
    element.classList.add('bg-green-400')
    }

function applyCoupon(){
    const userInputCoupon = document.getElementById('coupon-field').value;
if(userInputCoupon.toLowerCase() == 'NEW15'){
    if(totalCost > 0){
        let discountPrice =totalCost * 0.15
        let grandTotal = totalCost - discountPrice;
        document.getElementById('grand-total').innerText =grandTotal;
    }else{
        alert('select at list one seat')
    }
}

if (userInputCoupon.toLowerCase() == "Couple 20"){
    if (totalCost > 0){
        let discountPrice = totalCost * 0.20
        let grandTotal = totalCost - discountPrice;
        document.getElementById('grand-total').innerText = grandTotal;
    }else{ 
        alert('select at list one seat')
    }

}
}






function success(){
    const totalBody = document.getElementById('total-body')
    totalBody.classList.add('hidden')
    // const getTicket = document.getElementById('success')
    // console.log(getTicket)
    const ticket = document.getElementById('booking-done')
    ticket.classList.remove('hidden');

}

function backToMain(){
    const mainPage = document.getElementById('booking-done')
    mainPage.classList.add('hidden')
    const totalBody = document.getElementById('total-body')
    totalBody.classList.remove('hidden')

}