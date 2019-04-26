import { setStyle, returnComputedStyle } from './functions';
// effects

('use strict');

// Constructor
let KirinSelector = function(sel) {
	let selector, nodeArr, style, callback;

	try {
		if (sel && typeof sel === 'string') {
			nodeArr = document.querySelectorAll(sel);
			if (!nodeArr || nodeArr.length === 0)
				throw new Error(`Didn't find any element-node from this argumnets: "${sel}"`);
		} else throw new Error('Arguments Error');
	} catch (e) {
		console.error(e);
		return;
	}

	return {
		getNodeArr: () => nodeArr

		// addEvent: function(evtName, pCallback) {
		// 	for (let node of nodeArr) {
		// 		node.addEventListener(evtName, pCallback);
		// 	}
		// },
		// removeEvent: function(evtName, callback) {
		// 	for (let node of nodeArr) {
		// 		node.removeEventListener(evtName, callback);
		// 	}
		// }
	};
};

export default KirinSelector;
