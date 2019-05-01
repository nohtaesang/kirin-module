const easeFunction = (name, from, diff, time, duration) => {
	if (time >= duration) return from + diff;

	let x = time / duration;
	let y;
	switch (name) {
		case 'linear':
			y = x;
			break;
		case 'easeIn':
			y = x * x;
			break;
		case 'easeOut':
			break;
		case 'easeInOut':
			break;
	}

	return from + diff * y;
};

export default easeFunction;
