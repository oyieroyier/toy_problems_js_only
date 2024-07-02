/* 
	Challenge 2: Speed Detector (Toy Problem)

	 Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

*/

// NOTES:
// Remember to ensure your code handles negative speeds or non numeric inputs. A user should not be able to say their speed was "fast" or "slow" or -500km/h

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	const maxPoints = 12;

	if (typeof speed !== 'number' || isNaN(speed) || speed < 0) {
		console.log('Invalid speed');
		return;
	}

	if (speed < speedLimit) {
		console.log('Ok');
	} else {
		// Calculate the number of demerit points
		let points = (speed - speedLimit) / kmPerPoint;
		// Round down to the nearest whole number
		points = points - (points % 1);

		if (points > maxPoints) {
			console.log('License suspended');
		} else {
			console.log(`Points: ${points}`);
		}
	}
}

// Example usage:
// checkSpeed(80);
// checkSpeed(65);
// checkSpeed(135);
// checkSpeed(-10);
// checkSpeed('fast');
