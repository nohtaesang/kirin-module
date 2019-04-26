import proto from './proto';
('use strict');

// Constructor
let Selector = function(sel) {
	let nodeArr, nodeArrProto;
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

	nodeArrProto = proto(nodeArr);
	Object.setPrototypeOf(nodeArrProto, Object.getPrototypeOf(nodeArr));
	Object.setPrototypeOf(nodeArr, nodeArrProto);

	return nodeArr;
};

export default Selector;
