// CONSTANTS
const buttons = document.querySelectorAll('.btn');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const btnStart = document.querySelector('.btn__start');
const change = document.querySelector('#change');


// CONDITIONAL


// EVENTS 
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnClass = btn.classList;
        if(btnClass.contains('btn__start')) {
            start();
        } else if(btnClass.contains('btn__reset')) {
            min.textContent = '25';
            sec.textContent = '00';
            stop();
        } else if (btnClass.contains('break')) {
            min.textContent = '10';
            sec.textContent = '00';
        }
    })
})



let minutes = 25;
let seconds = 60;
let int;

// FUNCTIONS
start = () => {
    seconds--;
    sec.textContent = seconds;

    if(seconds < 10) {
        sec.textContent = '0' + seconds;
    }

    if(minutes < 10) {
        min.textContent = '0' + minutes;
    }

    if(seconds == 0 && minutes == 00) {
        stop(int);
    }

    if(seconds == 0) {
        seconds = 60;
    } else if(seconds == 59) {
        minutes--;
        min.textContent = minutes;
    }

    int = setTimeout(start, 1000);
}


stop = () => {
    clearTimeout(int);
}
