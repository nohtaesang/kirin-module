'use strict';

import { prefixArr } from './constants';

const setStyle = (node, style) => {
	const _style = Object.entries(style);
	for (const v of _style) {
		node.style[v[0]] = v[1];
		const temp = v[0][0].toUpperCase() + Array.from(v[0]).splice(1).join('');
		for (const el of prefixArr) node.style[el + temp] = v[1];
	}
};

const returnComputedStyle = (node, property) => window.getComputedStyle(node)[property];

export { setStyle, returnComputedStyle };
