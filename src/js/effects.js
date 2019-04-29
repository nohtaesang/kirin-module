import Animation from './animations/animation';
import { returnComputedStyle, getOwnOrInitProperty } from './utils/functions';
('use strict');

const effects = (nodeArr) => {
	const length = nodeArr.length;
	const animations = [];
	const initHeight = [];
	const initDisplay = [];

	for (let node of nodeArr) {
		animations.push(Animation(node));
		const { height, display } = returnComputedStyle(node);
		initHeight.push(height);
		initDisplay.push(display);
	}

	const delayAnimation = (name, option, callback = null) => {
		let delay = 1000;
		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			delay = getOwnOrInitProperty(option, 'delay', 0);
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				delay,
				callback
			});
		}
		return nodeArr;
	};

	const hideAnimation = (name, option, callback = null) => {
		let delay = 0;

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			delay = getOwnOrInitProperty(option, 'delay', 0);
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				display: initDisplay[i],
				delay,
				callback
			});
		}

		// chaining을 위해
		return nodeArr;
	};

	const fadeAnimation = (name, option, callback = null) => {
		let duration = 1,
			ease = 'ease',
			to = 0;

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1);
			ease = getOwnOrInitProperty(option, 'ease', 'ease');
			to = getOwnOrInitProperty(option, 'to', 0);
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				display: initDisplay[i],
				duration,
				ease,
				to,
				callback
			});
		}

		return nodeArr;
	};

	const slideAnimation = (name, option, callback = null) => {
		let duration = 1,
			ease = 'ease';

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1);
			ease = getOwnOrInitProperty(option, 'ease', 'ease');
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				display: initDisplay[i],
				height: initHeight[i],
				duration,
				ease,
				callback
			});
		}

		// chaining을 위해
		return nodeArr;
	};

	const animateAnimation = (params, option, callback = null) => {
		let duration = 1,
			ease = 'ease';

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 0);
			ease = getOwnOrInitProperty(option, 'ease', 'ease');
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name: 'animate',
				params,
				duration,
				ease,
				callback
			});
		}
		return nodeArr;
	};

	return {
		click: (callback) => {
			for (let node of nodeArr) {
				node.addEventListener('click', callback);
			}
		},
		delay: (option, callback) => delayAnimation('delay', option, callback),
		hide: (option, callback) => hideAnimation('hide', option, callback),
		show: (option, callback) => hideAnimation('show', option, callback),
		hideToggle: (option, callback) => hideAnimation('hideToggle', option, callback),
		fadeIn: (option, callback) => fadeAnimation('fadeIn', option, callback),
		fadeOut: (option, callback) => fadeAnimation('fadeOut', option, callback),
		fadeToggle: (option, callback) => fadeAnimation('fadeToggle', option, callback),
		fadeTo: (option, callback) => fadeAnimation('fadeTo', option, callback),
		slideUp: (option, callback) => slideAnimation('slideUp', option, callback),
		slideDown: (option, callback) => slideAnimation('slideDown', option, callback),
		slideToggle: (option, callback) => slideAnimation('slideToggle', option, callback),
		animate: (params, option, callback) => animateAnimation(params, option, callback),
		stop: () => {
			for (let i = 0; i < length; i++) {
				animations[i].stop();
			}
		}
	};
};

export default effects;

// 추가하고 싶은 것
// 오늘 어느정도 하기 animate

// 추후
// html
// traversing
