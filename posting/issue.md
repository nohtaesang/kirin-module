1. clone을 만들면서 생긴 문제.
```
const temp = el.clone(true)
target.appendTo(temp)
```
이렇게 temp를 사용하면 아주 잘 작동함.( 잘 작동하는 것이 아니다.) 그러나,
```
el.clone(true).appendTo(target)
```
이렇게 사용하면 복사가 안일어나는 현상이 생김.

```
const clone = (withDataAndEvents = true) => {
    const newNodeArr = [];

    let index = 0;
    for (let node of nodeArr) {
        newNodeArr[index] = node.cloneNode(withDataAndEvents);
        index++;
    }

    Object.setPrototypeOf(newNodeArr, Object.getPrototypeOf(nodeArr)); // NodeArr의 링크로 연결해준다.
    return newNodeArr;
};
```
위의 코드를

```
const clone = (withDataAndEvents = true) => {
    const newNodeArr = [];

    let index = 0;
    for (let node of nodeArr) {
        newNodeArr[index] = node.cloneNode(withDataAndEvents);
        index++;
    }

    Object.setPrototypeOf(newNodeArr, Object.getPrototypeOf(nodeArr)); // NodeArr의 링크로 연결해준다.
    nodeArr = newNodeArr; // 현재 클로저의 nodeArr를 새로만든 newNodeArr로 변경한다.
    return newNodeArr;
};
```
이렇게 바꾸면 문제는 해결된다.

그러나 이렇게 바꾸면 또 문제가 생긴다.
```
const temp = el.clone(true);
el.appendTo(target);
```
이렇게 하면 el이 target 으로 들어가는 것이 아닌, 복사된 el이 target 으로 들어간다.
즉 nodeArr를 수정하면 클로저 내의 nodeArr를 수정하게 되는 것이다.
결국 2번째 코드는 사용하면 안되는 코드이다.

```
Object.setPrototypeOf(newNodeArr, Object.getPrototypeOf(nodeArr)); // NodeArr의 링크로 연결해준다.
```
이 부분에서 prototpye을 연결해준다는 것이 문제인것일까?
연결한다고 해서 새로운 객체를 만들어 내는 것이 아니다.
newNodeArr는 새로운 배열이 맞지만, 이 배열은 Kirin 의 methods를 가지고 있지 않다.
methods를 쓰게 만들기 위해 prototype을 연결해 주었지만, 해당 prototype의 this는 여전히 clone이전의 nodeArr인 것이다.


체이닝을 하기 위해선 어떻게 해야 하는 것일까?

[해결 방법]
결국 clone 객체를 생성하여야 한다.
그 이유는 clone의 모체가 되는 객체와 분리되어야 하기 때문이다. (스코프를 공유해서는 안된다.)

NodeList 로 객체를 만드는 것은 영 불편하여 
아예 NodeList로 되어있던 kirin 객체를 을 Array 기반으로 변경해서 해결했다.

```
const clone = (withDataAndEvents = true) => {
    const nodeArr = [];
    kirinArr.forEach((node, i) => {
        nodeArr[i] = node.cloneNode(withDataAndEvents);
    });
    return getKirinArrFromNodeArr(nodeArr);
};
```
