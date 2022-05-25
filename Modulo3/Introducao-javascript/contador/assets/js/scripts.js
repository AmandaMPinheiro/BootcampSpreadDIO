var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumberWrapper.innerHTML >= 0){
        currentNumberWrapper.style.color = '#000000';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumberWrapper.innerHTML < 0){
        currentNumberWrapper.style.color = '#ff0000';
    }
}