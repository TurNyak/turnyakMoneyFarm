console.log(localStorage.getItem('top20'))
var recordMain = localStorage.getItem('top20');
var to=null;
localStorage.setItem('to',to)
function lert() {
    if(localStorage.getItem('money')>30){
        to--;
        localStorage.setItem('to',to)
    }
}
