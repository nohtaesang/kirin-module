import Animation from './animation';
import { returnComputedStyle } from './utils/functions';
('use strict');

const effects = (nodeArr) => {
	const length = nodeArr.length;
	const animations = [];
	const initHeight = [];

	for (let node of nodeArr) {
		animations.push(Animation(node));
		initHeight.push(returnComputedStyle(node, 'height'));
	}

	const slideAnimation = (name, duration, ease, callback) => {
		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				height: initHeight[i],
				duration,
				ease,
				callback
			});
		}
	};

	return {
		click: (callback) => {
			for (let node of nodeArr) {
				node.addEventListener('click', callback);
			}
		},
		slideUp: (duration, ease, callback) => slideAnimation('slideUp', duration, ease, callback),
		slideDown: (duration, ease, callback) => slideAnimation('slideDown', duration, ease, callback),
		slideToggle: (duration, ease, callback) => slideAnimation('slideToggle', duration, ease, callback),
		stop: () => {
			for (let i = 0; i < length; i++) {
				animations[i].stop();
			}
		}
	};
};

export default effects;
