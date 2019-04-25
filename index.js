let a = Kirin.Button('.a');
a.initStyle();
a.addEvent('click', () => {
	console.log('here');
});

let b = Kirin.Button('.b');
b.initStyle({ width: '300px' });

function ff() {
	b.setStyle({ height: '200px' });
}

b.addEvent('click', ff);
b.removeEvent('click', ff);
