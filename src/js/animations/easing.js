const easeFunction = (name, from, diff, time, duration) => {
	if (duration === 0) return from + diff;

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

const linear = (diff, interval, duration) => {};

const easeIn = (diff, interval, duration) => {};

const easeOut = (from, diff, time, duration) => {
	const t = time / duration;
	const result = from + diff * t * t;
	console.log(result);
	return result;
};

const easeInOut = (diff, interval, duration) => {};

export default easeFunction;
