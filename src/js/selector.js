import proto from './proto';
('use strict');

// Constructor
let Selector = function(sel) {
	let nodeArr,
		nodeArrProto,
		kirinArr = [];
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

	let index = 0;
	for (let node of nodeArr) {
		kirinArr[index] = node;
		index++;
	}
	console.log(kirinArr);

	nodeArrProto = proto(nodeArr);
	// console.dir(nodeArr);
	// console.log(nodeArrProto);
	Object.setPrototypeOf(nodeArrProto, Object.getPrototypeOf(nodeArr));
	Object.setPrototypeOf(nodeArr, nodeArrProto);

	return nodeArr;
};

export default Selector;
