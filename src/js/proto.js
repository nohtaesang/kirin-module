import effects from './effects';

const proto = (nodeArr) => {
	return {
		...effects(nodeArr)
	};
};

export default proto;
