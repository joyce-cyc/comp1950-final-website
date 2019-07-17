// Toggle Menu

(function(d) {
	// d = document

	const $body = d.querySelector('body');
	const $btn = d.querySelector('.mobile-nav');

	$btn.addEventListener('click', function() {
		$body.classList.toggle('show');
	});
})(document);