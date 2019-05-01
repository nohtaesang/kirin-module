import events from './events';
import effects from './effects';
import htmlAndCss from './htmlAndCss';
import traversing from './traversing';
import { returnComputedStyle } from './utils/functions';

const proto = nodeArr => {
	const curAttr = [];
	const length = nodeArr.length;
	for (let i = 0; i < length; i++) {
		curAttr[i] = returnComputedStyle(nodeArr[i]);
	}
	return {
		...events(nodeArr),
		...effects(nodeArr, curAttr),
		...htmlAndCss(nodeArr, curAttr),
		...traversing(nodeArr, curAttr)
	};
};

export default proto;
