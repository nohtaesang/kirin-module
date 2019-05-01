const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const p = Kirin.select('.p');
const container = Kirin.select('.container');
const container2 = Kirin.select('.container2');
const input = Kirin.select('.input');
btn1.click(() => {
	container.attr('class', v => container.attr('class', `f${v}r`));
});
btn2.click(() => {
	// console.log(container.html());
});

const jbtn1 = $('.btn1');
const jbtn2 = $('.btn2');
const jp = $('.p');
const jcontainer = $('.container');
const jinput = $('.input');

jbtn1.click(() => {
	// jcontainer.html('<h1>hello world!</h1>');
});
jbtn2.click(() => {
	// console.log(jcontainer.html());
});
