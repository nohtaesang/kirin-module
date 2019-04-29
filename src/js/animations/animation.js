import { returnComputedStyle, doCallback } from '../utils/functions';

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
			case 'stop':
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

	const delayAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { name, delay, callback } = anim;
			setTimeout(() => {
				doCallback(callback);
				resolve(true);
			}, delay);
		});

	const hideAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { name, display, delay, callback } = anim;
			node.style.transition = '0s';
			let nextDisplay;
			switch (name) {
				case 'hide':
					nextDisplay = 'none';
					break;
				case 'show':
					nextDisplay = display;
					break;
				case 'hideToggle':
					nextDisplay = initAttr.display === display ? 'none' : display;
					break;
			}

			setTimeout(() => {
				node.style.display = nextDisplay;
				doCallback(callback);
				resolve(true);
			}, delay);
		});

	const fadeAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { name, display, duration, ease, to, callback } = anim;
			node.style.transition = `${duration}s ${ease}`;

			let nextOpacity;
			switch (name) {
				case 'fadeIn':
					node.style.display = display;
					nextOpacity = 1;
					break;
				case 'fadeOut':
					nextOpacity = 0;
					break;
				case 'fadeToggle':
					node.style.display = display;
					nextOpacity = initAttr.opacity * 1 === 0 ? 1 : 0;
					break;
				case 'fadeTo':
					node.style.display = display;
					nextOpacity = to;
					break;
			}

			setTimeout(() => {
				node.style.opacity = nextOpacity;
			}, 10);

			const id = setInterval(() => {
				if (initAttr.opacity === node.style.opacity) {
					if (node.style.opacity === '0') {
						node.style.display = 'none';
					}

					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}

				if (isStop) {
					node.style.opacity = initAttr.opacity;
					clearInterval(id);
					resolve(true);
				}
			}, 10);
		});

	const slideAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { name, display, height, duration, ease, callback } = anim;
			node.style.display = display;
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
					nextHeight = initAttr.height === '0px' ? height : '0px';
					break;
			}

			setTimeout(() => {
				node.style.height = nextHeight;
			}, 10);

			const id = setInterval(() => {
				if (isStop) {
					node.style.height = initAttr.height;
					clearInterval(id);
					resolve(true);
				}

				if (initAttr.height === node.style.height) {
					if (node.style.height === '0px') {
						node.style.display = 'none';
					}

					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}
			}, 10);
		});

	const animateAnimation = (anim) =>
		new Promise((resolve, reject) => {
			const { params, duration, ease, callback } = anim;

			node.style.transition = `${duration}s ${ease}`;

			for (let prop in params) {
				node.style[prop] = params[prop];
			}
			const key = Object.keys(params)[0];

			const id = setInterval(() => {
				if (initAttr[key] === node.style[key]) {
					doCallback(callback);
					clearInterval(id);
					resolve(true);
				}

				if (isStop) {
					for (let prop in params) {
						node.style[prop] = initAttr[prop];
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
