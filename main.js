console.log(localStorage.getItem('top20'))
var recordMain = localStorage.getItem('top20');
var to=null;
localStorage.setItem('to',to)
function img1() {
    if(localStorage.getItem('money')>=30){
        to--;
        localStorage.setItem('to',to)
        var img2 = document.querySelector("img.img");
        img2.className = "img2";
    }
}
