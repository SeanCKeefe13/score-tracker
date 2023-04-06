const select = document.querySelector('#scoreSelector');

const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#reset');


let p1Score = document.querySelector('#p1Score');
let p1ScoreValue = 0;
let p2Score = document.querySelector('#p2Score');
let p2ScoreValue = 0;
let winningScore = '';
let isGameOver = false;

function reset(){
    p2ScoreValue = 0;
    p1ScoreValue = 0;
    p1Score.textContent = p1ScoreValue;
    p2Score.textContent = p2ScoreValue;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p2Btn.disabled = false;
    p1Btn.disabled = false;
    isGameOver = false;
}



for (let i = 1; i <= 100; i++){
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerText = i;
    select.append(opt);
}

select.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
    reset();
})


p1Btn.addEventListener('click', function(e){
    if(!isGameOver){
        p1ScoreValue += 1;
        if(p1ScoreValue === winningScore){
            p1Score.classList.add('has-text-success')
            p2Score.classList.add('has-text-danger')
            isGameOver = true;
            p2Btn.disabled = true;
            p1Btn.disabled = true;
        }
        p1Score.textContent = p1ScoreValue;
    }
})

p2Btn.addEventListener('click', function(e){
    if(!isGameOver){ 
        p2ScoreValue += 1;
        if(p2ScoreValue === winningScore){
            p2Score.classList.add('has-text-success')
            p1Score.classList.add('has-text-danger')
            isGameOver = true;
            p2Btn.disabled = true;
            p1Btn.disabled = true;
        }
        p2Score.textContent = p2ScoreValue;
    }
})

resetBtn.addEventListener('click', reset);


