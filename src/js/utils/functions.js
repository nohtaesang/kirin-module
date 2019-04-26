'use strict';

const returnComputedStyle = (node, property) =>
	property ? window.getComputedStyle(node)[property] : window.getComputedStyle(node);

export { returnComputedStyle };
