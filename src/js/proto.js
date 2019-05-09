import events from './events';
import effects from './effects';
import manipulation from './manipulation';
import traversing from './traversing';
import { returnComputedStyle } from './utils/functions';

const proto = (nodeArr) => {
	const curAttr = [];
	const length = nodeArr.length;
	for (let i = 0; i < length; i++) {
		curAttr[i] = returnComputedStyle(nodeArr[i]);
	}
	return {
		// 버전 및 같은 Kirin 객체임을 확인하기 위한 꼼수...?
		kirin: '1.0.0',
		...events(nodeArr),
		...effects(nodeArr, curAttr),
		...manipulation(nodeArr, curAttr),
		...traversing(nodeArr, curAttr)
	};
};

export default proto;
