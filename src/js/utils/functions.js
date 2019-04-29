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

export { returnComputedStyle, doCallback, getOwnOrInitProperty };
