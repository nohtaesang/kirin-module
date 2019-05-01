('use strict');

const events = nodeArr => {
	const click = callback => {
		for (let node of nodeArr) {
			node.addEventListener('click', callback);
		}
	};

	return {
		click
	};
};

export default events;
