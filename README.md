# Kirin
## Kirin module?
jQuery 를 분석하여 만든 유사 jQuery이다.
 
## How to use
```javascript
// jQuery
const btn = $('.btn')
const menu = $('.menu')

btn.click(()=>{
    menu.slideToggle()
})

// kirin
const btn = Kirin.select('.btn')
const menu = Kirin.select('.menu')

btn.click(()=>{
    menu.slideToggle()
})
```
## How to make
1. 모듈 만들기
1. selector 만들기
1. event 구현
1. animation 구현

### 1. 모듈 만들기
```javascript
// src/js/kirin.js
import KirinSelector from './selector';
let Kirin;

window.Kirin = Kirin = Kirin || {}; // 1. Kirin을 전역 객체로 설정한다.

Kirin.select = KirinSelector; // 2. Kirin의 select 프로퍼티를 KirinSelector로 설정한다. 
```

### 2. selector 만들기
```javascript
// src/js/selector.js
import { getKirinArrFromNodeList } from './utils/functions';
('use strict');

// Constructor
let Selector = function(sel) {
	let nodeList; // 1. 매개변수 sel에 일치하는 node를 담을 변수 선언
	try {
		if (sel && typeof sel === 'string') { // 2. sel이 유효한 값이고 문자열 일 때,
			nodeList = document.querySelectorAll(sel);  // 3. querySelectorAll을 이용하여 NodeList 를 문서에서 가져온다 
			if (!nodeList || nodeList.length === 0)
				throw new Error(`Didn't find any element-node from this argumnets: "${sel}"`);
		} else throw new Error('Arguments Error');
	} catch (e) {
		console.error(e);
		return;
	}

    return getKirinArrFromNodeList(nodeList);  
    // 4. 위에서 가져온 nodeList를 매개변수로 함수를 호출한다.
    // 5. 반환값은 nodeList객체를 이용하여 만든 kirinArr 객체이다.
};

export default Selector;
```

```javascript
// src/js/utils/function.js
const getKirinArrFromNodeList = (nodeList) => {
	let kirinArr = [];
	let index = 0;
	for (let node of nodeList) {
		kirinArr[index] = node;
		index++;
	}

    setPrototypeOfKirin(kirinArr); // 1. NodeList 객체를 KirinArr로 변환한다.
	return kirinArr; // 2. 변환한 KirinArr 객체를 반환한다.
};


const setPrototypeOfKirin = (kirinArr) => {
    const kirinArrProto = proto(kirinArr); // 1. kirinArr 객체를 매개변수로 proto 함수를 호출한다.
    // 2. 반환 값은 직접 구현한 메소드들의 this를 kirinArr 객체로 bind하여 반환한 메소드들이다. 
	Object.setPrototypeOf(kirinArrProto, Array.prototype); // 3. 반환 받은 객체를 배열처럼 다루기 위해 배열의 prototype과 연결한다.
	Object.setPrototypeOf(kirinArr, kirinArrProto); // 4. 마지막으로 kirinArr에서 메소드들을 직접 사용하기 위해 kirinArrProto와 연결한다.
};
```

```javascript
// src/js/proto.js
const proto = (kirinArr) => {
	const curStyleProps = [];
	const length = kirinArr.length;
	for (let i = 0; i < length; i++) {
		curStyleProps[i] = returnComputedStyle(kirinArr[i]); // 1. css를 참조 및 조작하기 위해 사용 
	}
	return {
		// 버전 및 같은 Kirin 객체임을 확인하기 위한 꼼수...?
		kirin: '1.0.0',
		// ...kirinArr,
		...events(kirinArr), // 2. event, effects, manipulation, traversing 등 메소드의 this를 kirinArr로 지정하여 메소드들을 반환받은 값을 묶은 객체로 만든다.
		...effects(kirinArr, curStyleProps),
		...manipulation(kirinArr, curStyleProps, length),
		...traversing(kirinArr, curStyleProps)
	};
};

export default proto;
```

위의 과정을 통해 Kirin.selector() 로 KirinArr 객체를 가져올 수 있다.
KirinArr의 prototype은 KirinArrProto (event, effects... 등과 연결된) 이다.
즉 KirinArr는 event, effects 등에서 구현된 메소드를 사용할 수 있다.

### 3. event 구현
```javascript
// src/js/events.js
('use strict');

const events = (kirinArr) => { // 1. 앞에서 전달받은 KirinArr 객체
	const click = (callback) => { // 2. click 메소드를 호출할 때 매개변수로 사용한 함수를 callback 함수로 사용한다.
		for (let node of kirinArr) {
			node.addEventListener('click', callback); // 3. kirinArr 객체를 순회하여 모든 노드에 click event를 추가한다.
		}
	};

	return {
		click // 4. click 메소드를 사용할 수 있도록 프로퍼티를 반환한다.
	};
};

export default events;
```

### 4. animation 구현
```javascript
// src/js/effects

