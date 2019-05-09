// https://api.jquery.com/category/manipulation/
import { returnComputedStyle, getOwnOrInitProperty, convertStringToElement } from './utils/functions';
('use strict');

const manipulation = (nodeArr, initAttr) => {
	return {
		/**
		 * @addClass
		 * 
		 * @DOM [classList.add()]
		 * 
		 * @param {String|Array|function(Int index, String indexOfClassList)} className 
		 * string, array는 class에 그대로 추가된다.
		 * function은 현재 class의 이름을 공백을 간격으로 index, value 를 인자로 하여 함수를 실행한다.
		 */
		addClass: (className) => {
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
		},
		/**
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
		after: (content, ...args) => {
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
		},
		/**
		 * @append
		 * 
		 * @DOM [append()]
		 * 
		 * @param {htmlString|Text|Array|Element|NodeList|Kirin|function} content
		 * 
		 * 
		 */
		append: (content) => {
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
		}
	};
};

export default manipulation;
