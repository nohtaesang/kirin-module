const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const p = Kirin.select('.p');
const container = Kirin.select('.container');
btn1.click(() => {
	container.addClass(function(i, v) {
		// console.log('^^', i, v);
		return i + v;
	});
});
btn2.click(() => {
	// console.log(container.html());
});

const jbtn1 = $('.btn1');
const jbtn2 = $('.btn2');
const jcontainer = $('.container');

jbtn1.click(() => {
	// jcontainer.addClass(function(i, v) {
	// 	// console.log('--', i + v);
	// 	// return i + 'a';
	// });
});
