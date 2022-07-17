/*
Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also in ascending order.

Sample Input:
array = [1, 2, 3,5, 6, 8, 9]

Sample Output:
[1, 4, 9, 25,36,64, 81] */

function sortedSquaredArray(array) {
	// Write your code here.
	// turn all the negative numbers to positive O(n)
	// merge sort array (O(n logn))
	// Square everything (O(n))
	let squaredArr = array.map((num) => num * num);
	return squaredArr.sort((a, b) => a - b);
}
