// 1-misol

// let num1 = prompt("Birinchi sonni kiriting");
// let num2 = prompt("Ikkinchi sonni kiriting");
// let num3 = prompt("Uchinchi sonni kiriting");

// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
// 	alert(num1 + " num1");
// } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
// 	alert(num2 + " num2");
// } else {
// 	alert(num3 + " num3");
// }

// 4-misol

// let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		console.log(arr[i]);
// 	}
// }

// 2 - misol;

// let num = prompt("Uch xonali son kiriting");
// let ab = Math.trunc(num / 100);

// if (ab % 2 == 0) {
// 	console.log("juft");
// } else {
// 	console.log("toq");
// }

// 3-misol

// let max = 150;
// let ball = prompt("Yig'gan balingizni kiriting");

// console.log(Math.round((ball * 100) / max) + "%");

// 5-misol

// let arr = ["alo", "1", "ha", "3", "true", "null", "salom", "NaN"];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == "salom") {
// 		alert("salom so'zi " + (i + 1) + " taqam ostida turipti");
// 	}
// }

// 6-misol

// let arr = ["2", 3, true];

// for (let i = 0; i < arr.length; i++) {
// 	if (typeof arr[i] == "boolean") {
// 		console.log(arr[i]);
// 	}
// }

// 7-misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resultEven = 0;
// let resultOdd = 0;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		resultEven = resultEven + arr[i];
// 	} else {
// 		resultOdd = resultOdd + arr[i];
// 	}
// }
// console.log(resultEven + " juft sonlar yig'indisi");
// console.log(resultOdd + " toq sonlar yig'indisi");

// 9-misol

// let arr = [1, 2, 3, 4, 0, -5, -6, -7, -8];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] < 0) {
// 		arr[i] = Math.abs(arr[i]);
// 	}
// }
// console.log(arr);

// 2.1-misol

// let a = prompt("Ehtiyoriy son kiriting");
// let result = a.toString().length;
// console.log(result);

// 2.2-misol

// let num = prompt("Ehtiyoriy son kiriting");

// if (num % 2 == 0) {
// 	alert("Ushbu son juft");
// } else {
// 	alert("Ushbu son toq");
// }

// 2.3-misol

// let a = prompt("Ehtiyoriy son kiriting");
// let result = a.toString().length;
// console.log(result + " xonali");

// if (a % 2 == 0) {
// 	console.log("Ushbu son juft");
// } else {
// 	console.log("Ushbu son toq");
// }

// 2.4-misol

// let a = prompt("Birinchi raqamni kiriting");
// let b = prompt("Ikkinchi raqamni kiriting");
// let c = prompt("Uchinchi raqamni kiriting");

// if (a >= b && a >= c && b >= c) {
// 	alert(+a * 100 + +b * 10 + +c);
// } else if (a >= b && a >= c && c >= b) {
// 	alert(+a * 100 + +c * 10 + +b);
// } else if (b >= a && b >= c && a >= c) {
// 	alert(+b * 100 + +a * 10 + +c);
// } else if (b >= a && b >= c && c >= a) {
// 	alert(+b * 100 + +c * 10 + +a);
// } else if (c >= a && c >= b && a >= b) {
// 	alert(+c * 100 + +a * 10 + +b);
// } else {
// 	alert(+c * 100 + +b * 10 + +a);
// }

// 2.5-misol

// let num = prompt("Uch xonali son kiriting");
// let a = Math.trunc(num / 100);
// let b = Math.trunc((num % 100) / 10);
// let c = Math.trunc((num % 100) % 10);

// if (a < b && a < c) {
// 	alert(a);
// } else if (b < a && b < c) {
// 	alert(b);
// } else {
// 	alert(c);
// }

// 2.6-misol

// let num = prompt("Uch xonali sin kiriting");

// alert(Math.trunc((num % 100) / 10));

// 2.8-misol
// let birthDate = new Date(prompt("yoshingizni kiriting"));
// let todayDate = new Date();
// let ageIn = todayDate - birthDate;
// let age = Math.floor(ageIn / (1000 * 60 * 60 * 24 * 365));

// console.log(age);

// 2.9 - nisol

// let num = prompt("ehtiyoriy sonni kiriting");

// if (num % 2 == 0) {
// 	if (num > 0) {
// 		alert("Kiritlingan son juft va musbat");
// 	} else {
// 		alert("Kiritlingan son juft va manfiy");
// 	}
// } else {
// 	if (num < 0) {
// 		alert("Kiritilgan son toq va manfiy");
// 	} else {
// 		alert("Kiritilgan son toq va musbat");
// 	}
// }

// 2.10 - misol

// let num = prompt("ehtiyoriy son kiriting");

// if (num % 3 == 0 && num % 5 == 0) {
// 	alert("FizzBuzz");
// } else if (num % 5 == 0) {
// 	alert("Buzz");
// } else if (num % 3 == 0) {
// 	alert("Fizz");
// } else {
// 	alert("kiritilgan son 3 ga,  5 ga bo'linmidi");
// }
