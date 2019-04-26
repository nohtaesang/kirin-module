import Animation from './animation';
('use strict');
const animate = ({ speed = 1000, to, easing, callback = null }) => {};

const effects = (nodeArr) => {
	const length = nodeArr.length;
	const animations = [];

	for (let node of nodeArr) {
		animations.push(Animation(node));
	}

	return {
		click: (callback) => {
			for (let node of nodeArr) {
				node.addEventListener('click', callback);
			}
		},
		slideUp: (speed, callback) => {
			for (let i = 0; i < length; i++) {
				animations[i].animate({ speed, callback, name: 'slideUp' });
			}
		},
		slideDown: (speed, callback) => {
			for (let i = 0; i < length; i++) {
				animations[i].animate({ speed, callback, name: 'slideDown' });
			}
		},
		slideToggle: (speed, callback) => {
			for (let i = 0; i < length; i++) {
				animations[i].animate({ speed, callback, name: 'slideToggle' });
			}
		},
		stop: () => {
			for (let i = 0; i < length; i++) {
				animations[i].stop();
			}
		}
	};
};

export default effects;
