const kbtn1 = Kirin.select('.btn1');
const kbtn2 = Kirin.select('.btn2');
const kcontainer = Kirin.select('.container');
const ktitle = Kirin.select('.title');
const kp = Kirin.select('.p');
const ktarget = Kirin.select('.target');
const ktemp = Kirin.select('.temp');
const krich = Kirin.select('.rich');
kbtn1.click(() => {
	// const result = kcontainer.html();
	// console.log('TCL: result', result);
	// krich.addClass((i, v) => {
	// 	console.log(i, v);
	// 	return i + v;
	// });
});
kbtn2.click(() => {});

const dbtn1 = document.querySelectorAll('.btn1');
const dbtn2 = document.querySelectorAll('.btn2');
const dcontainer = document.querySelectorAll('.container');
const dtitle = document.querySelectorAll('.title');
const dp = document.querySelectorAll('.p');
const dtarget = document.querySelectorAll('.target');
const dtemp = document.querySelectorAll('.temp');

const jbtn1 = $('.btn1');
const jbtn2 = $('.btn2');
const jcontainer = $('.container');
const jtitle = $('.title');
const jp = $('.p');
const jtarget = $('.target');
const jtemp = $('.temp');
const jrich = $('.rich');

jbtn1.click(() => {
	jrich.addClass((i, v) => {
		console.log(i, v);
		return i + v;
	});
});

jbtn2.click(() => {});
