import KirinObject from './object';
import { buttonStyle } from './constants';
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

export default KirinButton;
