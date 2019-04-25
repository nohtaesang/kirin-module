'use strict';

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
	}
};

const prefixArr = [ 'webkit', 'moz', 'o', 'ms' ];

export { buttonStyle, prefixArr };
