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
function m1(){
    document.getElementById('m1').style = 'height: 40px;width: 40px;animation: moneybags 0.4s linear infinite;';
    console.log("sigbasigbibga")
}
