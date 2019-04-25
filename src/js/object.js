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
			callback = function(e) {
				pCallback(e);
			};
			for (let node of nodeArr) {
				// TODO: 그냥 pCallBack 넣으면 안되나?
				node.addEventListener(evtName, callback);
			}
		},
		removeEvent: function(evtName, callback) {
			// TODO: 왜 이렇게 하는건지?
			for (let node of nodeArr) {
				node.addEventListener(evtName, callback);
			}
			callback = null;
		}
	};
};

export default KirinObject;
