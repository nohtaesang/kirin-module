import events from './events';
import effects from './effects';
import manipulation from './manipulation';
import traversing from './traversing';
import { returnComputedStyle } from './utils/functions';

const proto = (kirinArr) => {
	const curStyleProp = [];
	const length = kirinArr.length;
	for (let i = 0; i < length; i++) {
		curStyleProp[i] = returnComputedStyle(kirinArr[i]);
	}
	return {
		// 버전 및 같은 Kirin 객체임을 확인하기 위한 꼼수...?
		kirin: '1.0.0',
		// ...kirinArr,
		...events(kirinArr),
		...effects(kirinArr, curStyleProp),
		...manipulation(kirinArr, curStyleProp),
		...traversing(kirinArr, curStyleProp)
	};
};

export default proto;
