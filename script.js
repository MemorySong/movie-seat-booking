const container = document.querySelector('.container');
const movieSelected = document.querySelector('#movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const nums = document.querySelector('.num');
const total = document.querySelector('.total');

movieSelected.addEventListener('change', (e)=>{
    // console.log(e.target.selectedSeatsNums);
    selectSeatsUpdate();
});

container.addEventListener('click', (e)=>{
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');
        selectSeatsUpdate();
    }
});

function selectSeatsUpdate() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    nums.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * movieSelected.value;
    const selectedSeatsNums = [...selectedSeats].map((seat)=>{
        return [...seats].indexOf(seat);
    });
    // console.log('Number of seats', selectedSeatsNums)
}