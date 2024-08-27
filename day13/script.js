// Initialize counter value
let counter = 0;

// Get elements from the DOM
const counterValueElement = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to update the displayed counter value
function updateCounter() {
    counterValueElement.textContent = counter;
}

// Increment button click event
incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// Decrement button click event
decrementBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// Reset button click event
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});