/*
Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer values and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

Sample Input:
coins = [5, 7, 1, 1, 2, 3, 22]

Sample Output:
20 */

function nonConstructibleChange(coins) {
	// Write your code here.
	if (coins.length === 0) {
		return 1;
	}
	let sums = [0];
	for (let i = 0; i < coins.length; i++) {
		let sumsLength = sums.length;
		for (let j = 0; j < sumsLength; j++) {
			let change = coins[i] + sums[j];
			if (!sums.includes(change)) {
				sums.push(change);
			}
		}
	}
	sums.sort((a, b) => a - b);
	for (let i = 0; i < sums.length - 1; i++) {
		if (sums[i + 1] - sums[i] !== 1) {
			return sums[i] + 1;
		}
	}
	return sums[sums.length - 1] + 1;
}
