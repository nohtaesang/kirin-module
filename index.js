const kbtn1 = Kirin.select('.btn1');
const kbtn2 = Kirin.select('.btn2');
const kcontainer = Kirin.select('.container');
const ktitle = Kirin.select('.title');
const kp = Kirin.select('.p');
const ktarget = Kirin.select('.target');
const ktemp = Kirin.select('.temp');
kbtn1.click(() => {
	const result = ktarget.css('border-color');
	console.log(result);
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
	const result = jp.css('border-color');
	console.log('TCL: result', result);
	const result2 = jp.attr('border-color');
	console.log('TCL: result2', result2);
});
