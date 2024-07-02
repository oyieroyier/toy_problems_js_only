/*
 	Challenge 3: Net Salary Calculator (Toy Problem)

 	Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

*/

/*
	NOTE:
	This code uses hypothetical values for NHIF, NSSF and Tax deductions.
	It is intended to demonstrate the logic behind callbacks, control flow etc and not accurate tax computation.
	Replace these with actual values.

	For accuracy, also remember to factor in Personal Relief, Housing Levy, SHIF and other benefits.
*/

function calculateGrossSalary(basicPay, benefits) {
	const grossSalary = basicPay + benefits;
	console.log('Your gross salary is: ', grossSalary);

	function calculateGrossSalaryMinusNSSF() {
		let grossSalaryMinusNSSF;

		if (grossSalary > 40000) {
			grossSalaryMinusNSSF = grossSalary - 15000;
		} else if (grossSalary > 30000) {
			grossSalaryMinusNSSF = grossSalary - 3000;
		} else if (grossSalary > 20000) {
			grossSalaryMinusNSSF = grossSalary - 2000;
		} else if (grossSalary > 10000) {
			grossSalaryMinusNSSF = grossSalary - 1000;
		}

		console.log('Your salary minus NSSF is: ', grossSalaryMinusNSSF);

		function calculateSalaryMinusNHIF() {
			let salaryMinusNHIF;

			if (grossSalaryMinusNSSF > 40000) {
				salaryMinusNHIF = grossSalaryMinusNSSF - 15000;
			} else if (grossSalaryMinusNSSF > 30000) {
				salaryMinusNHIF = grossSalaryMinusNSSF - 3000;
			} else if (grossSalaryMinusNSSF > 20000) {
				salaryMinusNHIF = grossSalaryMinusNSSF - 2000;
			} else if (grossSalaryMinusNSSF > 10000) {
				salaryMinusNHIF = grossSalary - 1000;
			}
			console.log(`Your salary minus NHIF is:`, salaryMinusNHIF);

			function calculateTax() {
				let salaryMinusTax;

				if (salaryMinusNHIF > 40000) {
					salaryMinusTax = salaryMinusNHIF - 15000;
				} else if (salaryMinusNHIF > 30000) {
					salaryMinusTax = salaryMinusNHIF - 3000;
				} else if (salaryMinusNHIF > 20000) {
					salaryMinusTax = salaryMinusNHIF - 2000;
				} else if (salaryMinusNHIF > 10000) {
					salaryMinusTax = salaryMinusNHIF - 1000;
				}
				console.log(
					'From the nested callbacks function, your net salary is: ',
					salaryMinusTax
				);
				return salaryMinusTax;
			}
			calculateTax();
		}
		calculateSalaryMinusNHIF();
	}

	calculateGrossSalaryMinusNSSF();
}

// calculateGrossSalary(90000, 10000);

// A different approach to callbacks where the functions are declared outside the one main one (what I was missing from the other demonstration) but brought together by one final function:

function calculateGrossSalary2(basicPay, benefits) {
	const grossSalary = basicPay + benefits;
	console.log('Your gross salary is:', grossSalary);
	return grossSalary;
}

function calculateNSSF(amount) {
	let salaryAfterNSSF;

	if (amount > 40000) {
		salaryAfterNSSF = amount - 15000;
	} else if (amount > 30000) {
		salaryAfterNSSF = amount - 3000;
	} else if (amount > 20000) {
		salaryAfterNSSF = amount - 2000;
	} else if (amount > 10000) {
		salaryAfterNSSF = amount - 1000;
	}

	console.log(`Your salary minus NSSF is:`, salaryAfterNSSF);
	return salaryAfterNSSF;
}
function calculateNHIF(amount) {
	let salaryAfterNHIF;

	if (amount > 40000) {
		salaryAfterNHIF = amount - 15000;
	} else if (amount > 30000) {
		salaryAfterNHIF = amount - 3000;
	} else if (amount > 20000) {
		salaryAfterNHIF = amount - 2000;
	} else if (amount > 10000) {
		salaryAfterNHIF = amount - 1000;
	}

	console.log(`Your salary minus NHIF is:`, salaryAfterNHIF);
	return salaryAfterNHIF;
}

function calculateTax(amount) {
	let salaryMinusTax;

	if (amount > 40000) {
		salaryMinusTax = amount - 15000;
	} else if (amount > 30000) {
		salaryMinusTax = amount - 3000;
	} else if (amount > 20000) {
		salaryMinusTax = amount - 2000;
	} else if (amount > 10000) {
		salaryMinusTax = amount - 1000;
	}
	console.log(
		'From the separated callbacks function, your net salary is: ',
		salaryMinusTax
	);
	return salaryMinusTax;
}

function calculateNetSalary(basicPay, benefits) {
	let grossSalary = calculateGrossSalary2(basicPay, benefits);

	let salaryAfterNSSF = calculateNSSF(grossSalary);

	let salaryAfterNHIF = calculateNHIF(salaryAfterNSSF);

	let netSalary = calculateTax(salaryAfterNHIF);

	return netSalary;
}

// console.log(calculateNetSalary(90000, 10000));
