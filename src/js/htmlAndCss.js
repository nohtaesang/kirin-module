import Animation from './animations/animation';
import { returnComputedStyle, getOwnOrInitProperty } from './utils/functions';
('use strict');

const html = (nodeArr, initAttr) => {
	const length = nodeArr.length;

	for (let i = 0; i < length; i++) {}

	const text = () => {
		for (let node of nodeArr) {
			return node.textContent;
		}
	};

	const html = () => {
		for (let node of nodeArr) {
			return node.innerHTML;
		}
	};

	const val = () => {
		for (let node of nodeArr) {
			return node.value;
		}
	};

	const attr = (prop, value = null) => {
		for (let i = 0; i < nodeArr.length; i++) {
			if (typeof prop === 'string') {
				if (typeof value === 'string') {
					nodeArr[i].setAttribute(prop, value);
				} else {
					return nodeArr[i].getAttribute(prop);
				}
			} else if (typeof prop === 'object') {
				for (let p in prop) {
					nodeArr[i].setAttribute(p, prop[p]);
				}
			}
		}
	};

	return {
		text,
		html,
		val,
		attr: (prop, value) => attr(prop, value)
	};
};

export default html;

// 추가하고 싶은 것

// 추후
// html
// traversing
