let revealblocks = document.querySelectorAll(".reveal");


window.addEventListener('scroll', function() {
	revealblocks.forEach(block => {
		console.log(block.getBoundingClientRect().top);
		if (block.getBoundingClientRect().top < window.innerHeight && block.getBoundingClientRect().bottom > 0) {
			block.classList.add('reveal_active');
		} else {
			block.classList.remove('reveal_active');
		}

	});
})