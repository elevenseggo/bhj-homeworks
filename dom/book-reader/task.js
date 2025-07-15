document.addEventListener('DOMContentLoaded', function() {
	const book = document.getElementById('book');
	const fontsize = document.querySelectorAll('.book__control_font-size .font-size');

	fontsize.forEach(control => {
		control.addEventListener('click', function(e) {
			e.preventDefault();
			fontsize.forEach(fs => {
				fs.classList.remove('font-size_active');
			});
			this.classList.add('font-size_active');
			const size = this.dataset.size;
			book.classList.remove('book_fs-small', 'book_fs-big');

			if (size === 'small') {
				book.classList.add('book_fs-small');
			} else if (size === 'big') {
				book.classList.add('book_fs-big');
			}
		});
	});
});