const effects = (kirinArr, curStyleProps) => { // 1. kirinArr 객체와 위에서 구해둔 computedStyle
	const length = kirinArr.length; 
	const animations = [];
	const initHeight = [];
    const initDisplay = [];

    for (let i = 0; i < length; i++) {
		const { height, display } = curStyleProps[i];
        animations.push(Animation(kirinArr[i], curStyleProps[i])); // 2. animations 에 node와 style을 매개변수로 하여 Animation 함수를 실행한다.
        // 실행 결과로 Animation 객체를 반환한다.
		initHeight.push(height); 
		initDisplay.push(display); // 3. 자주 사용되는 height와 display는 미리 구해둔다.
	}

    // ...

    const slideAnimation = (name, option, callback = null) => { 
        // 4. name은 slide animation의 동작 방식(up, down, toggle)
        // option은 duration, easing 방식을 받아온다.
		let duration = 1000,
			easing = 'linear'; // 5. option을 설정하지 않았을 경우의 기본 값 설정

		if (typeof option === 'function') { // 6. 2번째 매개변수가 함수인지 확인한다.
			callback = option; // 6-1. 함수일 경우 콜백함수이므로 callback으로 지정
		} else if (option) {
			duration = getOwnOrInitProperty(option, 'duration', 1000); 
			easing = getOwnOrInitProperty(option, 'easing', 'linear'); // 6-2. 함수가 아닐경우 option
		}

		for (let i = 0; i < length; i++) {
			animations[i].genAnim({ // 7. animation 객체의 genAnim 메소드를 실행시킨다.
				name,
				display: initDisplay[i],
				height: initHeight[i],
				duration,
				easing,
				callback
			});
		}

		return kirinArr; // 8. 메소드 체이닝을 하기 위해 kirinArr 객체를 반환한다.
    };
    
    
	return {
        // ...
        slideToggle: (option, callback) => slideAnimation('slideToggle', option, callback) // 9. kirinArr에서 함수를 사용할 수 있도록 메소드를 반환한다.
        // ...
	};
}

```


```javascript
const Animation = (node, curStyleProp) => { // 1. node와 computedStyle
	let queue = []; // 2. 애니메이션을 호출 순서로 실행시키기 위한 queue이다.
	let isStop = false; 

    const genAnim = (anim) => { // 3. 위에서 호출했던 genAnim()
                                // queue 에 anim 객체를 push 한다.
		queue.push(anim);
		if (queue.length === 1) doAnimation(); // 4. queue에 길이가 1일 경우 doAnimation()을 실행하여 애니메이션을 실행시킨다.
	};

	const doAnimation = async () => { // 5. queue 의 맨 앞의 animation을 실행시키는 함수.
		isStop = false; // 6. 실행이 완료되기 전까지 상호배제를 위한 변수
		if (queue.length === 0) return; // 7. queue가 비어있다면 실행하지 않는다.

		const anim = queue[0];
		const { name } = anim; 
		switch (name) { // 8. animation의 이름을(위의 경우 slideToggle) 기준으로 분기를 나눈다.
			// ...
			case 'slideToggle':
				await slideAnimation(anim); // 9. 미리 만들어둔 slideAnimation을 실행한다.
				break;
			// ...
		}

		if (isStop) {  // 10. 만약 isStop 이 true일 경우, 사용자가 임의로 정지를 요청한 것이므로 queue를 비운다.
			queue = [];
			return false;
		} else { // 11. 그 외의 경우는 위에서 실행한 애니메이션인 queue의 맨 앞의 animation을 shift 하고 doAnimation()을 호출한다.
			queue.shift();
			doAnimation();
			return true;
		}
	};

    // ...
	
	const slideAnimation = (anim) => // 12. slide 를 구현한 함수
		new Promise((resolve, reject) => { // 13. 애니메이션을 순차적으로 실행하기 위해 Promise 객체로 만들었다.
			let fromHeight, toHeight, diff;
			const { name, display, height, duration, easing, callback } = anim; // 14. 여러 옵션들
			node.style.display = display; 
			node.style.overflow = 'hidden'; // 15. hidden속성이 없으면 내부 속성들이 삐져나오므로 설정 

			fromHeight = curStyleProp.height; // 16. 현재의 height
			switch (name) {
				case 'slideUp':
					toHeight = '0px';
					break;
				case 'slideDown':
					toHeight = height;
					break;
				case 'slideToggle':
					toHeight = fromHeight === '0px' ? height : '0px'; // 18. 목표 height 설정
					break;
			}

			diff = parseFloat(toHeight) - parseFloat(fromHeight); // 19. 높이의 차이

			let time = 0;
			const id = setInterval(() => {
				time += 10;
                node.style.height = easeFunction(easing, parseFloat(fromHeight), diff, time, duration) + 'px';
                // 20. 미리 제작한 easeFunction은 easing의 값에 따라 다르게 계산한다.
                // 높이의 차이, duration, 경과 time 을 이용하여 높이를 반복하여 설정한다.
              

				if (time >= duration) { // 21. 시간이 duration을 지났을 경우 종료한다.
					node.style.height = toHeight; // 22. 목표 높이로 보정을 한다.
					if (curStyleProp.height === '0px') { // 23. 높이가 0일 경우 완전 보이지 않게 설정한다.
						node.style.display = 'none';
					}
					doCallback(callback); // 24. callback함수가 있을 경우 실행
					clearInterval(id);
					resolve(true); // 25. 애니메이션 종료를 알린다.
				}

				if (isStop) {
					clearInterval(id);
					resolve(true);
				}
			}, 10);
        });
        
    // ...

	return {
		genAnim, // 26. 애니메이션을 실행시키는 genAnim을 반환한다.
		stop
	};
};

export default Animation;
```
