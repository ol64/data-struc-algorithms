/*
Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer represenging a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

Sample Input:
array = [12, 3, 1, 2, -6, 5, -8, 6]

Sample Output:
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] */

function threeNumberSum(array, targetSum) {
	// Write your code here.
	function twoNumberSum(arr, target) {
		let pairSum = {};
		let possibleSums = [];
		for (const num of arr) {
			let diff = target - num;
			if (!Object.keys(pairSum).includes(String(diff))) {
				pairSum[num] = diff;
			} else {
				possibleSums.unshift(num > diff ? [diff, num] : [num, diff]);
			}
		}
		return possibleSums;
	}

	let threeSums = [];
	array.sort((a, b) => a - b);
	for (let i = 0; i < array.length - 1; i++) {
		let target = targetSum - array[i];
		let searchArr = array.slice(i + 1, array.length);
		let pairs = twoNumberSum(searchArr, target);
		for (let j = 0; j < pairs.length; j++) {
			pairs[j].unshift(array[i]);
			threeSums.push(pairs[j]);
		}
	}

	return threeSums;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
