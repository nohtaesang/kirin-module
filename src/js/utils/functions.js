'use strict';

const returnComputedStyle = (node, property) =>
	property ? window.getComputedStyle(node)[property] : window.getComputedStyle(node);

const doCallback = (callback) => {
	if (typeof callback === 'function') callback();
};

const getOwnOrInitProperty = (obj, property, init) => {
	if (!obj) return init;
	return obj.hasOwnProperty(property) ? obj[property] : init;
};

const getStylePreAndPostFix = (prop) => {
	let pre = prop;
	let post = '';
	if (typeof pre === 'string') {
		pre = parseFloat(prop);
		const length = (pre + '').length;
		post = prop.substr(length, prop.length);
	}
	return { pre, post };
};

const convertStringToElement = (str) => {
	const wrapper = document.createElement('div');
	wrapper.innerHTML = str;
	return wrapper.firstChild;
};

// const copy = (nodeArr, deep) => {
// 	const wrapper = [];

// 	for (node of nodeArr) {
// 		wrapper.push(node.cloneNode(deep));
// 	}

// };

export { returnComputedStyle, doCallback, getOwnOrInitProperty, getStylePreAndPostFix, convertStringToElement };
