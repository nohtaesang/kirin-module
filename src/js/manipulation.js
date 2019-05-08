// https://api.jquery.com/category/manipulation/
import { returnComputedStyle, getOwnOrInitProperty } from './utils/functions';
('use strict');

const manipulation = (nodeArr, initAttr) => {
	return {
		addClass: (value) => {
			const type = typeof value;
			if (type === 'string') {
				for (let node of nodeArr) {
					node.classList.add(value);
				}
			} else if (type === 'function') {
				for (let node of nodeArr) {
					value(0, node.classList.value);
					// node.classList.add(value(node.classList.value, 0).split(' ')[0]);
				}
			} else if (Array.isArray(value)) {
				for (let node of nodeArr) {
					value.forEach((v) => node.classList.add(v));
				}
			}
		}
	};
};

export default manipulation;

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
