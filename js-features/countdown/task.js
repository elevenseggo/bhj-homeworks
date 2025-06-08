let starttimer = document.getElementById('timer').textContent;
let timer;

function countdown() {
	timer = setInterval(() => {
		if (starttimer > 0) {
			starttimer--;
			document.getElementById('timer').textContent = starttimer;
		} else {
			clearInterval(timer);
			alert("Вы победили в конкурсе!");
		}
	}, 1000);

}
document.addEventListener('DOMContentLoaded', countdown);