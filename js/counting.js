var tiles = document.querySelectorAll('.tile');
var currentNumber = 0;
var count, no;
var milliSeconds = 0;
var seconds = 0;
var timer, x = 1, val = 1;
var arr = [];
bestVal();
document.getElementById('start').textContent = 'New Game';


function startCounting(){
    count = 1;
    no = 20;
tiles.forEach( (tile) => {
    tile.onclick = () => {
        currentNumber = Number(tile.value);
        if(currentNumber === count){
            if(currentNumber<21){
            tile.value = ++no;}
            else{
                tile.value = '';
            }
            count++;
    }
        if(currentNumber === 40){
            stop();
            storeTiming(val);
            bestVal();
            val++;
        }
    }
})
}

const numbers = [20,1,19,2,18,3,17,4,16,5,15,6,14,7,13,8,12,9,11,10];
var randomIndex;
function newGame(){
    for(var i=0; i<tiles.length; i++){
        tiles[i].value = numbers[i];
}
    startCounting();
    if(x===1){
        start();
        x = 0;
    }else{if(x==0){
        document.querySelectorAll('.timer')[0].innerHTML = '00:00';
        restart();
        x = 1;

    }}
}

function stopWatch(){
    milliSeconds++;
    if(milliSeconds/100 ===1){
        milliSeconds = 0;
        seconds ++;
    }
    if(milliSeconds<10){
        milliSeconds = '0' + milliSeconds;
    }
    document.querySelectorAll('.timer')[0].innerHTML = seconds + '.' + milliSeconds;
}

function start(){
    clearInterval(timer) ;   
    timer = setInterval(stopWatch, 10);
    document.getElementById('start').textContent = 'Reset';
}
function stop(){
    clearInterval(timer);
    document.getElementById('start').textContent = 'New Game';


}
function restart(){
    stop();
    milliSeconds = 0;
    seconds = 0;
    start();
    document.getElementById('start').textContent = 'New Game'

}
function storeTiming(val){
    localStorage.setItem(String(val), document.querySelectorAll('.timer')[0].innerHTML)
}
function bestVal(){
    for(var i=1; i<=localStorage.length; i++){
        arr.push(parseFloat(localStorage.getItem(String(i))));
    }
    bestTiming = arr[0]
    for(var i=0; i<arr.length; i++){
        if(arr[i]<bestTiming){
            bestTiming = arr[i];
        }
    document.getElementById('best').innerHTML = bestTiming;
    }
}
