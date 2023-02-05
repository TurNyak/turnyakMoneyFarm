console.log(localStorage.getItem('top20'))
var recordMain = localStorage.getItem('top20');
var to=null;
sessionStorage.setItem('to',to)
function img1() {
        if(localStorage.getItem('money')>=30){
            to++;
            sessionStorage.setItem('to',to)
            var img2 = document.querySelector("img.img");
            img2.className = "img2";
            
        }
}
function img2() {
        if(localStorage.getItem('money')>=30){
            to++;
            sessionStorage.setItem('to',to)
            var img2 = document.querySelector("img.img");
            img2.className = "img2";
            
        }
}
