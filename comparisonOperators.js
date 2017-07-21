(function(){
	// Type: Boolean, Null, Undefined, Number, String, Symbol (nuevo en ECMAScript 6), Object
	// Equal: 3 and 3, 5 and 5

	/* EQUALITY (==) returns true if the operands are equal. */
	var comparingEquality = 3;

	3 == comparingEquality // true
	"3" == comparingEquality // true
	3 == '3' // true
	4 == 3 // false

	/* NOT EQUAL returns true if the operands are not equal. */
	var comparingNotEqual = 3;

	comparingNotEqual != 4 // true
	comparingNotEqual != "3" // false

	/* STRICT EQUAL returns true if the operands are equal and of the same type. */
	var comparingStrictEqual = 3;

	3 === comparingStrictEqual; // true
	'3' === comparingStrictEqual // false 
	4 === comparingStrictEqual; // false 

	/* STRICT NOT EQUAL (!==) Returns true 
	   are of the same type but not equal, 
	   or are of different type. */

	'4' !== '3' // true
	3 !== "3" // true
	3 !== '3' // true
	'3' !== '3' // false


})();