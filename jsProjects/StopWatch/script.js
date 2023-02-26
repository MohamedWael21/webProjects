const hoursCont = document.getElementById('hours');
const minutesCont = document.getElementById('minutes');
const secondsCont = document.getElementById('seconds');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');


function getSeconds(){
    let seconds = parseInt(secondsCont.textContent);
    seconds += parseInt(minutesCont.textContent)*60;
    seconds += parseInt(hoursCont.textContent)*3600;
    return seconds; 
}

function updateStopWatch(seconds){
    let hours = Math.floor(seconds/3600).toString();
    hoursCont.textContent = `${hours.length < 2 ? '0' : ''}${hours}`;
    seconds %= 3600;
    let minutes = Math.floor(seconds/60).toString();
    minutesCont.textContent = `${minutes.length < 2 ? '0' : ''}${minutes}`;
    seconds %= 60;
    seconds = seconds.toString();
    secondsCont.textContent = `${seconds.length < 2 ? '0' : ''}${seconds}`;
}

let interval;

startBtn.addEventListener('click', ()=>{
    if(startBtn.classList.contains('inactive')){
        return;
    }
    interval = setInterval(()=>{
        updateStopWatch(getSeconds()+1);
    }, 1000);
    startBtn.classList.add('inactive');
    stopBtn.classList.remove('inactive');
    resetBtn.classList.remove('inactive');
});


stopBtn.addEventListener('click', ()=>{
    if(stopBtn.classList.contains('inactive')){
        return;
    }
    clearInterval(interval);
    stopBtn.classList.add('inactive');
    startBtn.classList.remove('inactive');
});


resetBtn.addEventListener('click', ()=>{
    if(resetBtn.classList.contains('inactive')){
        return;
    }
    clearInterval(interval);
    updateStopWatch(0);
    resetBtn.classList.add('inactive');
    stopBtn.classList.add('inactive');
    startBtn.classList.remove('inactive');
});

