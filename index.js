const btn1 = Kirin.select('.btn1');
const pk = Kirin.select('.p');
const container = Kirin.select('.container');
const p = document.querySelectorAll('.p');
const p1 = document.getElementById('p1');
const p2 = document.querySelector('.p2');
btn1.click(() => {
	// container.after('<p>hello!@</p>');
	// container.after('bye~~');
	// container.after(p);
	// container.after(p1);
	// container.after(p2);
	// container.after(pk);
	// container.after([ '1', p ]);
	pk.after(function(i, v) {
		return '<div>' + v + i + '</div>';

		// return
	});
});

const jbtn1 = $('.btn1');
const jp = $('.p');
const jcontainer = $('.container');
jbtn1.click(() => {
	jp.after(function(i, v) {
		return '<div>' + v + i + '</div>';
		// return
	});
});
