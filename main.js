console.log(localStorage.getItem('top20'))
var recordMain = localStorage.getItem('top20')

let record = 0
let money = 0
let theSalary = 1

var cashier1 = 0;
function upgrateCashier(){
	if (cashier1 == 0){
		if(localStorage.getItem('money') >= 20){
			theSalary++
			cashier1++
			money-=20
		}
	}
}

var loader1 = 0
function loader() {
	if (loader1 == 0) {
		if (localStorage.getItem('money') >= 50) {
			loader1++
			document.getElementById('loader').style =
				'height: 40px;width: 40px;animation:loaderAnimation 0.9s linear infinite;'
			money -= 50
			theSalary++
		}
	}
}

const abuttons = document.getElementsByTagName('button')

console.log(sessionStorage.getItem('to'))
function makeCounter() {
	var pol
	for (let i = 0; i < abuttons.length; i++) {
		let btn = abuttons[i]
		btn.onclick = function () {
			;(money += theSalary) & (record += theSalary)
			;(document.getElementById('money').innerHTML = 'Money :' + money) &
				(document.getElementById('record').innerHTML = 'Record :' + record)
			localStorage.setItem('money', money)
			if (money < 0) {
				money += 30
			}
			if (record > localStorage.getItem('top20')) {
				pol = record
				localStorage.setItem('top20', pol)
			}
			console.log(pol)
		}
	}
}
