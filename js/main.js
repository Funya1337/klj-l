'use strict'
const arrSpread = [null, null, null];
let arr = [...arrSpread, null, null, null, null, null, null];
let checker = true;
let arrCombat = [
	[0, 1, 2],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[3, 4, 5],
	[6, 7 ,8],
	[0, 4, 8],
	[6, 4, 2]
];

function checkWin(array, player) {

	let resultTotal = false;

	array.forEach(function(x) {
		let result = true;
		var map1 = x.map(function(element) {
			if (arr[element] !== player) {
				result = false;
			}
		});
		if (result === true) {
			resultTotal = true;
		}
	});
	return resultTotal;
}

function check0() {
	let rs = false;
	if (checkWin(arrCombat, 0) === true) {
		setTimeout(consoleFunc, 0);
		rs = true;
	}
	return rs;
}

function consoleFunc() {
	let templ = 'win'
	document.getElementById("text1").innerHTML = `0 ${ templ }`;
}

function check1() {
	let rs1 = false;
	let templ1 = 'win';
	if (checkWin(arrCombat, 1) === true) {
		setTimeout(function(){ document.getElementById("text1").innerHTML = `x ${ templ1 }` }, 0)
		rs1 = true;
	}
	return rs1;
}

function f() {
	return ['no'];
}
const [a] = f();

function noWin() {
	let templ2 = 'win';
	let checker = true;
	Object.keys(arr).forEach(function(element) {
		if (arr[element] == null) {
			checker = false;
		}
	})
	if (checker === true && !check0() && !check1()) {
		document.getElementById("text1").innerHTML = `${ a } ${ templ2 }`;
	}
	return checker;
}

function freezTime() {
	if (check1() === true) {
		document.getElementById("stop").style.display="block";
	}
	if (check0() === true) {
		document.getElementById("stop").style.display="block";
	}
	if (noWin() === true) {
		document.getElementById("stop").style.display="block";
	}
}

function myFuc(id, x) {
	if (arr[id] === null) {
	checker = !checker
	if (checker === true) {
		document.getElementById(x).className=`cross box`;
		arr[id] = 1;
	} else {
		document.getElementById(x).className=`circle box`;
		arr[id] = 0;
		}
	}
	checkWin(arrCombat, 0);
	check0();
	check1();
	noWin();
	freezTime();
	f();
}
