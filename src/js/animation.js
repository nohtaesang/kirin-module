import { returnComputedStyle } from './utils/functions';

('use strict');

const Animation = (node) => {
	let queue = [];
	const initAttr = returnComputedStyle(node);
	let isStop = false;

	const genAnim = (anim) => {
		queue.push(anim);
		if (queue.length === 1) doAnimation();
	};

	const stop = () => {
		isStop = true;
	};

	const doAnimation = async () => {
		isStop = false;
		if (queue.length === 0) return;
		const anim = queue[0];
		const { name } = anim;
		switch (name) {
			case 'hide':
			case 'show':
			case 'hideToggle':
				break;
			case 'fadeIn':
			case 'fadeOut':
			case 'fadeToggle':
			case 'fadeTo':
				break;
			case 'slideUp':
			case 'slideDown':
			case 'slideToggle':
				await slideAnimation(anim);
				break;
			case 'animate':
				break;
			case 'stop':
				break;
		}
		if (isStop) {
			queue = [];
		} else {
			queue.shift();
			doAnimation();
		}
	};

	const slideAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { name, height, duration = 1, ease = 'ease', callback = null } = anim;
			node.style.visibility = 'visible';
			node.style.overflow = 'hidden';
			node.style.transition = `${duration}s ${ease}`;

			let nextHeight;
			switch (name) {
				case 'slideUp':
					nextHeight = '0px';
					break;
				case 'slideDown':
					nextHeight = height;
					break;
				case 'slideToggle':
					nextHeight = initAttr['height'] === '0px' ? height : '0px';
					break;
			}

			node.style.height = nextHeight;

			const id = setInterval(() => {
				if (isStop) {
					node.style.height = initAttr['height'];
					clearInterval(id);
					resolve(true);
				}

				if (initAttr['height'] === node.style.height) {
					if (initAttr['height'] === '0px') {
						node.style.transition = '0s';
						node.style.visibility = 'hidden';
					}

					clearInterval(id);
					resolve(true);
				}
			}, 10);
		});

	return {
		genAnim,
		stop
	};
};

export default Animation;
