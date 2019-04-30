const btn1 = Kirin.select('.btn1');
const btn2 = Kirin.select('.btn2');
const p = Kirin.select('.p');
const container = Kirin.select('.container');
const container2 = Kirin.select('.container2');
const input = Kirin.select('.input');
btn1.click(() => {
	container.animate({ width: '1000px', opacity: 0.5, borderWidth: '5px' }, { duration: 2000, easing: 'easeIn' });
	container2.animate({ width: '1000px', opacity: 0.5, borderWidth: '5px' }, { duration: 2000, easing: 'linear' });
});
btn2.click(() => {
	// container.hideToggle({ delay: 500 });
});
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const container = document.querySelector('.container')
// btn1.addEventListener('click',()=>{
// 	container.style='0px'
// })

const jbtn1 = $('.btn1');
const jbtn2 = $('.btn2');
const jp = $('.p');
const jcontainer = $('.container');
const jinput = $('.input');

jbtn1.click(() => {
	// jcontainer.animate({ border: 'solid 5px blue' }, 1000);
});
jbtn2.click(() => {
	// jcontainer.slideDown();
});
