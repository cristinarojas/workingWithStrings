// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' 
// at the end if the amount is 1 million.
function DrEvil(amount) {
	if(amount > 1000000) {
		return amount + ' Dollars ' + '(pinky)';
	} else {
		return amount + ' Dollars ';
	}
}

DrEvil(20000000);