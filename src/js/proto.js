import effects from './effects';
import htmlAndCss from './htmlAndCss';
import { returnComputedStyle } from './utils/functions';

const proto = (nodeArr) => {
	const curAttr = [];
	const length = nodeArr.length;
	for (let i = 0; i < length; i++) {
		curAttr[i] = returnComputedStyle(nodeArr[i]);
	}
	return {
		...effects(nodeArr, curAttr),
		...htmlAndCss(nodeArr, curAttr)
	};
};

export default proto;
