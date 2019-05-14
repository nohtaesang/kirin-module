// https://api.jquery.com/category/manipulation/
import { returnComputedStyle, getOwnOrInitProperty, convertStringToElement } from './utils/functions';
('use strict');

const manipulation = (nodeArr, initAttr) => {
	/**
	 * DONE:
	 * @addClass
	 * 
	 * @DOM [classList.add()]
	 * 
	 * @param {String|Array|function(Int index, String indexOfClassList)} className 
	 * string, array는 class에 그대로 추가된다.
	 * function은 현재 class의 이름을 공백을 간격으로 index, value 를 인자로 하여 함수를 실행한다.
	 */
	const addClass = (className, ...args) => {
		const type = typeof className;
		if (type === 'string') {
			for (let node of nodeArr) {
				node.classList.add(className);
			}
		} else if (Array.isArray(className)) {
			className.forEach((v) => nodeArr.addClass(v));
		} else if (type === 'function') {
			const func = className;
			for (let node of nodeArr) {
				const length = node.classList.length;
				for (let i = 0; i < length; i++) {
					const result = func(i, node.classList[i]);
					if (typeof result === 'string') node.classList.add(result);
				}
			}
		}

		if (args.length) {
			args.forEach((v) => nodeArr.addClass(v));
		}
		return nodeArr;
	};
	/**
	 * DONE:
	 * @after
	 * 
	 * @DOM [.after()]
	 * 
	 * @param {htmlString|Text|Array|Element|NodeList|Kirin|function} content
	 * htmlString, Text는 type이 string이다. 받아온 값을 element로 변환하여 after 해준다.
	 * Array는 요소를 다시 nodeArr의 after 함수의 인자로 넣어 실행한다.
	 * Element는 바로 after 해준다.
	 * NodeList와 Kirin은 둘 다 NodeList이다. 각 리스트의 인자는 element이므로, 분해하여 after 해준다.
	 * function은 node의 index와 node의 textContext를 인자로 하여 함수를 실행한다.
	 */
	const after = (content, ...args) => {
		if (args.length) {
			args.forEach((v) => nodeArr.after(v));
		}

		const type = typeof content;
		if (type === 'string') {
			const el = convertStringToElement(content);
			for (let node of nodeArr) {
				node.after(el);
			}
		} else if (Array.isArray(content)) {
			content.forEach((v) => nodeArr.after(v));
		} else if (content.nodeType) {
			for (let node of nodeArr) {
				node.after(content);
			}
		} else if (NodeList.prototype.isPrototypeOf(content)) {
			for (let node of nodeArr) {
				for (let c of content) {
					node.after(c);
				}
			}
		} else if (type === 'function') {
			const func = content;
			let index = 0;
			for (let node of nodeArr) {
				const result = convertStringToElement(func(index, node.textContent));
				node.after(result);
				index++;
			}
		}
		return nodeArr;
	};
	/**
	 * DONE:
	 * @append
	 * 
	 * @DOM [append()]
	 * 
	 * @param {htmlString|Text|Array|Element|NodeList|Kirin|function} content
	 */
	const append = (content, ...args) => {
		const type = typeof content;
		if (type === 'string') {
			const el = convertStringToElement(content);
			for (let node of nodeArr) {
				node.append(el);
			}
		} else if (Array.isArray(content)) {
			content.forEach((v) => nodeArr.append(v));
		} else if (content.nodeType) {
			for (let node of nodeArr) {
				node.append(content);
			}
		} else if (NodeList.prototype.isPrototypeOf(content)) {
			for (let node of nodeArr) {
				for (let c of content) {
					node.append(c);
				}
			}
		} else if (type === 'function') {
			const func = content;
			let index = 0;
			for (let node of nodeArr) {
				const result = convertStringToElement(func(index, node.textContent));
				node.append(result);
				index++;
			}
		}

		if (args.length) {
			args.forEach((v) => nodeArr.append(v));
		}
		return nodeArr;
	};

	/**
	 * DONE:
	 * @appendTo
	 * 
	 * @param {Element|Kirin} target
	 */
	const appendTo = (target) => {
		console.log(nodeArr);
		for (let node of nodeArr) {
			target.append(node);
		}
		return nodeArr;
	};
	/**
	 * DONE:
	 * @attr
	 * get은 선택된 nodeList 중, 첫 번째 element의 값만을 다룬다.
	 * @param {String} attributeName
	 * 
	 * @param {String} value
	 */
	const attr = (attributeName, value = null) => {
		if (value === null) {
			for (let node of nodeArr) {
				return node.getAttribute(attributeName);
			}
		} else {
			for (let node of nodeArr) {
				node.setAttribute(attributeName, value);
			}
		}
		return nodeArr;
	};

	/**
	 * DONE:
	 * @before
	 * 
	 * @DOM [.before()]
	 * 
	 * @param {htmlString|Text|Array|Element|NodeList|Kirin|function} content
	 */
	const before = (content, ...args) => {
		if (args.length) {
			args.forEach((v) => nodeArr.before(v));
		}

		const type = typeof content;
		if (type === 'string') {
			const el = convertStringToElement(content);
			for (let node of nodeArr) {
				node.before(el);
			}
		} else if (Array.isArray(content)) {
			content.forEach((v) => nodeArr.before(v));
		} else if (content.nodeType) {
			for (let node of nodeArr) {
				node.before(content);
			}
		} else if (NodeList.prototype.isPrototypeOf(content)) {
			for (let node of nodeArr) {
				for (let c of content) {
					node.before(c);
				}
			}
		} else if (type === 'function') {
			const func = content;
			let index = 0;
			for (let node of nodeArr) {
				const result = convertStringToElement(func(index, node.textContent));
				node.before(result);
				index++;
			}
		}
		return nodeArr;
	};

	/**
	 * TODO:
	 * @clone
	 * 
	 * @DOM [.()]
	 * 
	 * @param {Boolean} withDataAndEvents
	 * 깊은 복사를 할 것인지를 정할 수 있다.
	 */

	const clone = (withDataAndEvents = true) => {
		const newNodeArr = [];

		let index = 0;
		for (let node of nodeArr) {
			newNodeArr[index] = node.cloneNode(withDataAndEvents);
			break;
			index++;
		}

		Object.setPrototypeOf(newNodeArr, Object.getPrototypeOf(nodeArr)); // NodeArr의 링크로 연결해준다.

		console.log(newNodeArr);

		return newNodeArr;
	};

	/**
	 * TODO:
	 * @
	 * 
	 * @DOM [.()]
	 * 
	 * @param {|}
	 * 
	 */
	const print = () => {
		console.log(nodeArr);
	};

	return {
		addClass,
		after,
		append,
		appendTo,
		attr,
		before,
		clone,
		print
	};
};

export default manipulation;
