/*

	 Challenge 1: Student Grade Generator (Toy Problem)

	Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

   A > 79,
	 B - 60 to 79,
	 C - 59 to 49,
	 D - 40 to 49,
	 E - less 40.
*/

// APPROACH ONE: IF Statements
function gradeCalculator(score) {
	if (score < 0 || score > 100 || isNaN(score) || typeof score !== 'number') {
		return 'Invalid Score';
	} else if (score > 79) {
		return 'A';
	} else if (score >= 60) {
		return 'B';
	} else if (score >= 49) {
		return 'C';
	} else if (score >= 40) {
		return 'D';
	} else {
		return 'E';
	}
}

// console.log(gradeCalculator(68));

// APPROACH TWO: Switch Statements
function gradeCalculator2(score) {
	switch (true) {
		case score < 0 || score > 100 || isNaN(score || typeof score !== 'number'):
			return 'Invalid score';
		case score > 79:
			return 'A';
		case score >= 60:
			return 'B';
		case score >= 49:
			return 'C';
		case score >= 40:
			return 'D';
		case score < 40:
			return 'E';
		default:
			return 'F';
	}
}

// console.log(gradeCalculator2(68));

// APPROACH THREE: Using the browser's Prompt API
function gradeCalculator3() {
	const score = prompt('Enter your score (between 0 and 100):');

	console.log(score);

	if (score < 0 || score > 100 || isNaN(score)) {
		return 'Invalid Score';
	} else if (score > 79) {
		return 'A';
	} else if (score >= 60) {
		return 'B';
	} else if (score >= 49) {
		return 'C';
	} else if (score >= 40) {
		return 'D';
	} else {
		return 'E';
	}
}

// console.log(gradeCalculator3());

// APPROACH FOUR: Ternary Operator.
function gradeCalculator4(score) {
	return score < 0 || score > 100 || isNaN(score) || typeof score !== 'number'
		? 'Invalid Score'
		: score > 79
		? 'A'
		: score >= 60
		? 'B'
		: score >= 49
		? 'C'
		: score >= 40
		? 'D'
		: 'E';
}

// console.log(gradeCalculator4(68));

// APPROACH FIVE: Sepaating the validation logic into a separate function called back by the main function assigning grades.
function gradeValidator(score) {
	if (score < 0 || score > 100 || isNaN(score)) {
		return 'Enter a valid score';
	}
	return null;
}

function gradeCalculator5(score) {
	const message = gradeValidator(score);

	if (message) {
		return message;
	}

	if (score > 79) {
		return 'A';
	} else if (score >= 60) {
		return 'B';
	} else if (score >= 49) {
		return 'C';
	} else if (score >= 40) {
		return 'D';
	} else {
		return 'E';
	}
}

// console.log(gradeCalculator5(50));
// console.log(gradeValidator(500));
// console.log(Boolean(gradeValidator(500)));
