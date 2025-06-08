const cookie = document.getElementById('cookie');
let count = 0;
let lastClickTime = 0;

cookie.onclick = function() {
	if (cookie.style.width === '200px') {
		cookie.style.width = '250px';
	} else {
		cookie.style.width = '200px';
	}
	count++;
	document.getElementById('clicker__counter').textContent = count;
	speedupdate();
}

function speedupdate() {
	let currentTime = Date.now();
	let speed = 0;
	if (lastClickTime !== 0) {
		const timeDiff = (currentTime - lastClickTime) / 1000;
		speed = (1 / timeDiff).toFixed(2);
	}
	document.getElementById('clicker__speed').textContent = speed;
	lastClickTime = currentTime;

}