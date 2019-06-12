# Kirin

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


### 4. animation 구현

