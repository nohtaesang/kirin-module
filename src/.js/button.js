import KirinObject from './object';
('use strict');
const KirinButton = function(sel) {
	let obj = KirinObject.call(this, sel);

	return {
		...obj,
		initStyle: function(style = {}) {
			obj.initStyle(style, buttonStyle.init);
		}
	};
};

const buttonStyle = {
	init: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '110px',
		height: '50px',
		border: 'solid 1px black',
		borderRadius: '4px',
		transition: '0.5s'
	},
	sm: {},
	md: {},
	lg: {}
};

export default KirinButton;
