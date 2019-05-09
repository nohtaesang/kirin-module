const btn1 = Kirin.select('.btn1');
const pk = Kirin.select('.p');
const container = Kirin.select('.container');
const p = document.querySelectorAll('.p');
const p1 = document.getElementById('p1');
const p2 = document.querySelector('.p2');
btn1.click(() => {
	// container.append('<p>hello!@</p>');
	// container.append('bye~~', 'hito', [ '1', 2 ]);
	// container.append(p);
	// container.append(p1);
	// container.append(p2);
	// container.append(pk);
	// container.append([ '1', p ]);
	container.append(function(i, v) {
		return '<div>' + v + i + '</div>';

		// return
	});
});

const jbtn1 = $('.btn1');
const jp = $('.p');
const jcontainer = $('.container');
jbtn1.click(() => {
	// jp.append(function(i, v) {
	// 	return '<div>' + v + i + '</div>';
	// 	// return
	// });
});
