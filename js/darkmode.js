const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.documentElement.classList.toggle('dark-mode');

	document.querySelectorAll('.inverted').forEach((result) => {
		result.classList.toggle('invert');
	})
});
