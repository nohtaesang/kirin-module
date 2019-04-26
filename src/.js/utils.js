let _Kirin = window.Kirin;
const noConflict = (deep) => {
	let temp = window.Kirin;
	if (deep && window.Kirin === Kirin) {
		window.Kirin = _Kirin;
	}
	return temp;
};

export { noConflict };
