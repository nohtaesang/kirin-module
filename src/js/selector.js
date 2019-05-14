import { getKirinArrFromNodeList } from './utils/functions';
('use strict');

// Constructor
let Selector = function(sel) {
	let nodeList;
	try {
		if (sel && typeof sel === 'string') {
			nodeList = document.querySelectorAll(sel);
			if (!nodeList || nodeList.length === 0)
				throw new Error(`Didn't find any element-node from this argumnets: "${sel}"`);
		} else throw new Error('Arguments Error');
	} catch (e) {
		console.error(e);
		return;
	}

	return getKirinArrFromNodeList(nodeList);
};

export default Selector;
