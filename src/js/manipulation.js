// https://api.jquery.com/category/manipulation/
import { returnComputedStyle, getOwnOrInitProperty } from './utils/functions';
('use strict');

const manipulation = (nodeArr, initAttr) => {
	return {
		/**
		 * @param {String|Function|Array} value 
		 * string, array는 class에 그대로 추가된다.
		 * function은 현재 class의 이름을 공백을 간격으로 index, value 를 인자로 하여 함수를 실행한다.
		 */
		addClass: (value) => {
			const type = typeof value;
			if (type === 'string') {
				for (let node of nodeArr) {
					node.classList.add(value);
				}
			} else if (type === 'function') {
				for (let node of nodeArr) {
					const length = node.classList.length;
					for (let i = 0; i < length; i++) {
						const result = value(i, node.classList[i]);
						if (typeof result === 'string') node.classList.add(result);
					}
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
