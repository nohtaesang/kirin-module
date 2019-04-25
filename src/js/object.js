import { setStyle, returnComputedStyle } from './functions';
('use strict');

// Constructor
let KirinObject = function(sel) {
	let selector, nodeArr, style, callback;

	try {
		if (sel && typeof sel === 'string') {
			nodeArr = document.querySelectorAll(sel);

			if (!nodeArr || nodeArr.length === 0)
				throw new Error(`Didn't find any element-node from this argumnets: "${sel}"`);
			else {
				// for (let v of nodeArr) {
				// 	const temp = returnComputedStyle(v, 'display');
				// 	if (temp !== 'inline-block' && temp !== 'block')
				// 		throw new Error(`Not supported display value of element : ${temp}`);
				// }
			}
		} else throw new Error('Arguments Error');
	} catch (e) {
		console.error(e);
		return;
	}
	return {
		getNodeArr: () => nodeArr,
		initStyle: (style = {}, defaultStyle) => {
			for (let node of nodeArr) {
				setStyle(node, defaultStyle);
				setStyle(node, style);
			}
		},
		setStyle: (style = {}) => {
			for (let node of nodeArr) {
				setStyle(node, style);
			}
		},
		getStyle: () => style,
		addEvent: function(evtName, pCallback) {
			for (let node of nodeArr) {
				node.addEventListener(evtName, pCallback);
			}
		},
		removeEvent: function(evtName, callback) {
			for (let node of nodeArr) {
				node.removeEventListener(evtName, callback);
			}
		}
	};
};

export default KirinObject;
