const kbtn1 = Kirin.select('.btn1');
const kbtn2 = Kirin.select('.btn2');
const kcontainer = Kirin.select('.container');
const ktitle = Kirin.select('.title');
const kp = Kirin.select('.p');
const ktarget = Kirin.select('.target');
const ktemp = Kirin.select('.temp');
kbtn1.click(() => {
	// ktarget.css('height', (i, v) => {
	// 	console.log((i + 1) * 300);
	// 	return (i + 1) * 300 + 'px';
	// });
	// const result = ktarget.height((i, v) => {
	// 	return (i + 1) * 300;
	// });
	// ktarget.height('300%');
	// console.log('TCL: result', result);

	ktarget.height('500');
});
kbtn2.click(() => {
	kp.appendTo(ktarget);
	ktarget.height('inherit');
});

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

jbtn1.click(() => {
	// jtarget.height('500');
});

jbtn2.click(() => {
	// jtarget.height('inherit');
});
