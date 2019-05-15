import { doCallback, pxToNum, getStylePreAndPostFix } from '../utils/functions';
import easeFunction from './easing';
('use strict');

const Animation = (node, curStyleProp) => {
	let queue = [];
	let isStop = false;

	const genAnim = (anim) => {
		queue.push(anim);
		if (queue.length === 1) doAnimation();
	};

	const doAnimation = async () => {
		isStop = false;
		if (queue.length === 0) return;

		const anim = queue[0];
		const { name } = anim;
		switch (name) {
			case 'delay':
				await delayAnimation(anim);
				break;
			case 'hide':
			case 'show':
			case 'hideToggle':
				await hideAnimation(anim);
				break;
			case 'fadeIn':
			case 'fadeOut':
			case 'fadeToggle':
			case 'fadeTo':
				await fadeAnimation(anim);
				break;
			case 'slideUp':
			case 'slideDown':
			case 'slideToggle':
				await slideAnimation(anim);
				break;
			case 'animate':
				await animateAnimation(anim);
				break;
		}

		if (isStop) {
			queue = [];
			return false;
		} else {
			queue.shift();
			doAnimation();
			return true;
		}
	};

	const stop = () => {
		isStop = true;
	};

	const delayAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { delay, callback } = anim;
			setTimeout(() => {
				doCallback(callback);
				resolve(true);
			}, delay);
		});

	const hideAnimation = (anim) =>
		new Promise((resolve, reject) => {
			let toDisplay;
			const { name, display, delay, callback } = anim;
			switch (name) {
				case 'hide':
					toDisplay = 'none';
					break;
				case 'show':
					toDisplay = display;
					break;
				case 'hideToggle':
					toDisplay = curStyleProp.display === display ? 'none' : display;
					break;
			}

			setTimeout(() => {
				node.style.display = toDisplay;
				doCallback(callback);
				resolve(true);
			}, delay);
		});

	const fadeAnimation = (anim) =>
		new Promise((resolve, reject) => {
			let fromOpacity, toOpacity, diff;
			const { name, display, duration, easing, to, callback } = anim;

			fromOpacity = curStyleProp.opacity;
			switch (name) {
				case 'fadeIn':
					node.style.display = display;
					toOpacity = 1;
					break;
				case 'fadeOut':
					toOpacity = 0;
					break;
				case 'fadeToggle':
					node.style.display = display;
					toOpacity = parseFloat(fromOpacity) === 0 ? 1 : 0;
					break;
				case 'fadeTo':
					node.style.display = display;
					toOpacity = to;
					break;
			}

			diff = parseFloat(toOpacity) - parseFloat(fromOpacity);

			let time = 0;
			const id = setInterval(() => {
				time += 10;
				node.style.opacity = easeFunction(easing, parseFloat(fromOpacity), diff, time, duration);

				if (time >= duration) {
					node.style.opacity = toOpacity;
					if (curStyleProp.opacity === '0') {
						node.style.display = 'none';
					}
					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}

				if (isStop) {
					clearInterval(id);
					resolve(true);
				}
			}, 10);
		});

	const slideAnimation = (anim) =>
		new Promise((resolve, reject) => {
			let fromHeight, toHeight, diff;
			const { name, display, height, duration, easing, callback } = anim;
			node.style.display = display;
			node.style.overflow = 'hidden';

			fromHeight = curStyleProp.height;
			switch (name) {
				case 'slideUp':
					toHeight = '0px';
					break;
				case 'slideDown':
					toHeight = height;
					break;
				case 'slideToggle':
					toHeight = fromHeight === '0px' ? height : '0px';
					break;
			}

			diff = parseFloat(toHeight) - parseFloat(fromHeight);

			let time = 0;
			const id = setInterval(() => {
				time += 10;
				node.style.height = easeFunction(easing, parseFloat(fromHeight), diff, time, duration) + 'px';

				if (time >= duration) {
					node.style.height = toHeight;
					if (curStyleProp.height === '0px') {
						node.style.display = 'none';
					}
					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}

				if (isStop) {
					clearInterval(id);
					resolve(true);
				}
			}, 10);
		});

	const animateAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const fromProp = {},
				postfix = {},
				diff = {};
			const { params, duration, easing, callback } = anim;

			for (let prop in params) {
				fromProp[prop] = curStyleProp[prop];
				const { post } = getStylePreAndPostFix(params[prop]);
				postfix[prop] = post;
				diff[prop] = parseFloat(params[prop]) - parseFloat(fromProp[prop]);
			}

			let time = 0;
			const id = setInterval(() => {
				time += 10;

				for (let prop in params) {
					node.style[prop] =
						easeFunction(easing, parseFloat(fromProp[prop]), diff[prop], time, duration) + postfix[prop];
				}

				if (time >= duration) {
					for (let prop in params) {
						node.style[prop] = params[prop];
					}
					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}

				if (isStop) {
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
