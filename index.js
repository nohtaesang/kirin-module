const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const btn3 = Kirin.select('.btn3');
const btn4 = Kirin.select('.btn4');
const btn5 = Kirin.select('.btn5');
const btn6 = Kirin.select('.btn6');
const btn7 = Kirin.select('.btn7');
const btn8 = Kirin.select('.btn8');
const btn9 = Kirin.select('.btn9');
const btn10 = Kirin.select('.btn10');
const btn11 = Kirin.select('.btn11');
const btn12 = Kirin.select('.btn12');
const btn13 = Kirin.select('.btn13');
const target = Kirin.select('.target');
// const jbtn1 = $('.btn1');
// const jbtn2 = $('.btn2');
// const jtarget = $('.target');
// jbtn.click(function() {
// 	jtarget.slideToggle();
// 	console.log('bye');
// });

btn1.click(function() {
	target.slideUp();
});

btn2.click(function() {
	target.slideDown({ duration: 1.2 });
});
btn3.click(function() {
	target.stop();
});
btn4.click(function() {
	target.slideToggle({ duration: 0.5 });
});
btn5.click(() =>
	target.hide(() => {
		console.log('hide');
	})
);
btn6.click(() => target.show());
btn7.click(() => target.hideToggle());
btn8.click(() => target.slideUp().slideDown().delay({ delay: 2000 }).hide());
btn9.click(() => target.fadeIn({ duration: 0.9 }));
btn10.click(() =>
	target.fadeOut(() => {
		console.log('out!');
	})
);
btn11.click(() => target.fadeToggle({ duration: 0.4 }));
btn12.click(() => target.fadeTo({ duration: 0.7, to: 0.2 }));

btn13.click(() => target.animate({ width: '500px', height: '50px', opacity: 0.4 }, { duration: 3 }));
