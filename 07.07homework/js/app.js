var counter= document.querySelector('#Counter')
var Plus = document.querySelector('#Plus')
var Min = document.querySelector('#Min')
var reset = document.querySelector('#reset')

var count = 1;

function Change(button){
    if(button == Plus){
        count+=1;
    }
    else if(button == Min){
        if(count > 1){
            count-=1;
        }
    }
    else if(button == reset){
        count = 1;
    }
    counter.innerHTML = count;
    
}
