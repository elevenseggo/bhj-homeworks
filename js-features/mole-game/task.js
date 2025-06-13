let dead = 0;
let lost = 0;

for (let i = 1; i < 9; i++) {
	let hole = document.getElementById(`hole${i}`);
	hole.onclick = function() {
		if (hole.classList.contains('hole_has-mole')) {
			dead++;
			if (dead === 10) {
				alert("Вы победили!");
				dead = 0;
				lost = 0;
			}
		} else {
			lost++;
			if (lost === 5) {
				alert("Вы проиграли!");
				dead = 0;
				lost = 0;
			}
		}
		document.getElementById('dead').textContent = dead;
		document.getElementById('lost').textContent = lost;
	}
}