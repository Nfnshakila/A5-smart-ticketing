function buy(){
    // showElementById('get-ticket')
    // console.log('play hoise')
    // const banner = document.getElementById('banner-section')
    // banner.classList.add('hidden');

    const buyTicket = document.getElementById('get-ticket').scrollIntoView({
        behavior:'smooth'
    })

    // buyTicket.classList.('hidden')
    // console.log(buyTicket)

}




// const seats = document.querySelectorAll('.kbd')
// console.log(seats)

// for (let index = 0; index < seats.length; index++){
//     const seat = seats[index];
//     // console.log(seat);
//     seat.addEventListener("click", function(event){
//         // console.log('clicked')
//         const title = document.getElementById('Id')
//         console.log(title)
//         //  title.add('bg-green-400')
//     })
// }




const seats = document.getElementsByClassName('kbd');
// console.log(seats) 
let count = 0;
let perSeatPrice = 550;
let seatsLeft = 40;
let totalCost = 0;
for (const seat of seats){
    seat.addEventListener('click', function(event){
        count = count + 1;
        
        // console.log(count)
        document.getElementById('selected').innerText = count;
        seatsLeft = seatsLeft - 1;
        document.getElementById('seat-left').innerText = seatsLeft;
        totalCost = totalCost + perSeatPrice;
        document.getElementById('total-cost').innerText = totalCost;


        const seatName = event.target.innerText;
        document.getElementById('seat-name').innerHTML = seatName;
        
        document.getElementById('per-seat-price').innerText = perSeatPrice;
        // console.log(seatName)
        

        // const p = document.createElement('p');
        // seatName.appendChild(p)


    })
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