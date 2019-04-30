import effects from './effects';
import html from './html';
import { returnComputedStyle } from './utils/functions';

const proto = (nodeArr) => {
	const curAttr = [];
	const length = nodeArr.length;
	for (let i = 0; i < length; i++) {
		curAttr[i] = returnComputedStyle(nodeArr[i]);
	}
	return {
		...effects(nodeArr, curAttr)
		// ...html(nodeArr, curAttr)
	};
};

export default proto;
