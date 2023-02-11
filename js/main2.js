/*
	By MH11
*/

const input = document.getElementById("myInput");
const sums = document.getElementById("numberTeam");
const output = document.getElementById("output");
const buttons = document.getElementById("buttons3");
const reset = document.getElementById("reset3");
const container = document.querySelector(".container3");
const answer = document.querySelector(".hidden");
const teams = document.querySelector(".teams3");

function getInputValue() {
	const values = input.value;
	const total = sums.value;
	let person = values.replace(/^\s+|\s+$/gm, "").split("\n");

	let random = person.sort(() => Math.random() - 0.5);
	console.log(random);

	function chunk(array, size) {
		if (array.length <= size) {
			return [array];
		}
		return [array.slice(0, size), ...chunk(array.slice(size), size)];
	}

	var team = chunk(random, total);

	for (let i = 0; i < team.length; i++) {
		output.innerHTML += `<p>تیم ${i + 1}: ${team[i]}</p>`;
	}
}

buttons.addEventListener("click", () => {
	container.classList.toggle("hidden");
	reset.classList.toggle("hidden");
	answer.classList.toggle("hidden");
	teams.classList.toggle("visible");
});

reset.addEventListener("click", () => {
	location.reload();
});