let img = document.querySelector('img');
let left = document.getElementById('left');
let right = document.getElementById('right');
let index = 0;
function show(){
    img.src = `img/${index}.jpg`;
}
function clickPlay(){
    left.onclick = function(){
        if(index <= 0){
            index = span.length - 1;
        }else{
            index --;
        }
        show();
    }
    right.onclick = function(){
        if(index == span.length){
            index = 0;
        }
        index ++;
        show();
    }
}
clickPlay();