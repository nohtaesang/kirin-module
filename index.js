const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const target = Kirin.select('.target');
const jbtn1 = $('.btn1');
const jbtn2 = $('.btn2');
const jtarget = $('.target');

btn1.click(function() {
	target.slideUp(2000);
});

btn2.click(function() {
	target.slideDown(1500);
});
// jbtn.click(function() {
// 	jtarget.slideToggle();
// 	console.log('bye');
// });
