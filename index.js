const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const btn3 = Kirin.select('.btn3');
const btn4 = Kirin.select('.btn4');
const target = Kirin.select('.target');
// const jbtn1 = $('.btn1');
// const jbtn2 = $('.btn2');
// const jtarget = $('.target');

btn1.click(function() {
	target.slideUp(1);
});

btn2.click(function() {
	target.slideDown(0.2);
});
btn3.click(function() {
	target.stop();
});

btn4.click(function() {
	console.log('yam');
	target.slideToggle(1);
});
// jbtn.click(function() {
// 	jtarget.slideToggle();
// 	console.log('bye');
// });
