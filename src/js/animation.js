import { returnComputedStyle } from './utils/functions';

const Animation = (node) => {
	const initAttr = returnComputedStyle(node);
	const queue = [];
	node.style.overflow = 'hidden';

	const doAnimation = async () => {
		if (queue.length === 0) return;
		const { speed = 1000, callback = null, name } = queue[0];

		let attribtue;
		let from = node.style[attribtue];
		let to;
		switch (name) {
			case 'slideUp':
				attribtue = 'height';
				// to = '0px';
				break;
			case 'slideDown':
				attribtue = 'height';
				// to = initAttr['height'];
				break;
			default:
				return;
		}
		// console.log(speed, callback, name);
		// console.log(to);

		console.log(initAttr[attribtue].substr(0, initAttr[attribtue].length - 2));

		// let to = initAttr[attribtue].substr(-2) - from.substr(-2);
		// console.log(from, to);

		// const interval = setInterval(() => {
		//     if(node.style[attribtue] )
		// 	node.style[attribtue] = to;
		// }, speed);
		// node.style['A'];
		// node.style[attribtue] = to;

		// queue[0]
		// process
		// queue shift
		// doAnimation()
	};

	const genAnim = () => {};

	return {
		stop: () => {},
		animate: (anim) => {
			queue.push(anim);
			if (queue.length === 1) doAnimation();
		}
	};
};

export default Animation;
