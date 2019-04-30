import Animation from './animations/animation';
import { getOwnOrInitProperty } from './utils/functions';
('use strict');

const effects = (nodeArr, curAttr) => {
	const length = nodeArr.length;
	const animations = [];
	const initHeight = [];
	const initDisplay = [];

	for (let i = 0; i < length; i++) {
		const { height, display } = curAttr[i];
		animations.push(Animation(nodeArr[i], curAttr[i]));
		initHeight.push(height);
		initDisplay.push(display);
	}

	const click = (callback) => {
		for (let node of nodeArr) {
			node.addEventListener('click', callback);
		}
	};

	const stop = () => {
		for (let anim of animations) {
			anim.stop();
		}
	};

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
		let duration = 1000,
			easing = 'linear',
			to;

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1000);
			easing = getOwnOrInitProperty(option, 'easing', 'linear');
			to = getOwnOrInitProperty(option, 'to', 0);
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				display: initDisplay[i],
				duration,
				easing,
				to,
				callback
			});
		}
		return nodeArr;
	};

	const slideAnimation = (name, option, callback = null) => {
		let duration = 1000,
			easing = 'linear';

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1000);
			easing = getOwnOrInitProperty(option, 'easing', 'linear');
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name,
				display: initDisplay[i],
				height: initHeight[i],
				duration,
				easing,
				callback
			});
		}

		return nodeArr;
	};

	const animateAnimation = (params, option, callback = null) => {
		let duration = 1000,
			easing = 'linear';

		if (typeof option === 'function') {
			callback = option;
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1000);
			easing = getOwnOrInitProperty(option, 'easing', 'linear');
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({
				name: 'animate',
				params,
				duration,
				easing,
				callback
			});
		}
		return nodeArr;
	};

	return {
		click,
		stop,
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
		animate: (params, option, callback) => animateAnimation(params, option, callback)
	};
};

export default effects;
