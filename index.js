let a = Kirin.Button('.a');
// console.log(a);
// a.initStyle();
// a.addEvent('click', () => {
// 	console.log('here');
// });

let b = Kirin.Button('.b');
b.initStyle({ width: '300px' });
b.addEvent('click', () => {
	b.setStyle({ height: '200px' });
});
