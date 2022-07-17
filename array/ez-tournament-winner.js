/* There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition, there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

Sample Input:
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
results = [0, 0, 1]


Sample Output:
"Python"
*/

function tournamentWinner(competitions, results) {
	// Write your code here.
	let scoreBoard = {};
	for (let i = 0; i < results.length; i++) {
		//result of match is results[i]
		//if 1, then hometeam (competitions[i][0]) wins
		//if 0, then awayteam (competitions[i][1]) wins
		// add points to the scoreboard
		const teams = Object.keys(scoreBoard);
		if (results[i] === 1) {
			if (teams.includes(competitions[i][0])) {
				scoreBoard[competitions[i][0]] += 3;
			} else {
				scoreBoard[competitions[i][0]] = 3;
			}
		} else {
			if (teams.includes(competitions[i][1])) {
				scoreBoard[competitions[i][1]] += 3;
			} else {
				scoreBoard[competitions[i][1]] = 3;
			}
		}
	}

	const highestScore = Math.max(...Object.values(scoreBoard));
	return Object.keys(scoreBoard).find(
		(team) => scoreBoard[team] === highestScore
	);
}
