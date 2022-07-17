/*
Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the numbers from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

Sample Input:
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output:
[28,26]
*/

function smallestDifference(arrayOne, arrayTwo) {
	// Write your code here.
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);

	let idxOne = 0;
	let idxTwo = 0;
	let diff = Infinity;
	let pair = [];

	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let currentDiff = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
		if (currentDiff < diff) {
			diff = currentDiff;
			pair = [arrayOne[idxOne], arrayTwo[idxTwo]];
			if (diff === 0) {
				return [arrayOne[idxOne], arrayTwo[idxTwo]];
			}
		}

		arrayOne[idxOne] < arrayTwo[idxTwo] ? idxOne++ : idxTwo++;
	}
	return pair;
}
