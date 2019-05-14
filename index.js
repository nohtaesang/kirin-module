const kbtn1 = Kirin.select('.btn1');
const kp = Kirin.select('.p');
const kcontainer = Kirin.select('.container');
const ktarget = Kirin.select('.target');

const target = document.querySelectorAll('.target');
const container = document.querySelectorAll('.container');

kbtn1.click(() => {
	kcontainer.slideUp();
	// const clone = kp.clone(true);
	// console.log(clone);
	// clone.appendTo(kcontainer);
	// console.log(kp.clone(true).appendTo(kcontainer));
});

const jbtn1 = $('.btn1');
const jp = $('.p');
const jcontainer = $('.container');
const jtarget = $('.target');
jbtn1.click(() => {
	// console.log(jtarget.clone(true));
	// jtarget.clone(true).appendTo(jcontainer);
	// jcontainer.after(jtarget.clone(false));
	// jp.clone(true).appendTo(jcontainer);
});
