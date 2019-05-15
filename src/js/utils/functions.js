import proto from '../proto';
('use strict');

const getKirinArrFromNodeList = (nodeList) => {
	let kirinArr = [];
	let index = 0;
	for (let node of nodeList) {
		kirinArr[index] = node;
		index++;
	}

	setPrototypeOfKirin(kirinArr);
	return kirinArr;
};

const setPrototypeOfKirin = (kirinArr) => {
	const kirinArrProto = proto(kirinArr);
	Object.setPrototypeOf(kirinArrProto, Array.prototype);
	Object.setPrototypeOf(kirinArr, kirinArrProto);
};

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

// const copy = (kirinArr, deep) => {
// 	const wrapper = [];

// 	for (node of kirinArr) {
// 		wrapper.push(node.cloneNode(deep));
// 	}

// };

export {
	getKirinArrFromNodeList,
	setPrototypeOfKirin,
	returnComputedStyle,
	doCallback,
	getOwnOrInitProperty,
	getStylePreAndPostFix,
	convertStringToElement
};
