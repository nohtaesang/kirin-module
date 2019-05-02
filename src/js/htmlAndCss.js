import Animation from './animations/animation';
import { returnComputedStyle, getOwnOrInitProperty } from './utils/functions';
('use strict');

const html = (nodeArr, initAttr) => {
	// get set
	const text = (value = null) => {
		if (value === null) {
			for (let node of nodeArr) {
				return node.textContent;
			}
		} else {
			const type = typeof value;
			if (type === 'string') {
				for (let node of nodeArr) {
					node.textContent = value;
				}
			} else if (type === 'function') {
				for (let node of nodeArr) {
					value(node.textContent);
				}
			}
		}
	};

	const html = (value = null) => {
		if (value === null) {
			for (let node of nodeArr) {
				return node.innerHTML;
			}
		} else {
			const type = typeof value;
			if (type === 'string') {
				for (let node of nodeArr) {
					node.innerHTML = value;
				}
			} else if (type === 'function') {
				for (let node of nodeArr) {
					value(node.innerHTML);
				}
			}
		}
	};

	const val = (value = null) => {
		if (value === null) {
			for (let node of nodeArr) {
				return node.value;
			}
		} else {
			const type = typeof value;
			if (type === 'string') {
				for (let node of nodeArr) {
					node.value = value;
				}
			} else if (type === 'function') {
				value(node.value);
			}
		}
	};

	const attr = (prop, value = null) => {
		let propType, valueType;
		propType = typeof prop;
		valueType = typeof value;

		if (propType === 'string') {
			if (value === null) {
				for (let node of nodeArr) {
					return node.getAttribute(prop);
				}
			} else if (valueType === 'string') {
				for (let node of nodeArr) {
					node.setAttribute(prop, value);
				}
			} else if (valueType === 'function') {
				for (let node of nodeArr) {
					value(node.getAttribute(prop));
				}
			}
		} else if ((propType = 'object')) {
			for (let node of nodeArr) {
				for (let p in prop) {
					node.setAttribute(p, prop[p]);
				}
			}
		}
	};

	// add
	const append = (value, func) => {};
	const prepend = (value, func) => {};
	const after = (value, func) => {};
	const before = (value, func) => {};

	// remove
	const remove = selector => {};
	const empty = () => {};

	// css
	const addClass = (className, func) => {};
	const removeClass = (className, func) => {};
	const toggleClass = (className, func) => {};
	const css = (prop, value) => {};

	// dimensions
	const width = () => {};
	const innerWidth = () => {};
	const outerWidth = bool => {};
	const height = () => {};
	const innerHeight = () => {};
	const outerHeight = bool => {};
	return {
		text,
		html,
		val,
		attr: (prop, value) => attr(prop, value)
	};
};

export default html;

/**
 * TODO:
 * addClass()
 * after()
 * append()
 * appendTo()
 * before()
 * clone()
 * css()
 * detach()
 * empty()
 * hasClass()
 * height()
 * innerHeight()
 * innerWidth()
 * insertAfter()
 * insertBefore()
 * offset()
 * offsetParent()
 * outerHeight()
 * outerWidth()
 * position()
 * prepend()
 * prependTo()
 * prop()
 * remove()
 * removeAttr()
 * removeClass()
 * removeProp()
 * replaceAll()
 * replaceWith()
 * scrollLeft()
 * scrollTop()
 * toggleClass()
 * unwrap()
 * width()
 * wrap()
 * wrapAll()
 * wrapInner()
 * DONE:
 * attr()
 * html()
 * text()
 * val()
 */
