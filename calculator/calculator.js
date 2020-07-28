function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

function multiply (arr) {
	let product = 1;
	for (i = 0; i < arr.length; i++) {
		product = product * arr[i];
	}
	return product;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a == 0 || a == 1) {
		return 1;
	}
	let fact = a;
	let res = fact;
	for (i = a; i > 1; i--) {
		res = res * (fact - 1);
		fact = fact - 1;
	}
	return res;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}